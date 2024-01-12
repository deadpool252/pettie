# TERMINAL 1:
cd backend
python -m venv venv
venv/Scripts/activate
pip install -r requirements.txt
python manage.py runserver
# TERMINAL 2:
cd pettie-frontend
npm install
npm start
