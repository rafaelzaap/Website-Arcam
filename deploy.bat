@echo off
setlocal
set "CODIGO=0"
set "PAUSAR=1"
if /i "%~1"=="--no-pause" set "PAUSAR="

echo ========================================
echo       Deploy do Site ARCAM
echo ========================================
echo.
cd /d "%~dp0"
if errorlevel 1 (
  echo [ERRO] Nao foi possivel acessar a pasta do projeto.
  goto :falha
)

for /f "delims=" %%B in ('git branch --show-current') do set "BRANCH=%%B"
if not "%BRANCH%"=="master" (
  echo [ERRO] O deploy deve ser executado na branch master.
  echo Branch atual: %BRANCH%
  goto :falha
)

git diff --quiet
if errorlevel 1 (
  echo [ERRO] Existem alteracoes nao commitadas.
  git status --short
  goto :falha
)

git diff --cached --quiet
if errorlevel 1 (
  echo [ERRO] Existem alteracoes staged aguardando commit.
  git status --short
  goto :falha
)

rem A pasta .vs/ e um artefato local do Visual Studio e nao participa do deploy.
for /f "delims=" %%U in ('git status --porcelain ^| findstr /v /b /c:"?? .vs/"') do (
  echo [ERRO] Existem arquivos nao rastreados ou alteracoes pendentes fora de .vs/.
  git status --short
  goto :falha
)

echo [1/3] Atualizando a master via fast-forward...
git pull --ff-only origin master
if errorlevel 1 (
  echo [ERRO] Nao foi possivel atualizar a master via fast-forward.
  goto :falha
)
echo [OK] Master atualizada.
echo.

echo [2/3] Instalando dependencias com npm ci...
call npm ci
if errorlevel 1 (
  echo [ERRO] A instalacao das dependencias falhou.
  goto :falha
)
echo [OK] Dependencias instaladas.
echo.

echo [3/3] Gerando o build e publicando via gh-pages...
call npm run deploy
if errorlevel 1 (
  echo [ERRO] O deploy falhou.
  goto :falha
)

echo [OK] Deploy concluido com sucesso.
goto :fim

:falha
set "CODIGO=1"
echo.
echo [FALHA] O deploy foi interrompido. Consulte a mensagem acima.

:fim
if defined PAUSAR (
  echo.
  pause
)
exit /b %CODIGO%
