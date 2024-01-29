下記はWindowsOS用の設定です。
# Backend環境設定: Django / Terminal 1
    Python 3.9.0をダウンロード （まだインストールしていない方のみ）: https://www.python.org/ftp/python/3.9.0/python-3.9.0-amd64.exe
    # Python環境準備：
    1.cd backend
    2.py -3.9 -m venv venv　又は　python -m venv venv
    3.venv/Scripts/activate
    4.pip install -r requirements.txt
    5.python manage.py runserver    (Djangoを起動)
    # Djangoはデフォルトでポート 8000 で起動
# Frontend環境設定: React / Terminal 2
    NVMをダウンロード（まだインストールしていない方のみ）：https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe
    # nvmを設定
    1.nvm install 14.16.0
    2.nvm use 14.16.0               (管理者として実行)
    3.cd pettie-frontend
    4.npm install
    5.npm run start                (Reactを起動)
    # Reactはデフォルトでポート 3000 で起動