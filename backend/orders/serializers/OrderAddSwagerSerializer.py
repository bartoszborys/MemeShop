from rest_framework import serializers
from ..models.Order import Order

class OrderAddSwaggerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = ("meme", "quantity",)