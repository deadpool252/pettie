from apscheduler.schedulers.background import BackgroundScheduler
from django.utils import timezone
from .models import Temp, Location
import random
from .sensor import sensorGPS, sensorBME
def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(update_something, 'interval', minutes=5)
    scheduler.start()

def update_something():
    # update temp
    tempData = sensorBME()
    if tempData["status"]:
        t = Temp(temperature=tempData["temperature"], pressure=tempData["pressure"], humidity=tempData["humidity"], timeT=timezone.now())
        t.save()
    # update loca
    locaData = sensorGPS()
    if locaData["status"]:
        l = Location(x=locaData["x"], y=locaData["y"], timeL=timezone.now())
        l.save()