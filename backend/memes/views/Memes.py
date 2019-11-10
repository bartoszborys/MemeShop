from django.http import JsonResponse, HttpResponse
from ..models.Meme import Meme
from ..serializers.MemesSerializer import MemesSerializer
from ..serializers.UserSerializer import UserSerializer
from ..serializers.MemeAddSerializer import MemesAddSerializer
from rest_framework.generics import GenericAPIView
from rest_framework import permissions
from rest_framework.decorators import (authentication_classes, permission_classes)
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class CustomAuthentication(permissions.BasePermission):
    def has_permission(self, request, view):
        if(request.method == "GET"):
            return True

class MemesView(APIView):
    # authentication_classes = []
    permission_classes = [CustomAuthentication]
    # permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):
        memes = Meme.objects.all()
        serializer = MemesSerializer(memes, many=True)
        return JsonResponse(serializer.data, safe=False)

    
    def post(self, request, *args, **kwargs):
        userSerializer = UserSerializer(request.user)
        userId = userSerializer.data['id']
        tmpSerializer = {'author_id':userId}
        tmpSerializer.update(request.data)
        memeAddSerializer = memeAddSerializer(data=tmpSerializer)
        if memeAddSerializer.is_valid():
            memeAddSerializer.save()
        else:
            return JsonResponse(memeAddSerializer.errors, status=500) 
        return HttpResponse(status=201)       