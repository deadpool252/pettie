from django.db import models
from django.utils import timezone

class Temp(models.Model):
    temp = models.FloatField()
    timeT = models.DateTimeField(default=timezone.now)

class Location(models.Model):
    x = models.FloatField()
    y = models.FloatField()
    timeL = models.DateTimeField(default=timezone.now)
