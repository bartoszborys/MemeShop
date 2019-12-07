from rest_framework import serializers
from ..models.Order import Order

class OrderAddSwaggerSerializer(serializers.ModelSerializer):
    meme_id = serializers.IntegerField(source='meme.id')
    
    def __init__(self, *args, **kwargs):
        many = kwargs.pop('many', True)
        super(OrderAddSwaggerSerializer, self).__init__(many=many, *args, **kwargs)

    class Meta:
        model = Order
        fields = ("meme_id", "quantity",)