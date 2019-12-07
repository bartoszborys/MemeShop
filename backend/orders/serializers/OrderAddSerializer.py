from rest_framework import serializers
from ..models.Order import Order
from memes.models.Meme import Meme
from django.http import HttpResponse
import uuid
import base64, os
from django.core.exceptions import ValidationError

class OrderAddSerializer(serializers.ModelSerializer):
    meme_id = serializers.IntegerField(source='meme.id')

    def getMemeById(self, meme_id):
        try:
            meme = Meme.objects.get(id=meme_id)
            return meme
        except Meme.DoesNotExist:
            return None

    def isEnoughQuantity(self, meme, quantityToBuy):
        leftMemes = meme.quantity - meme.bought
        return quantityToBuy <= leftMemes
        

    def create(self, validated_data):
        meme_id = validated_data['meme']['id']
        quantity = validated_data['quantity']
        meme = self.getMemeById(meme_id)
        if meme == None:
            raise ValidationError("Meme of id: {0} not found.".format(meme_id))
        if not self.isEnoughQuantity(meme, quantity):
            raise ValidationError("There is not enough meme of id {0} for quantity: {0}.".format(meme_id, quantity))

        meme.bought += quantity
        meme.save()
        order = Order.objects.create(user_id = self.context['user_id'],
        quantity = quantity, meme_id=meme_id, order_date=self.context['order_date']) 

        return {'order': order, 'meme': meme}

    class Meta:
        model = Order
        fields = ("id", "quantity", "meme_id",)
