# -*- coding: utf-8 -*-
"""
Created on Sun Jan 30 14:12:43 2022

@author: MichaelBaranski
"""

from sklearn import metrics
from sklearn.neural_network import MLPRegressor
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import pickle
import json

car_dataset = pd.read_csv("data.csv")
car_dataset.dropna(inplace=True)

print(car_dataset.head())

# Plotting for data analysis

fig_size = plt.rcParams['figure.figsize']
fig_size[0] = 20
fig_size[1] = 15
plt.rcParams['figure.figsize'] = fig_size

sns.distplot(car_dataset['MSRP'], bins=20, kde=False)

top_makes = car_dataset.Make.value_counts()
top_makes[:20].plot(kind='bar')
plt.xlabel('Make')

sns.lineplot(x="Engine HP", y="MSRP", data=car_dataset)

sns.lineplot(x="Popularity", y="MSRP", data=car_dataset)

sns.lineplot(x="Make", y="MSRP", data=car_dataset)

sns.barplot(x="Vehicle Size", y="MSRP", data=car_dataset)

sns.barplot(x="Vehicle Style", y="MSRP", data=car_dataset)

sns.barplot(x="Make", y="MSRP", data=car_dataset)

# Data preprocessing

# Drop Make and Model - too many unique values

car_dataset = car_dataset.drop(['Popularity', 'Market Category'], axis=1)

# First drop then translate from string to numerical value for ML - Add make to learning set, try with removing popularity

car_dataset_temp = car_dataset.drop(['Engine Fuel Type', 'Transmission Type',
                                    'Driven_Wheels', 'Vehicle Size', 'Vehicle Style', 'Make', 'Model'], axis=1)

print(car_dataset_temp.head())

Engine_Fuel_Type = pd.get_dummies(
    car_dataset['Engine Fuel Type'], prefix='Engine Fuel Type').iloc[:, 1:]
Transmission_Type = pd.get_dummies(
    car_dataset['Transmission Type'], prefix='Transmission Type').iloc[:, 1:]
Driven_Wheels = pd.get_dummies(
    car_dataset['Driven_Wheels'], prefix='Driven_Wheels').iloc[:, 1:]
#Market_Category = pd.get_dummies(car_dataset['Market Category'], prefix= 'Market Category').iloc[:,1:]
Vehicle_Size = pd.get_dummies(
    car_dataset['Vehicle Size'], prefix='Vehicle_Size').iloc[:, 1:]
Vehicle_Style = pd.get_dummies(
    car_dataset['Vehicle Style'], prefix='Vehicle_Style').iloc[:, 1:]
Make = pd.get_dummies(car_dataset['Make'], prefix='Make').iloc[:, 1:]
Model = pd.get_dummies(car_dataset['Model'], prefix='Model').iloc[:, 1:]

final_car_dataset = pd.concat([car_dataset_temp, Engine_Fuel_Type, Transmission_Type,
                              Driven_Wheels, Vehicle_Size, Vehicle_Style, Make, Model], axis=1)

print(final_car_dataset.head())

# Divide into label and feature set

dataset_features = final_car_dataset .drop(['MSRP'], axis=1)
dataset_labels = final_car_dataset['MSRP']

# Divide into training and test set

train_features, test_features, train_labels, test_labels = train_test_split(
    dataset_features, dataset_labels, test_size=0.2, random_state=21)

# Learning Multi-layer Perceptron Regressor

regressor = MLPRegressor(hidden_layer_sizes=(
    100, 100, 100), alpha=0.05, learning_rate='constant', solver='adam')
regressor.fit(train_features, train_labels)
predicted_price = regressor.predict(test_features)

print(predicted_price)

# Validate results

print('Mean Absolute Error:', metrics.mean_absolute_error(
    test_labels, predicted_price))
print('Mean Squared Error:', metrics.mean_squared_error(
    test_labels, predicted_price))
print('Root Mean Squared Error:', np.sqrt(
    metrics.mean_squared_error(test_labels, predicted_price)))

score = regressor.score(train_features, train_labels, sample_weight=None)
print(score)

# Export mopdel using pickle

filename = 'Exported_MLPRegressor.sav'
pickle.dump(regressor, open(filename, 'wb'))


# Load model from disk

loaded_model = pickle.load(open(filename, 'rb'))
result = loaded_model.score(train_features, train_labels, sample_weight=None)
print(result)

predict_result = loaded_model.predict(test_features)
print(predict_result)

with open('data.json', 'w') as fp:
    json.dump(test_features.to_dict('records')[0], fp, indent=4)
