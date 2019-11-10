from django.http import JsonResponse
from rest_framework.generics import GenericAPIView


class MemesView(GenericAPIView):

    def get(self, request, *args, **kwargs):
        return JsonResponse({"id":"abc"})

