from django.http import JsonResponse, HttpResponse
from ..models.Meme import Meme
from ..serializers.MemesSerializer import MemesSerializer
from shared.serializers.UserSerializer import UserSerializer
from ..serializers.MemeAddSerializer import MemesAddSerializer
from ..serializers.MemeAddSwaggerSerializer import MemeAddSwaggerSerializer
from rest_framework.generics import GenericAPIView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from exceptions.MemeNameAlreadyExsitsException import MemeNameAlreadyExsitsException
from django.db.models import Q
from django.core.exceptions import ValidationError
from exceptions.InproperQueryParamException import InproperQueryParamException

SORTING_CHOICES = [ "creation_date", "-creation_date",  "name", "-name", "price", "-price", "quantity", "-quantity", "visits_count", "-visits_count"]

class MemesView(GenericAPIView):
    serializer_class = MemeAddSwaggerSerializer

    def get(self, request, *args, **kwargs):
        try:
            step = int(request.GET.get('step', 0))
        except  ValueError:
            return HttpResponse(InproperQueryParamException("Step must be an Integer."), status=500)
        try:
            pageSize = int(request.GET.get('pageSize', 10))
        except  ValueError:
            return HttpResponse(InproperQueryParamException("PageSize must be an Integer."), status=500)
        try:
            priceFrom = int(request.GET.get('priceFrom', 0))
        except  ValueError:
            return HttpResponse(InproperQueryParamException("PriceFrom must be an Integer."), status=500)
        try:
            priceTo = int(request.GET.get('priceTo', 1000000))
        except  ValueError:
            return HttpResponse(InproperQueryParamException("PriceTo must be an Integer."), status=500)

        sorting = request.GET.get('sorting', "-creation_date")
        try:
            SORTING_CHOICES.index(sorting)
        except ValueError:
            return HttpResponse(InproperQueryParamException("Inproper sorting type. Choices are: \
            {0}. '-' for descending sorting.".format(", ".join(SORTING_CHOICES))), status=500)

        dataFrom = step*pageSize
        dataTo = step*pageSize + pageSize
        memes = Meme.objects.filter(Q(price__gte=priceFrom) & Q(price__lte=priceTo)).order_by(sorting)[dataFrom:dataTo]
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)

    @method_decorator(login_required)
    def post(self, request, *args, **kwargs):
        userSerializer = UserSerializer(request.user)
        userId = userSerializer.data['id']
        memeAddSerializer = MemesAddSerializer(data=request.data, context={'user_id':userId})
        if memeAddSerializer.is_valid():
            try:
                memeAddSerializer.save()
            except ValidationError:
                return HttpResponse(MemeNameAlreadyExsitsException(), status=500)
            return HttpResponse(status=201)
        else:
            return JsonResponse(memeAddSerializer.errors, status=500)
