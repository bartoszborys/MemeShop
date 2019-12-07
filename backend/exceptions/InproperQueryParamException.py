import json

class InproperQueryParamException(Exception):
    def __init__(self, error_message):
        error = json.dumps({'error': error_message})
        super().__init__(error)
