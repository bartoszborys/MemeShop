import json

class InvalidCredentialsError(Exception):
    error = json.dumps({'error': 'Incorect username or password.'})
    def __init__(self):
        super().__init__(self.error)
