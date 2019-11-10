from django.http import JsonResponse
from ..models.Meme import Meme
from ..serializers.MemesSerializer import MemesSerializer
from rest_framework.generics import GenericAPIView
from rest_framework import permissions
from rest_framework.decorators import (authentication_classes, permission_classes)
from rest_framework.views import APIView

class CustomAuthentication(permissions.BasePermission):
    def has_permission(self, request, view):
        if(request.method == "GET"):
            return True

class MemesView(APIView):
    # permission_classes = (CustomAuthentication)
    authentication_classes = []
    permission_classes = [CustomAuthentication]
    def get(self, request, *args, **kwargs):
        memes = Meme.objects.all()
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)

    
    def post(self, request, *args, **kwargs):
        pass
        