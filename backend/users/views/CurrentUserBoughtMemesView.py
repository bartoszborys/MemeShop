from django.http import JsonResponse, HttpResponse
from memes.models.Meme import Meme
from orders.models.Order import Order
from memes.serializers.MemesSerializer import MemesSerializer
from shared.serializers.UserSerializer import UserSerializer

from rest_framework.generics import GenericAPIView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

class CurrentUserBoughtMemesView(GenericAPIView):
    serializer_class = MemesSerializer

    @method_decorator(login_required)
    def get(self, request, *args, **kwargs):
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

        userSerializer = UserSerializer(request.user)
        userId = userSerializer.data['id']
        myOrders = Order.objects.filter(user__id=userId)
        memes = Meme.objects.filter(order__id__in=myOrders).order_by('-creation_date')[dataFrom:dataTo]
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)