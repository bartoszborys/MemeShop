from rest_framework import serializers
from ..models.Meme import Meme
import base64, requests


class MemePictureSerializer(serializers.ModelSerializer):
    def getPictureBlob(self):
        with open(self['url'].value, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read())
        return {'blob' : "data:image/" + self['extension'].value + ";base64" + encoded_string.decode("utf-8")}

    class Meta:
        model = Meme
        fields = ("url", "extension",)
