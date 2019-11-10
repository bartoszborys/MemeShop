from rest_framework import serializers
from ..models.Meme import Meme

class MemesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meme
        fields = ("url", "id", "author", "price", "quantity")