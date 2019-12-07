from django.http import JsonResponse, HttpResponse
from memes.models.Meme import Meme
from memes.serializers.MemesSerializer import MemesSerializer
from shared.serializers.UserSerializer import UserSerializer
from rest_framework.generics import GenericAPIView


class OtherUserExposedMemesView(GenericAPIView):
    serializer_class = MemesSerializer

    def get(self, request, user_id, *args, **kwargs):
        try:
            step = int(request.GET.get('step', 0))
        except  ValueError:
            return HttpResponse(InproperQueryParamException("Step must be an Integer."), status=500)
        try:
            pageSize = int(request.GET.get('pageSize', 10))
        except  ValueError:
            return HttpResponse(InproperQueryParamException("PageSize must be an Integer."), status=500)

        dataFrom = step*pageSize
        dataTo = step*pageSize + pageSize

        memes = Meme.objects.filter(author__id=user_id).order_by('-creation_date')[dataFrom:dataTo]
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)
