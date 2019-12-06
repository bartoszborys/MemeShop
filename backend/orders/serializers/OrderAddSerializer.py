from rest_framework import serializers
from ..models.Meme import Meme
from ..models.MemeAdd import MemeAdd 
from django.http import HttpResponse
import uuid

import base64, os
from django.core.exceptions import ValidationError

class OrderAddSerializer(serializers.ModelSerializer):

    user_id = serializers.IntegerField(source='user.id')

    def isUniqueName(self, author_id, name):
        userMemes = Meme.objects.filter(author__id=author_id)
        names = userMemes.filter(name=name)
        return len(names) == 0

    def create(self, validated_data):
        name=validated_data['name']
        extension=validated_data['extension']
        author_id = validated_data['author']['id']
        if not self.isUniqueName(author_id, name):
            raise ValidationError("You already have meme of this name.")
        blobString = validated_data['blob']
        blobString = blobString[blobString.find(",")+1:]
        if not os.path.exists("pictures"):
            os.mkdir("pictures")
        if not os.path.exists("pictures/" + str(author_id)):
            os.mkdir("pictures/" + str(author_id))
        random_name = str(uuid.uuid4())
        pic_url = "pictures/" + str(author_id) + "/" + random_name + "." + extension
        with open(pic_url, "wb") as imageOutput:
            png_recovered = base64.b64decode(blobString.encode("utf-8"))
            imageOutput.write(png_recovered)
            imageOutput.close()
        meme = Meme.objects.create(url=pic_url, 
        author_id = author_id, price=validated_data['price'], 
        quantity = validated_data['quantity'], name=validated_data['name'], extension=extension)   
        return meme

    class Meta:
        model = MemeAdd
        fields = ("blob", "id", "author_id", "price", "quantity", "name", "extension")
