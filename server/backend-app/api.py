import time
from flask import Flask, request
import psycopg2
import json
import pickle
import pandas as pd
from lib import convert_dict_to_df

app = Flask(__name__)

try:
    conn = psycopg2.connect(
        "dbname='postgres' user='postgres' host='postgres' password='postgres_password'")
    cur = conn.cursor()

    filename = 'Exported_MLPRegressor.sav'
    loaded_model = pickle.load(open(filename, 'rb'))
except:
    print("I am unable to connect to the database")
    exit(1)


@app.route('/api/user/register', methods=['POST'])
def register():
    data = request.get_json()
    print("DATA: ", data)

    if cur.execute(f"""INSERT INTO users(login, password) VALUES ('{data['login']}', '{data['password']}');"""):
        return json.dumps({'code': 0}), 200, {'ContentType': 'application/json'}

    return json.dumps({'code': 1}), 500, {'ContentType': 'application/json'}


@app.route('/api/user/login', methods=['POST'])
def login():
    data = request.get_json()
    print("DATA: ", data)
    cur.execute(
        f"""SELECT user_id, login from users WHERE login='{data['login']}' AND password='{data['password']}'""")
    row = cur.fetchone()
    print("cur.fetchone()[0]: ", row)
    return json.dumps({'user_id': row[0], 'login': row[1]} if row is not None else {}), 200, {'ContentType': 'application/json'}


@app.route('/api/evaluate', methods=['POST'])
def evaluate():
    data = request.get_json()
    converted_dict = convert_dict_to_df(data)

    with open('data_template.json', 'r') as fp:
        data = json.load(fp)

    for key in converted_dict:
        data[key] = converted_dict[key]

    predict_result = loaded_model.predict(pd.DataFrame([data]))
    return json.dumps({'predicted_value': predict_result[0]}), 200, {'ContentType': 'application/json'}

# CREATE TABLE users (
#     user_id    serial PRIMARY KEY,
# 	login   text NOT NULL CHECK (login <> ''),
# 	password text NOT NULL CHECK (password <> '')
# );

# CREATE TABLE evaluation_history (
#     eh_id serial PRIMARY KEY,
# 	user_id int FOREIGN KEY REFERENCES users(user_id),
# 	make text NOT NULL,
# 	model text NOT NULL,
# 	year smallint NOT NULL,
# 	engine_type_fuel text NOT NULL,
# 	engine_hp   smallint NOT NULL,
# 	engine_cylinders smallint NOT NULL,
# 	transmission_type text NOT NULL,
# 	driven_wheels text NOT NULL,
# 	number_of_doors smallint NOT NULL,
# 	vehicle_size text NOT NULL,
# 	vehicle_style text NOT NULL,
# 	highway_mpg smallint NOT NULL,
# 	city_mpg smallint NOT NULL
# );
