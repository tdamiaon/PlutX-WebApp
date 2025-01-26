from rest_framework import serializers
from django.contrib.auth.models import User
from .models import FavoriteCompany


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'] 
        )
        return user
class FavoriteCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteCompany
        fields = ['symbol', 'logo']