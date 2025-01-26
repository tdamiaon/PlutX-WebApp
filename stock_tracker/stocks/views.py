from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.serializers import Serializer, CharField
from rest_framework import status
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from .services import get_stock_info, predict, get_logo
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.contrib.auth.hashers import make_password
from rest_framework.exceptions import ValidationError
from .models import FavoriteCompany
from .serializers import FavoriteCompanySerializer, UserSerializer

class RegisterUserView(APIView):
    permission_classes = []
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            raise ValidationError({"detail": "Username and password are required."})

        if User.objects.filter(username=username).exists():
            return Response({"detail": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)


        user = User.objects.create(
            username=username,
            password=make_password(password),  
        )

        return Response({"detail": "User created successfully."}, status=status.HTTP_201_CREATED)
    
class CompanyDataView(APIView):
    #permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny]
    def get(self, request):
        symbol = request.query_params.get('symbol') #POST simbolo
        
        if not symbol:
            return Response({"error": "Nothing Entered"}, status=400)
       
        company_info = get_stock_info(symbol)
        print(company_info)
        if company_info:
            return Response(company_info)
        else:
            return()

class FavoriteCompanyView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        symbol = request.data.get('symbol')
        
        if not symbol:
            return Response({"error": "No symbol entered"}, status=status.HTTP_400_BAD_REQUEST)
        logo = get_logo(symbol)
        favorite = FavoriteCompany.objects.filter(user=request.user, symbol=symbol).first()
        if favorite:
            favorite.delete()
            return Response({"message": "Removed from favorites"}, status=status.HTTP_200_OK)
        else:
            serializer = FavoriteCompanySerializer(data={'symbol': symbol, 'logo': logo})
            if serializer.is_valid():
                serializer.save(user=request.user, logo=logo)
                return Response({"message": "Added to favorites"}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        favorites = FavoriteCompany.objects.filter(user=request.user)
        serializer = FavoriteCompanySerializer(favorites, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    
class PredictionView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        symbol = request.query_params.get('symbol')
        timeForward = request.query_params.get('timeForward', 1)
        if not symbol:
            return Response({"error": "No symbol entered"}, status=status.HTTP_400_BAD_REQUEST)
        prediction = predict(symbol, timeForward)
        if prediction:
            return Response(prediction)
        else:
            return Response({"error": "Invalid Company"}, status=500)
            