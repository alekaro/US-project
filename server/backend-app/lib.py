

def convert_dict_to_df(dict_a):
    dict_b = {}
    for key in dict_a:
        if dict_a[key].isdigit():
            dict_b[key] = dict_a[key]
        else:
            dict_b[f'{key}_{dict_a[key]}'] = 1
    return dict_b
