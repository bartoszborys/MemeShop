from django.http import JsonResponse, HttpResponse
from ..models.Meme import Meme
from ..serializers.MemesSerializer import MemesSerializer
from rest_framework.generics import GenericAPIView
from exceptions.InproperQueryParamException import InproperQueryParamException


class MemesByIdsView(GenericAPIView):
    serializer_class = MemesSerializer

    def get(self, request, *args, **kwargs):
        ids=request.GET.get('ids', '')
        memes = []
        if len(ids) > 0:
            try:
                ids_array = ids.split(",")
                memes = Meme.objects.filter(id__in=ids_array)
            except ValueError:
                return HttpResponse(InproperQueryParamException("Ids of memes must be passed as integers separated by commas."), status=500)
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)