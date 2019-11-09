import json

class UserExistsError(Exception):
    error = json.dumps({'error': 'User with such username or email already exists.'})
    def __init__(self):
        super().__init__(self.error)
