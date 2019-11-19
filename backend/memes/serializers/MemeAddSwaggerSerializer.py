from rest_framework import serializers
from ..models.Meme import Meme

class MemeAddSwaggerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meme
        fields = ("url", "price", "quantity")