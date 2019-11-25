from rest_framework.generics import GenericAPIView
from ..serializers.MemeDetailsSerializer import MemeDetailsSerializer
from ..models.Meme import Meme
from exceptions.ResourceNotFoundException import ResourceNotFoundException
from django.http import JsonResponse, HttpResponse


class MemeDetailsView(GenericAPIView):
    serializer_class = MemeDetailsSerializer

    def get(self, request, meme_id, *args, **kwargs):
        try:
            #return meme as blob!
            meme = Meme.objects.get(id=meme_id)
            meme.visits_count = meme.visits_count + 1
            meme.save()
        except Meme.DoesNotExist:
            return HttpResponse(ResourceNotFoundException('This meme does not exist'), status=500)
        meme_serializer = MemeDetailsSerializer(meme)
        return JsonResponse(meme_serializer.data, safe=False)