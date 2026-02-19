# PowerShell Script untuk Clone Semua Repository Template
# Akan organize repos per kategori dengan dokumentasi

$ErrorActionPreference = "Stop"

# Setup directories
$baseDir = Get-Location
$templatesDir = Join-Path $baseDir "templates"
$docsDir = Join-Path $baseDir "templates"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Template Repository Cloner" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Create main templates directory
if (-not (Test-Path $templatesDir)) {
    New-Item -ItemType Directory -Path $templatesDir -Force | Out-Null
    Write-Host "✅ Created folder: templates" -ForegroundColor Green
}

# Define repositories by category
$repos = @{
    "marketplace" = @(
        @{
            name = "medusajs-medusa"
            url = "https://github.com/medusajs/medusa.git"
            description = "Headless E-commerce Platform (32k⭐ - MOST FLEXIBLE)"
        },
        @{
            name = "bagisto-bagisto"
            url = "https://github.com/bagisto/bagisto.git"
            description = "Laravel E-commerce Marketplace (25k⭐ - USER FRIENDLY)"
        },
        @{
            name = "saleor-saleor"
            url = "https://github.com/saleor/saleor.git"
            description = "Enterprise Headless Commerce (22k⭐)"
        },
        @{
            name = "vercel-commerce"
            url = "https://github.com/vercel/commerce.git"
            description = "Modern Next.js Commerce (13k⭐)"
        }
    )
    "admin-dashboard" = @(
        @{
            name = "filamentphp-filament"
            url = "https://github.com/filamentphp/filament.git"
            description = "Laravel Admin Panel Builder (29k⭐ - BEST FOR LARAVEL)"
        },
        @{
            name = "filamentphp-demo"
            url = "https://github.com/filamentphp/demo.git"
            description = "Filament Admin working Example (1.1k⭐)"
        },
        @{
            name = "adminkit-adminkit"
            url = "https://github.com/adminkit/adminkit.git"
            description = "HTML Admin Template Bootstrap (1.6k⭐)"
        },
        @{
            name = "windmill-dashboard"
            url = "https://github.com/estevanmaito/windmill-dashboard.git"
            description = "Accessible Vue Dashboard (3k⭐)"
        }
    )
    "landing-page" = @(
        @{
            name = "nextra"
            url = "https://github.com/shuding/nextra.git"
            description = "Modern Docs/Landing Framework (13k⭐ - TOP CHOICE)"
        }
    )
    "cms" = @(
        @{
            name = "wagtail-wagtail"
            url = "https://github.com/wagtail/wagtail.git"
            description = "Enterprise CMS Django (20k⭐)"
        }
    )
}

# Create category folders and clone
$allRepos = @()
$failed = @()

foreach ($category in $repos.Keys) {
    $categoryDir = Join-Path $templatesDir $category
    
    if (-not (Test-Path $categoryDir)) {
        New-Item -ItemType Directory -Path $categoryDir -Force | Out-Null
        Write-Host "`n📁 Created category folder: $category" -ForegroundColor Cyan
    }
    
    foreach ($repo in $repos[$category]) {
        $repoPath = Join-Path $categoryDir $repo.name
        
        if (Test-Path $repoPath) {
            Write-Host "⏭️  Skipping (already exists): $($repo.name)" -ForegroundColor Yellow
            $allRepos += @{
                category = $category
                name = $repo.name
                path = $repoPath
                status = "EXISTING"
                description = $repo.description
            }
        } else {
            Write-Host "`n🔄 Cloning: $($repo.name)" -ForegroundColor Cyan
            Write-Host "   URL: $($repo.url)" -ForegroundColor DarkGray
            
            try {
                & git clone --depth 1 $repo.url $repoPath 2>&1 | Out-Null
                Write-Host "✅ Success: $($repo.name)" -ForegroundColor Green
                
                $allRepos += @{
                    category = $category
                    name = $repo.name
                    path = $repoPath
                    status = "CLONED"
                    description = $repo.description
                }
            } catch {
                Write-Host "❌ Failed: $($repo.name)" -ForegroundColor Red
                Write-Host "   Error: $_" -ForegroundColor DarkRed
                
                $failed += @{
                    name = $repo.name
                    url = $repo.url
                    error = $_
                }
            }
        }
    }
}

# Create index documentation
Write-Host "`n" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📝 Creating Documentation..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan

$indexContent = @"
# 📦 Template Repository Collection
**Created:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
**Location:** $(Resolve-Path $templatesDir)

## 📊 Summary
- **Total Repositories:** $($allRepos.Count)
- **Successfully Cloned:** $($allRepos | Where-Object { $_.status -eq "CLONED" } | Measure-Object).Count
- **Existing Repositories:** $($allRepos | Where-Object { $_.status -eq "EXISTING" } | Measure-Object).Count
- **Failed:** $($failed.Count)

---

## 📂 Repository Structure

### 🛒 Marketplace / E-Commerce (4 repos)

"@

# Add marketplace repos
$repos["marketplace"] | ForEach-Object {
    $repoInfo = $allRepos | Where-Object { $_.name -eq $_.name } | Select-Object -First 1
    $indexContent += @"
#### $($_.name)
- **Description:** $($_.description)
- **URL:** $($_.url)
- **Path:** `templates/marketplace/$($_.name)`
- **Tech:** 
"@
    if ($_.name -like "*medusa*") { $indexContent += " Node.js, TypeScript, PostgreSQL`n" }
    elseif ($_.name -like "*bagisto*") { $indexContent += " Laravel, Vue.js, MySQL/PostgreSQL`n" }
    elseif ($_.name -like "*saleor*") { $indexContent += " Python, Django, GraphQL`n" }
    elseif ($_.name -like "*commerce*") { $indexContent += " Next.js, TypeScript, Serverless`n" }
    
    $indexContent += @"
- **Setup:** 
  - [ ] Navigate to folder
  - [ ] Read README.md
  - [ ] Install dependencies
  - [ ] Configure .env
  - [ ] Run development server

---

"@
}

$indexContent += @"
### 🎛️ Admin Dashboard (4 repos)

"@

# Add admin dashboard repos
$repos["admin-dashboard"] | ForEach-Object {
    $indexContent += @"
#### $($_.name)
- **Description:** $($_.description)
- **URL:** $($_.url)
- **Path:** `templates/admin-dashboard/$($_.name)`
- **Tech:**
"@
    if ($_.name -like "*filament*") { $indexContent += " Laravel, Livewire, Tailwind CSS`n" }
    elseif ($_.name -like "*adminkit*") { $indexContent += " HTML, CSS, Bootstrap 5`n" }
    elseif ($_.name -like "*windmill*") { $indexContent += " Vue.js 3, Tailwind CSS`n" }
    
    $indexContent += @"
- **Setup:**
  - [ ] Navigate to folder
  - [ ] Read README.md
  - [ ] Install dependencies
  - [ ] Configure environment
  - [ ] Run development server

---

"@
}

$indexContent += @"
### 📄 Landing Page / Docs (1 repo)

#### $($repos["landing-page"][0].name)
- **Description:** $($repos["landing-page"][0].description)
- **URL:** $($repos["landing-page"][0].url)
- **Path:** `templates/landing-page/$($repos["landing-page"][0].name)`
- **Tech:** Next.js, TypeScript, Tailwind CSS
- **Setup:**
  - [ ] Navigate to folder
  - [ ] Read README.md
  - [ ] npm install
  - [ ] npm run dev

---

### 📰 CMS (1 repo)

#### $($repos["cms"][0].name)
- **Description:** $($repos["cms"][0].description)
- **URL:** $($repos["cms"][0].url)
- **Path:** `templates/cms/$($repos["cms"][0].name)`
- **Tech:** Python, Django, PostgreSQL
- **Setup:**
  - [ ] Navigate to folder
  - [ ] Read README.md
  - [ ] Create virtual environment
  - [ ] pip install -r requirements.txt
  - [ ] Configure database
  - [ ] python manage.py runserver

---

## 🎯 Quick Start Guide

### 1. Explore a Template
\`\`\`powershell
cd templates/marketplace/medusajs-medusa
cat README.md
\`\`\`

### 2. Install Dependencies
\`\`\`bash
# For Node.js projects
npm install

# For Laravel projects
composer install

# For Python projects
pip install -r requirements.txt
\`\`\`

### 3. Setup Environment
\`\`\`bash
# Copy example env file
cp .env.example .env

# Or for Laravel
cp .env.example .env

# Update configuration as needed
\`\`\`

### 4. Run Development Server
\`\`\`bash
# Node.js/Next.js
npm run dev

# Laravel
php artisan serve

# Python/Django
python manage.py runserver
\`\`\`

---

## 📋 Repository Details

### 🥇 Top Recommendations

**If building Marketplace/E-Commerce:**
1. **Medusajs** - Most flexible, headless architecture (32k⭐)
2. **Bagisto** - Most user-friendly, Laravel ecosystem (25k⭐)
3. **Saleor** - Enterprise features, GraphQL API (22k⭐)

**If building Admin Dashboard:**
1. **Filament** - Best Laravel admin panel (29k⭐)
2. **AdminKit** - Framework-agnostic HTML template (1.6k⭐)
3. **Windmill Dashboard** - Beautiful, accessible Vue.js (3k⭐)

**If building Landing Page:**
1. **Nextra** - Modern documentation framework (13k⭐)

**If building CMS:**
1. **Wagtail** - Enterprise-grade Django CMS (20k⭐)

---

## 🔍 License Summary
All repositories use MIT or BSD-3-Clause license ✅
- **MIT:** Medusajs, Bagisto, Vercel Commerce, Nextra, Filament, Filament Demo, AdminKit, Windmill Dashboard
- **BSD 3-Clause:** Saleor, Wagtail

**Commercial Use:** ✅ ALLOWED for all repos

---

## 📖 Next Steps

1. **Evaluate** - Pick 2-3 repos that match your needs
2. **Customize** - Modify code for your branding/features
3. **Test** - Run locally and verify all features work
4. **Deploy** - Follow framework-specific deployment guides
5. **Maintain** - Keep up with upstream updates

---

## 🆘 Common Issues & Solutions

### Git Clone Failed
\`\`\`powershell
# Ensure git is installed
git --version

# Try cloning manually
git clone https://github.com/username/repo.git
\`\`\`

### Node.js/npm Not Found
\`\`\`powershell
# Install Node.js from https://nodejs.org/
# Or use package manager
choco install nodejs  # Windows Chocolatey
brew install node     # macOS Homebrew
\`\`\`

### Laravel/PHP Issues
\`\`\`bash
# Install PHP and Composer
# Check installation
php --version
composer --version

# Install dependencies
composer install
\`\`\`

### Python/Django Issues
\`\`\`bash
# Create virtual environment
python -m venv venv

# Activate
venv\\Scripts\\activate  # Windows
source venv/bin/activate  # macOS/Linux

# Install requirements
pip install -r requirements.txt
\`\`\`

---

## 📞 Support & Resources

- **GitHub Issues:** Visit each repository's issues tab for help
- **Documentation:** Each repo has comprehensive README.md
- **Community:** Check repository discussions & forums
- **Local Docs:** `EVALUATION_GUIDE.md` for evaluation checklist

---

## 📝 Modification History

| Date | Action | Details |
|------|--------|---------|
| $(Get-Date -Format "yyyy-MM-dd HH:mm:ss") | Created | Initial clone of all repositories |

---

**Template Collection Ready!** 🎉

All repositories are now available for:
- ✅ Study and learning
- ✅ Customization and extension
- ✅ Commercial template creation
- ✅ Building your own SaaS/products

Happy coding! 🚀
"@

$indexPath = Join-Path $docsDir "INDEX.md"
$indexContent | Out-File -FilePath $indexPath -Encoding UTF8 -Force
Write-Host "✅ Created: templates\INDEX.md" -ForegroundColor Green

# Create category-specific README files
foreach ($category in $repos.Keys) {
    $categoryDir = Join-Path $templatesDir $category
    $readmePath = Join-Path $categoryDir "README.md"
    
    $categoryContent = @"
# $($category.ToUpper()) Templates

**Category:** $category
**Created:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

## Repositories in This Category

"@
    
    $repos[$category] | ForEach-Object {
        $categoryContent += @"
### $($_.name)
- **Description:** $($_.description)
- **Repository:** $($_.url)
- **Folder:** `$($_.name)`

**Quick Start:**
\`\`\`bash
cd $($_.name)
# Follow README.md in each folder
\`\`\`

---

"@
    }
    
    $categoryContent | Out-File -FilePath $readmePath -Encoding UTF8 -Force
    Write-Host "✅ Created: templates\$category\README.md" -ForegroundColor Green
}

# Print summary
Write-Host "`n" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ CLONE SUMMARY" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📊 Statistics:" -ForegroundColor Cyan
Write-Host "  • Total Repositories: $($allRepos.Count)" -ForegroundColor White
Write-Host "  • Successfully Cloned: $($allRepos | Where-Object { $_.status -eq "CLONED" } | Measure-Object).Count" -ForegroundColor Green
Write-Host "  • Already Existing: $($allRepos | Where-Object { $_.status -eq "EXISTING" } | Measure-Object).Count" -ForegroundColor Yellow
Write-Host "  • Failed: $($failed.Count)" -ForegroundColor Red
Write-Host ""

if ($failed.Count -gt 0) {
    Write-Host "⚠️  Failed Clones:" -ForegroundColor Yellow
    $failed | ForEach-Object {
        Write-Host "  • $($_.name)" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "📁 Location:" -ForegroundColor Cyan
Write-Host "  $(Resolve-Path $templatesDir)" -ForegroundColor White
Write-Host ""

Write-Host "📖 Documentation:" -ForegroundColor Cyan
Write-Host "  • $indexPath" -ForegroundColor White
Write-Host ""

Write-Host "🚀 Next Steps:" -ForegroundColor Cyan
Write-Host "  1. Open: templates\INDEX.md" -ForegroundColor White
Write-Host "  2. Pick repository to evaluate" -ForegroundColor White
Write-Host "  3. Follow EVALUATION_GUIDE.md for assessment" -ForegroundColor White
Write-Host "  4. Use EVALUATION_TRACKER.md for documentation" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✨ All Done! Happy Exploring! 🎉" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
