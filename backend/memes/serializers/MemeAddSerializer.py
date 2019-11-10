from rest_framework import serializers
from ..models.Meme import Meme

class MemesAddSerializer(serializers.ModelSerializer):

    author_id=serializers.IntegerField(source='author.id')

    def create(self, validated_data):
        meme = Meme.objects.create(url=validated_data['url'], 
        author = validated_data['author']['id'], password=validated_data['price'], 
        first_name = validated_data['quantity'])   
        return meme

    class Meta:
        model = Meme
        fields = ("url", "id", "author_id", "price", "quantity")
