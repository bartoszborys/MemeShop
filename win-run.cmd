python .\backend\manage.py migrate 
cd .\backend
start python .\manage.py runserver
cd ..
npm --prefix ./frontend start