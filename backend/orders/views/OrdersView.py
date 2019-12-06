from django.http import JsonResponse, HttpResponse
from rest_framework.generics import GenericAPIView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from exceptions.MemeNameAlreadyExsitsException import MemeNameAlreadyExsitsException
from django.db.models import Q
from django.core.exceptions import ValidationError


class MemesView(GenericAPIView):
    serializer_class = OrderAddSwaggerSerializer

    @method_decorator(login_required)
    def post(self, request, *args, **kwargs):
        step = int(request.GET.get('step', 0))
        pageSize = int(request.GET.get('pageSize', 10))
        priceFrom = int(request.GET.get('priceFrom', 0))
        priceTo = int(request.GET.get('priceTo', 1000000))
        dataFrom = step*pageSize
        dataTo = step*pageSize + pageSize
        sorting = request.GET.get('sorting', "-creation_date")
        memes = Meme.objects.filter(Q(price__gte=priceFrom) & Q(
            price__lte=priceTo)).order_by(sorting)[dataFrom:dataTo]
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)

    