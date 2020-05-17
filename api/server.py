from flask import Flask, request
from json import dumps
from error import InputError

APP = Flask(__name__)




USER_DATA = []

def defaultHandler(error):
    '''
    Handles flask errors
    '''
    response = error.get_response()
    print('response', error, error.get_response())
    response.data = dumps({
        "code": error.code,
        "name": "System Error",
        "message": error.get_description(),
    })
    response.content_type = 'application/json'
    return response
APP.register_error_handler(Exception, defaultHandler)

@APP.route('/signup', methods=['POST'])
def signup():
    user_info = request.get_json()

    user = {
        'email': user_info['email'],
        'password': user_info['password'] 
    }

    USER_DATA.append(user)

    # WHY IS THIS DONE? 
    # Must be to update the state, unnecessary if do not need
    return dumps(user)

@APP.route('/login', methods=['POST'])
def login():
    user_info = request.get_json()

    user = {
        'email': user_info['email'],
        'password': user_info['password']
    }

    if (user in USER_DATA):
        return dumps(user)
    else:
        raise InputError('Email or Password is Invalid')


if __name__ == "__main__":
    APP.run(debug=True)