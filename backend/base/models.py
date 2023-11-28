from django.db import models
from django.utils import timezone

class Temp(models.Model):
    temperature = models.FloatField()
    pressure = models.FloatField()
    humidity = models.FloatField()
    status = models.CharField(max_length=30)
    timeT = models.DateTimeField(default=timezone.now)


class Location(models.Model):
    x = models.FloatField()
    y = models.FloatField()
    timeL = models.DateTimeField(default=timezone.now)
