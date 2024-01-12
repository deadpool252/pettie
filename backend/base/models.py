from django.db import models
from django.utils import timezone

class Temp(models.Model):
    temperature = models.FloatField()
    status = models.CharField(max_length=30)
    timeT = models.DateTimeField(default=timezone.now)


class Location(models.Model):
    x = models.FloatField()
    y = models.FloatField()
    label = models.BooleanField()
    timeL = models.DateTimeField(default=timezone.now)

class Petplace(models.Model):
    xp = models.FloatField()
    yp = models.FloatField()
    category = models.CharField(max_length=30)
    name = models.CharField(max_length=50)
