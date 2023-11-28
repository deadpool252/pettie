from django.shortcuts import render
from django.http import StreamingHttpResponse
from django.http.response import JsonResponse
from django.db.models.functions import Length
from datetime import date, datetime
import time
import json
import asyncio
import random
from .models import Temp
from .serializers import TempSerializer
from .sensor import sensorBME, sensorGPS

def index(request):
    return render(request, 'index.html')

def getLastTemp(request):
    data = TempSerializer(Temp.objects.order_by("-id")[:10], many=True).data
    return JsonResponse(data, safe=False)

async def SSEloca(request):
    response = StreamingHttpResponse(streaming_content = getLoca())
    response['Content-Type'] = 'text/event-stream'
    response['Cache-control'] = 'no-cache'
    return response

async def getLoca():
    while True:
        now = datetime.now()
        dataSensorGPS = sensorGPS()
        if dataSensorGPS["status"]:
            data = {
                "time": now,
                "status": True,
                "message": "GPS Conected",
                "x": dataSensorGPS["x"],
                "y": dataSensorGPS["y"]
            }
        else:
            data = {
                "time": now,
                "status": False,
                "message": "GPS Disconected",
                "x": 0,
                "y": 0
            }
        yield 'data: {}\n\n'.format(json.dumps(data, default=json_serial))
        await asyncio.sleep(5)

async def SSEtemp(request):
    response = StreamingHttpResponse(streaming_content = getTemp())
    response['Content-Type'] = 'text/event-stream'
    response['Cache-control'] = 'no-cache'
    return response

async def getTemp():
    while True:
        now = datetime.now()
        dataSensorBME = sensorBME()
        if dataSensorBME["status"]:
            data = { 
                "time": now,
                "status": True,
                "message": "Sensor Connected",
                "temperature": dataSensorBME.temperature,
                "pressure": dataSensorBME.pressure,
                "humidity": dataSensorBME.humidity
            }
        else:
            data = { 
                "time": now,
                "status": False,
                "message": "Sensor Disconnected",
                "temperature": 0,
                "pressure": 0,
                "humidity": 0
            }
        yield 'data: {}\n\n'.format(json.dumps(data, default=json_serial))
        await asyncio.sleep(5)

async def event_stream(request):
    response = StreamingHttpResponse(streaming_content = stream_events())
    response['Content-Type'] = 'text/event-stream'
    response['Cache-control'] = 'no-cache'
    return response

async def stream_events():
    start_time = datetime.now()
    while True:
        now = datetime.now()
        data = { "dt" : now }
        yield 'data: {}\n\n'.format(json.dumps(data, default=json_serial))
        await asyncio.sleep(5)

def json_serial(obj):
    if isinstance(obj, (datetime, date)):
        return obj.isoformat()
    raise TypeError ("Type %s not serializable" % type(obj))
