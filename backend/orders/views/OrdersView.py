from django.http import JsonResponse, HttpResponse
from rest_framework.generics import GenericAPIView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from ..serializers.OrderAddSwagerSerializer import OrderAddSwaggerSerializer
from ..serializers.OrderAddSerializer import OrderAddSerializer
from shared.serializers.UserSerializer import UserSerializer
from django.utils.timezone import now


class OrdersView(GenericAPIView):
    serializer_class = OrderAddSwaggerSerializer

    @method_decorator(login_required)
    def post(self, request, *args, **kwargs):
        userSerializer = UserSerializer(request.user)
        userId = userSerializer.data['id']
        orderSerializer = OrderAddSerializer(data=request.data, context={'user_id':userId, 'order_date': now()}, many=True,)
        if orderSerializer.is_valid():
            orderSerializer.save()
        else:
            return JsonResponse(orderSerializer.errors, status=500, safe=False)
        return HttpResponse(status=201)
