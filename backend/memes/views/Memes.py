from django.http import JsonResponse, HttpResponse
from ..models.Meme import Meme
from ..serializers.MemesSerializer import MemesSerializer
from ..serializers.UserSerializer import UserSerializer
from ..serializers.MemeAddSerializer import MemesAddSerializer
from ..serializers.MemeAddSwaggerSerializer import MemeAddSwaggerSerializer
from rest_framework.generics import GenericAPIView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

class MemesView(GenericAPIView):
    serializer_class = MemeAddSwaggerSerializer

    def get(self, request, *args, **kwargs):
        step = int(request.GET.get('step',0))
        pageSize = int(request.GET.get('pageSize',10))
        dataFrom = step*pageSize
        dataTo = step*pageSize + pageSize
        sorting = request.GET.get('sorting',"-creation_date") 
        #add also fitlering with priceFrom and priceTo
        memes = Meme.objects.all().order_by(sorting)[dataFrom:dataTo]
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)


    @method_decorator(login_required)
    def post(self, request, *args, **kwargs):
        userSerializer = UserSerializer(request.user)
        userId = userSerializer.data['id']
        tmpSerializer = {'author_id':userId}
        tmpSerializer.update(request.data)
        memeAddSerializer = MemesAddSerializer(data=tmpSerializer)
        if memeAddSerializer.is_valid():
            memeAddSerializer.save()
        else:
            return JsonResponse(memeAddSerializer.errors, status=500) 
        return HttpResponse(status=201)       