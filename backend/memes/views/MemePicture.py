from rest_framework.generics import GenericAPIView
from ..serializers.MemePictureSerializer import MemePictureSerializer
from ..models.Meme import Meme
from exceptions.ResourceNotFoundException import ResourceNotFoundException
from django.http import JsonResponse, HttpResponse


class MemePictureView(GenericAPIView):
    serializer_class = MemePictureSerializer

    def get(self, request, meme_id, *args, **kwargs):
        try:
            meme = Meme.objects.get(id=meme_id)
        except Meme.DoesNotExist:
            return HttpResponse(ResourceNotFoundException('This meme does not exist'), status=500)
        meme_serializer = MemePictureSerializer(meme).getPictureBlob()
        return JsonResponse(meme_serializer, safe=False)