from rest_framework import serializers
from django.contrib.auth.models import User

class UserSignUpSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    username = serializers.CharField()
    password = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data['username'], 
        email=validated_data['email'], password=validated_data['password'], 
        first_name=validated_data['first_name'], last_name=validated_data['last_name'], is_active=1)   
        return user

    class Meta:
        model = User
        fields = ('username','first_name', 'last_name', 'email', 'password', )