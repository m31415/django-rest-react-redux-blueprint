# django-rest-react-redux-blueprint

For detailed explanation of this stack read up my medium guide @ https://medium.com/@maikluchtmeyer

# 1 Setup

1.1 pyenv
* Check if you have a pyenv version installed </br>
* Install Python 3.6.0 with ```pyenv install 3.6.0``` or set the local python verison you want to use with 
```pyenv local 3.X```
* Check if pyenv uses your local pytoon version (cd directory and typ ```python```)

1.2 virtualenv
* ```virtualenv --python=python virtual-env-blueprint```

1.3 requirements
* Activate virtualenv (PyCharm(preferred) or Terminal)
* ```pip install -r requirements.txt```

1.4 django-admin
* Make migrations, migrate and create superuser </br>
```python manage.py makemigrations``` </br>
```python manage.py migrate``` </br>
```python manage.py createsuperuser```

1.5 webpack
* Create FrontEnd Bundle with ```npm run dev```
