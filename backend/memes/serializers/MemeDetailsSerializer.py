from rest_framework import serializers
from ..models.Meme import Meme


class MemeDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meme
        fields = ("url", "id",  "price", "name", "quantity", "author", "creation_date", "visits_count")
