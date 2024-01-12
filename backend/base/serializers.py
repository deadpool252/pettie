from rest_framework import serializers
from .models import Temp, Location, Petplace

class TempSerializer(serializers.ModelSerializer):
    class Meta:
        many = True
        model = Temp
        fields = "__all__"

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        many = True
        model = Location
        fields = "__all__"

class PetplaceSerializer(serializers.ModelSerializer):
    class Meta:
        many = True
        model = Petplace
        fields = "__all__"
