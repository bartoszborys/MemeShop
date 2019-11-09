from rest_framework import serializers
from django.contrib.auth.models import User

class UserSignInSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()

    class Meta:
        model = User
        fields = ('username', 'password', )