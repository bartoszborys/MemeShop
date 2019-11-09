import json

class UnexpectedError(Exception):
    error = json.dumps({'error': 'Unexpected error occured when trying to register. Try again.'})
    def __init__(self):
        super().__init__(self.error)