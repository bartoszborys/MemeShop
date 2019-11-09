from exceptions.InvalidCredentialsError import InvalidCredentialsError
from exceptions.UnexpectedError import UnexpectedError
from exceptions.UserExistsError import UserExistsError
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.decorators import (authentication_classes, permission_classes)
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from ..serializers.UserSignUpSerializer import UserSignUpSerializer


class SignUpView(GenericAPIView):
    permission_classes = [AllowAny]
    authentication_classes = []
    serializer_class = UserSignUpSerializer

    def post(self, request, *args, **kwargs):
        serializer = UserSignUpSerializer(data=request.data)
        if serializer.is_valid():
            username = request.data['username']
            email = request.data['email']
            if User.objects.filter(email=email).exists() or User.objects.filter(username=username).exists():
                return HttpResponse(UserExistsError(), status=400)
            user = serializer.save()
            if user:
                return HttpResponse(status=201)
        return HttpResponse(UnexpectedError(), status=400)
