from django.http import JsonResponse
from ..models.Meme import Meme
from ..serializers.MemesSerializer import MemesSerializer
from rest_framework.generics import GenericAPIView


class MemesView(GenericAPIView):

    def get(self, request, *args, **kwargs):
        memes = Meme.objects.all()
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, *args, **kwargs):
        