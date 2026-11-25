@echo off
setlocal

cd /d "%~dp0"
if errorlevel 1 (
  echo [ERRO] Nao foi possivel acessar a pasta do projeto.
  exit /b 1
)

for /f "delims=" %%B in ('git branch --show-current') do set "BRANCH=%%B"
if not "%BRANCH%"=="master" (
  echo [ERRO] O deploy deve ser executado na branch master.
  echo Branch atual: %BRANCH%
  exit /b 1
)

git diff --quiet
if errorlevel 1 (
  echo [ERRO] Existem alteracoes nao commitadas.
  git status --short
  exit /b 1
)

git diff --cached --quiet
if errorlevel 1 (
  echo [ERRO] Existem alteracoes staged aguardando commit.
  git status --short
  exit /b 1
)

rem A pasta .vs/ e um artefato local do Visual Studio e nao participa do deploy.
for /f "delims=" %%U in ('git status --porcelain ^| findstr /v /b /c:"?? .vs/"') do (
  echo [ERRO] Existem arquivos nao rastreados ou alteracoes pendentes fora de .vs/.
  git status --short
  exit /b 1
)

echo [1/3] Atualizando a master...
git pull --ff-only origin master
if errorlevel 1 (
  echo [ERRO] Nao foi possivel atualizar a master via fast-forward.
  exit /b 1
)

echo [2/3] Instalando dependencias...
call npm ci
if errorlevel 1 (
  echo [ERRO] A instalacao das dependencias falhou.
  exit /b 1
)

echo [3/3] Gerando e publicando o build...
call npm run deploy
if errorlevel 1 (
  echo [ERRO] O deploy falhou.
  exit /b 1
)

echo Deploy concluido com sucesso.
exit /b 0
