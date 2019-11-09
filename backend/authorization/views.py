import json, jwt
from exceptions.UserExistsError import UserExistsError
from exceptions.InvalidCredentialsError import InvalidCredentialsError
from exceptions.UnexpectedError import UnexpectedError
from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth.models import User, update_last_login
from django.http import HttpResponse
from rest_framework.decorators import (api_view, authentication_classes, permission_classes)
from rest_framework.permissions import AllowAny
from rest_framework_jwt.utils import jwt_payload_handler
from .serializers.UserSignUpSerializer import UserSignUpSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def signin(request):  
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)
    if user:
        payload = jwt_payload_handler(user)
        jwt_token = json.dumps({'token': jwt.encode(payload, settings.SECRET_KEY).decode('utf-8')})
        update_last_login(None, user)
        return HttpResponse(jwt_token, status=200)
    else:
        return HttpResponse(InvalidCredentialsError(), status=400)
