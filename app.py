from flask import Flask, render_template, redirect, jsonify
from plot_locations import plot_locations

app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/api/locations')
def locations():
    locations = plot_locations()

    return jsonify(locations)









if __name__ == '__main__':
    app.run(debug=True)