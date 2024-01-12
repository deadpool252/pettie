from django.http.response import JsonResponse
from .serializers import TempSerializer, LocationSerializer, PetplaceSerializer
from .models import Temp, Location, Petplace
from rest_framework.viewsets import ModelViewSet

class FeverTemp(ModelViewSet):
    queryset = Temp.objects.all()[120:240]
    serializer_class = TempSerializer

class NormalTemp(ModelViewSet):
    queryset = Temp.objects.all()[:120]
    serializer_class = TempSerializer

class AtHome(ModelViewSet):
    queryset = Location.objects.all()[:120]
    serializer_class = LocationSerializer

class OutHome(ModelViewSet):
    queryset = Location.objects.all()[120:141]
    serializer_class = LocationSerializer

class Petplace(ModelViewSet):
    queryset = Petplace.objects.all()
    serializer_class = PetplaceSerializer
