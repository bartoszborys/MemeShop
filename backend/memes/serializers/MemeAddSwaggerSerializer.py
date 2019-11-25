from rest_framework import serializers
from ..models.MemeAdd import MemeAdd

class MemeAddSwaggerSerializer(serializers.ModelSerializer):

    class Meta:
        model = MemeAdd
        fields = ("blob", "picture_title", "price", "quantity")