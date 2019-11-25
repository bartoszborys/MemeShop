from rest_framework import serializers
from ..models.Meme import Meme
from .UserSerializer import UserSerializer


class MemeDetailsSerializer(serializers.ModelSerializer):
    author = UserSerializer('author')

    class Meta:
        model = Meme
        fields = ("url", "id",  "price", "name", "quantity", "author", "creation_date", "visits_count", "picture_title")
