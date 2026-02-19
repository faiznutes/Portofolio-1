#!/usr/bin/env python3
"""
GitHub Repository Verifier untuk Template Komersial
Verifikasi kriteria: lisensi, stars, update date, issues
Requires: pip install requests python-dateutil
"""

import requests
import json
from datetime import datetime, timedelta
from typing import List, Dict, Optional

class GitHubRepoVerifier:
    def __init__(self, token: Optional[str] = None):
        """
        Inisialisasi verifier
        token: GitHub Personal Access Token (optional, tapi recommended untuk rate limit lebih tinggi)
        """
        self.token = token
        self.headers = {
            "Accept": "application/vnd.github.v3+json"
        }
        if token:
            self.headers["Authorization"] = f"token {token}"
        
        self.base_url = "https://api.github.com"
        self.valid_licenses = ["MIT", "Apache-2.0", "BSD-3-Clause", "BSD-2-Clause"]
        self.min_stars = 100
        self.max_days_since_update = 730  # 2 tahun
        
    def get_repo_info(self, owner: str, repo: str) -> Optional[Dict]:
        """
        Ambil informasi repository dari GitHub API
        """
        try:
            url = f"{self.base_url}/repos/{owner}/{repo}"
            response = requests.get(url, headers=self.headers, timeout=10)
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 404:
                print(f"❌ Repository tidak ditemukan: {owner}/{repo}")
                return None
            elif response.status_code == 403:
                print("⚠️ Rate limit terlampaui. Gunakan GitHub token untuk limit lebih tinggi")
                return None
            else:
                print(f"❌ Error {response.status_code}: {response.text}")
                return None
        except Exception as e:
            print(f"❌ Error saat fetch data: {str(e)}")
            return None

    def get_issues_count(self, owner: str, repo: str) -> Optional[int]:
        """
        Ambil jumlah open issues (exclude pull requests)
        """
        try:
            url = f"{self.base_url}/repos/{owner}/{repo}/issues"
            params = {
                "state": "open",
                "per_page": 1  # Hanya perlu count
            }
            response = requests.get(url, headers=self.headers, params=params, timeout=10)
            
            if response.status_code == 200:
                # GitHub mengembalikan total count di link header
                link_header = response.headers.get('Link', '')
                if 'last' in link_header:
                    # Parse last page number dari Link header
                    import re
                    match = re.search(r'page=(\d+)>; rel="last"', link_header)
                    if match:
                        return int(match.group(1))
                return 0
            return None
        except Exception as e:
            print(f"⚠️ Tidak bisa ambil issue count: {str(e)}")
            return None

    def check_license(self, license_name: Optional[str]) -> tuple[bool, str]:
        """
        Check lisensi valid untuk komersial
        Return: (is_valid, license_display_name)
        """
        if not license_name:
            return False, "Tidak ada lisensi"
        
        license_key = license_name.strip()
        
        if license_key in self.valid_licenses:
            return True, license_key
        elif "MIT" in license_key:
            return True, "MIT"
        elif "Apache" in license_key:
            return True, "Apache 2.0"
        elif "BSD" in license_key:
            return True, license_key
        else:
            return False, license_key

    def check_update_date(self, pushed_at: str) -> tuple[bool, str, int]:
        """
        Check apakah updated dalam 2 tahun terakhir
        Return: (is_valid, formatted_date, days_since_update)
        """
        try:
            last_push = datetime.fromisoformat(pushed_at.replace('Z', '+00:00'))
            now = datetime.now(last_push.tzinfo)
            days_since = (now - last_push).days
            
            is_valid = days_since <= self.max_days_since_update
            formatted = last_push.strftime("%d %b %Y")
            
            return is_valid, formatted, days_since
        except:
            return False, "Invalid date", 999

    def verify_repo(self, owner: str, repo: str) -> Dict:
        """
        Verifikasi repository lengkap terhadap kriteria
        """
        print(f"\n🔍 Verifikasi: {owner}/{repo}")
        print("-" * 60)
        
        data = self.get_repo_info(owner, repo)
        if not data:
            return {"valid": False, "error": "Tidak bisa ambil data repository"}
        
        # Check lisensi
        license_obj = data.get('license', {})
        license_name = license_obj.get('name') if license_obj else None
        license_valid, license_display = self.check_license(license_name)
        
        # Check stars
        stars = data.get('stargazers_count', 0)
        stars_valid = stars >= self.min_stars
        
        # Check update date
        pushed_at = data.get('pushed_at')
        update_valid, update_date, days_since = self.check_update_date(pushed_at)
        
        # Check issues
        open_issues = self.get_issues_count(owner, repo)
        issues_valid = open_issues is None or open_issues < 50  # Warning threshold
        
        # Compile hasil
        result = {
            "valid": license_valid and stars_valid and update_valid and issues_valid,
            "owner": owner,
            "repo": repo,
            "url": data.get('html_url'),
            "description": data.get('description', 'N/A'),
            "license": {
                "valid": license_valid,
                "name": license_display,
                "status": "✅" if license_valid else "❌"
            },
            "stars": {
                "count": stars,
                "valid": stars_valid,
                "status": "✅" if stars_valid else "❌"
            },
            "update": {
                "date": update_date,
                "days_since": days_since,
                "valid": update_valid,
                "status": "✅" if update_valid else "❌"
            },
            "issues": {
                "open": open_issues,
                "valid": issues_valid,
                "status": "✅" if issues_valid else "⚠️"
            },
            "language": data.get('language'),
            "topics": data.get('topics', []),
            "forks": data.get('forks_count'),
            "watchers": data.get('watchers_count'),
        }
        
        # Display hasil
        print(f"📦 Repo: {owner}/{repo}")
        print(f"🔗 URL: {result['url']}")
        print(f"📝 Deskripsi: {result['description']}")
        print(f"🏷️  Bahasa: {result['language']}")
        print(f"\n📊 VERIFIKASI KRITERIA:")
        print(f"  {result['license']['status']} Lisensi: {result['license']['name']}")
        print(f"  {result['stars']['status']} Stars: {result['stars']['count']} (min: {self.min_stars})")
        print(f"  {result['update']['status']} Update: {result['update']['date']} ({result['update']['days_since']} hari lalu)")
        print(f"  {result['issues']['status']} Issues: {result['issues']['open']} open")
        
        if result['valid']:
            print(f"\n✅ PASSED - Memenuhi semua kriteria!")
        else:
            print(f"\n❌ FAILED - Tidak memenuhi kriteria")
        
        return result

    def verify_batch(self, repos: List[tuple]) -> List[Dict]:
        """
        Verifikasi banyak repository
        Input: list of (owner, repo_name) tuples
        """
        results = []
        for owner, repo in repos:
            result = self.verify_repo(owner, repo)
            results.append(result)
        
        return results

    def generate_report(self, results: List[Dict]) -> str:
        """
        Generate laporan terstruktur
        """
        passed = [r for r in results if r.get('valid')]
        failed = [r for r in results if not r.get('valid')]
        
        report = "\n" + "="*70 + "\n"
        report += "📋 LAPORAN VERIFIKASI REPOSITORY\n"
        report += "="*70 + "\n\n"
        
        report += f"✅ PASSED ({len(passed)}):\n"
        report += "-"*70 + "\n"
        for r in passed:
            report += f"  • {r['owner']}/{r['repo']}\n"
            report += f"    ⭐ {r['stars']['count']} | 📜 {r['license']['name']} | 📅 {r['update']['date']}\n"
        
        if failed:
            report += f"\n❌ FAILED ({len(failed)}):\n"
            report += "-"*70 + "\n"
            for r in failed:
                if r.get('error'):
                    owner = r.get('owner', 'unknown')
                    repo = r.get('repo', 'unknown')
                    report += f"  • {owner}/{repo}: {r['error']}\n"
                else:
                    owner = r.get('owner', 'unknown')
                    repo = r.get('repo', 'unknown')
                    issues = []
                    if not r.get('license', {}).get('valid'):
                        issues.append(f"Lisensi: {r['license']['name']}")
                    if not r.get('stars', {}).get('valid'):
                        issues.append(f"Stars: {r['stars']['count']}")
                    if not r.get('update', {}).get('valid'):
                        issues.append(f"Update: {r['update']['days_since']} hari lalu")
                    if not r.get('issues', {}).get('valid'):
                        issues.append(f"Issues: {r['issues']['open']}")
                    report += f"  • {owner}/{repo}: {', '.join(issues)}\n"
        
        report += "\n" + "="*70 + "\n"
        return report


def main():
    """
    Main function dengan contoh penggunaan
    """
    
    # KONFIGURASI
    GITHUB_TOKEN = None  # Set dengan token Anda jika ada: "ghp_xxxxx"
    
    # Repository untuk diverifikasi
    # Diambil dari REPOSITORY_RESEARCH.md (updated dengan repo yang benar-benar ada)
    repos_to_verify = [
        # Landing Page & Modern Frameworks
        ("shuding", "nextra"),                    # Beautiful docs/landing framework
        ("vercel", "nextjs-commerce"),            # Vercel commerce example
        
        # Company Profile & Portfolio
        ("tailwindcss", "tailwindcss.com"),       # Tailwind official site
        
        # Marketplace & E-commerce
        ("bagisto", "bagisto"),                   # Laravel e-commerce
        ("medusajs", "medusa"),                   # Headless commerce
        ("saleor", "saleor"),                     # Headless commerce (Python)
        ("vercel", "commerce"),                   # Next.js commerce
        
        # Admin Dashboard
        ("filamentphp", "filament"),              # Laravel admin panel
        ("filamentphp", "demo"),                  # Filament demo
        ("adminkit", "adminkit"),                 # HTML admin template
        ("estevanmaito", "windmill-dashboard"),   # Vue dashboard
        
        # Additional Verified
        ("directus", "directus"),                 # Headless CMS
        ("strapi", "strapi"),                     # Headless CMS
        ("wagtail", "wagtail"),                   # Python/Django CMS
    ]
    
    # Inisialisasi verifier
    verifier = GitHubRepoVerifier(token=GITHUB_TOKEN)
    
    print("\n" + "="*70)
    print("GitHub Repository Verifier untuk Template Komersial")
    print("="*70)
    print(f"Total repos untuk diverifikasi: {len(repos_to_verify)}")
    print(f"Note: requests tanpa token memiliki rate limit 60/hour")
    if GITHUB_TOKEN:
        print(f"Token: Aktif (limit 5000/hour)")
    print("="*70)
    
    # Verify batch
    results = verifier.verify_batch(repos_to_verify)
    
    # Generate dan print laporan
    report = verifier.generate_report(results)
    print(report)
    
    # Save laporan ke file
    with open('github_verification_report.txt', 'w', encoding='utf-8') as f:
        f.write(report)
    
    print("✅ Laporan disimpan ke: github_verification_report.txt\n")
    
    # Export JSON untuk analisis lebih lanjut
    with open('github_verification_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print("✅ Data JSON disimpan ke: github_verification_results.json\n")


if __name__ == "__main__":
    main()
