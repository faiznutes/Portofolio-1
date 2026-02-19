@echo off
REM Script untuk clone semua repository template
REM This is simpler batch script yang lebih reliable

setlocal enabledelayedexpansion

echo ========================================
echo Template Repository Cloner
echo ========================================
echo.

REM Create directory structure
if not exist "templates" mkdir templates
if not exist "templates\marketplace" mkdir templates\marketplace
if not exist "templates\admin-dashboard" mkdir templates\admin-dashboard
if not exist "templates\landing-page" mkdir templates\landing-page
if not exist "templates\cms" mkdir templates\cms

echo Created folder structure
echo.

REM Marketplace repositories
echo [1/10] Cloning medusajs/medusa...
cd templates\marketplace
git clone --depth 1 https://github.com/medusajs/medusa.git medusajs-medusa
cd ..\..\

echo [2/10] Cloning bagisto/bagisto...
cd templates\marketplace
git clone --depth 1 https://github.com/bagisto/bagisto.git bagisto-bagisto
cd ..\..\

echo [3/10] Cloning saleor/saleor...
cd templates\marketplace
git clone --depth 1 https://github.com/saleor/saleor.git saleor-saleor
cd ..\..\

echo [4/10] Cloning vercel/commerce...
cd templates\marketplace
git clone --depth 1 https://github.com/vercel/commerce.git vercel-commerce
cd ..\..\

REM Admin Dashboard repositories
echo [5/10] Cloning filamentphp/filament...
cd templates\admin-dashboard
git clone --depth 1 https://github.com/filamentphp/filament.git filamentphp-filament
cd ..\..\

echo [6/10] Cloning filamentphp/demo...
cd templates\admin-dashboard
git clone --depth 1 https://github.com/filamentphp/demo.git filamentphp-demo
cd ..\..\

echo [7/10] Cloning adminkit/adminkit...
cd templates\admin-dashboard
git clone --depth 1 https://github.com/adminkit/adminkit.git adminkit-adminkit
cd ..\..\

echo [8/10] Cloning estevanmaito/windmill-dashboard...
cd templates\admin-dashboard
git clone --depth 1 https://github.com/estevanmaito/windmill-dashboard.git windmill-dashboard
cd ..\..\

REM Landing Page
echo [9/10] Cloning shuding/nextra...
cd templates\landing-page
git clone --depth 1 https://github.com/shuding/nextra.git nextra
cd ..\..\

REM CMS
echo [10/10] Cloning wagtail/wagtail...
cd templates\cms
git clone --depth 1 https://github.com/wagtail/wagtail.git wagtail-wagtail
cd ..\..\

echo.
echo ========================================
echo Clone complete!
echo ========================================
echo.
echo All repositories cloned to:
echo.
echo templates\
echo   - marketplace\ (4 repos)
echo   - admin-dashboard\ (4 repos)
echo   - landing-page\ (1 repo)
echo   - cms\ (1 repo)
echo.
echo Next steps:
echo 1. Open templates\ folder
echo 2. Navigate to a repository
echo 3. Read README.md for setup instructions
echo.
