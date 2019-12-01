import json

class MemeNameAlreadyExsitsException(Exception):
    error = json.dumps({'error': 'You already have meme of this name.'})
    def __init__(self):
        super().__init__(self.error)