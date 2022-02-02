import pickle
from pyexpat import model
import pandas as pd
import json

filename = './Exported_MLPRegressor.sav'
loaded_model = pickle.load(open(filename, 'rb'))
# predict_result = loaded_model.predict(test_features)


d = {
    'Make': 'BMW',
    'Model': '1 Series M',
    'Year': '2011',
    'Engine Fuel Type': 'premium unleaded (required)',
    'Engine HP': '300',
    'Engine Cylinders': '6',
    'Transmission Type': 'MANUAL',
    'Driven_Wheels': 'rear wheel drive',
    'Number of Doors': '2',
    # 'Vehicle_Size': 'Compact',
    'Vehicle_Style': 'Convertible',
    'highway MPG': '28',
    'city mpg': '19'
}


def convert_dict_to_df_dict(dict_a):
    dict_b = {}
    for key in dict_a:
        if dict_a[key].isdigit():
            dict_b[key] = dict_a[key]
        else:
            dict_b[f'{key}_{dict_a[key]}'] = 1
    return dict_b


converted_dict = convert_dict_to_df_dict(d)
print(converted_dict)
dict_df = pd.DataFrame([converted_dict])
print(dict_df)

with open('data.json', 'w') as fp:
    json.dump(dict_df.to_dict('records')[0], fp, indent=4)

with open('data_template.json', 'r') as fp:
    data = json.load(fp)

for key in converted_dict:
    data[key] = converted_dict[key]

print(pd.DataFrame([data]))

loaded_model = pickle.load(open(filename, 'rb'))
predict_result = loaded_model.predict(
    pd.DataFrame([data]))

print(predict_result)
