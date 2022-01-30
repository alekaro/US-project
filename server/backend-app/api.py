import time
from flask import Flask, request
import psycopg2
import json

app = Flask(__name__)

try:
    conn = psycopg2.connect(
        "dbname='postgres' user='postgres' host='postgres' password='postgres_password'")
    cur = conn.cursor()
except:
    # print("I am unable to connect to the database")
    exit(1)


# class User(db.Model):
#     __tablename__ = 'users'
#     id = db.Column(db.Integer, primary_key=True)
#     login = db.Column(db.String(40))
#     password = db.Column(db.String(80))

#     def __init__(self, login, password):
#         self.login = login
#         self.password = password


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/api/user/register', methods=['POST'])
def register():
    login = request.body.json['login']
    password = request.body.json['password']

    # user = User(login, password)
    # db.session.add(user)
    # db.session.commit()


@app.route('/api/user/login', methods=['POST'])
def login():
    data = request.get_json()
    print("DATA: ", data)
    cur.execute(
        f"""SELECT login from users WHERE login='{data['login']}' AND password='{data['password']}'""")
    row = cur.fetchone()
    print("cur.fetchone()[0]: ", row)
    return json.dumps({'login': row[0]} if row is not None else {}), 200, {'ContentType': 'application/json'}
