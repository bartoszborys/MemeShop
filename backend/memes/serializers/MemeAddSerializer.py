from rest_framework import serializers
from ..models.Meme import Meme
from ..models.MemeAdd import MemeAdd 
import base64, os

class MemesAddSerializer(serializers.ModelSerializer):

    author_id = serializers.IntegerField(source='author.id')

    def create(self, validated_data):
        import pdb; pdb.set_trace()
        # each person can only have one picture of specific name!!!! TODO
        title=validated_data['picture_title']
        author_id = validated_data['author']['id']
        blobString = validated_data['blob']
        blobString = blobString[blobString.find(",")+1:]
        if not os.path.exists("pictures"):
            os.mkdir("pictures")
        if not os.path.exists("pictures/" + str(author_id)):
            os.mkdir("pictures/" + str(author_id))
        pic_url = "pictures/" + str(author_id) + "/" + title
        with open(pic_url, "wb") as imageOutput:
            png_recovered = base64.b64decode(blobString.encode("utf-8"))
            imageOutput.write(png_recovered)
            imageOutput.close()
        meme = Meme.objects.create(url=pic_url, 
        author_id = author_id, price=validated_data['price'], 
        quantity = validated_data['quantity'], name=validated_data['name'], picture_title=title)   
        return meme

    class Meta:
        model = MemeAdd
        fields = ("blob", "id", "author_id", "price", "quantity", "name", "picture_title")
