from rest_framework import serializers
from ..models.Order import Order
from django.http import HttpResponse
import uuid
import base64, os
from django.core.exceptions import ValidationError

class OrderAddSerializer(serializers.ModelSerializer):
    meme_id = serializers.IntegerField(source='meme.id')

    def create(self, validated_data):
        order = Order.objects.create(user_id = self.context['user_id'],
        quantity = validated_data['quantity'], meme_id=validated_data['meme']['id'], order_date=self.context['order_date'])   
        return order

    class Meta:
        model = Order
        fields = ("id", "quantity", "meme_id",)
