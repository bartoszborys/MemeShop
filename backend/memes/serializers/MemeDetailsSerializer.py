from rest_framework import serializers
from ..models.Meme import Meme
from shared.serializers.UserSerializer import UserSerializer


class MemeDetailsSerializer(serializers.ModelSerializer):
    author = UserSerializer('author')

    class Meta:
        model = Meme
        fields = ("id",  "price", "name", "quantity", "author", "creation_date", "visits_count", "url")
