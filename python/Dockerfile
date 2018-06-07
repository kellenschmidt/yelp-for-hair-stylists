FROM python:3.6 as builder
RUN mkdir /django
WORKDIR /django
RUN pip3 install django djangorestframework mysqlclient
COPY . .

CMD ["python3", "manage.py" "runserver"]
