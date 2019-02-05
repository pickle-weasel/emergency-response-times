import pandas as pd

def plot_locations():
    locations_df = pd.read_csv('./data/d11_cleaned_5min_2018_10_31.csv')
    locations_df.dropna(how='any', axis=0, inplace=True)
    
    markers = locations_df.loc[locations_df['Timestamp'] == '10/31/2018 17:00:00']

    markers_dict = markers.to_dict('records')

    return markers_dict