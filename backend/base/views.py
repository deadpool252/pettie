from django.shortcuts import render
from django.http import StreamingHttpResponse
from datetime import date, datetime
import time
import json
# import serial
# from micropyGPS import MicropyGPS
import asyncio
import random
from . import models

# uart = serial.Serial('/dev/serial0', 9600, timeout = 10)
# my_gps = MicropyGPS(9, 'dd')
# tm_last = 0

# temp = 37
# flag = True


# IndexのViewを作成
def index(request):
    return render(request, 'index.html')

# async def SSEloca(request):
#     response = StreamingHttpResponse(streaming_content = getLoca())
#     response['Content-Type'] = 'text/event-stream'
#     response['Cache-control'] = 'no-cache'
#     return response

# async def getLoca():
#     while True:
#         sentence = uart.readline()
#         if len(sentence) > 0:
#             for x in sentence:
#                 if 10 <= x <= 126:
#                     stat = my_gps.update(chr(x))
#                     if stat:
#                         tm = my_gps.timestamp
#                         tm_now = (tm[0] * 3600) + (tm[1] * 60) + int(tm[2])
#                         if (tm_now - tm_last) >= 10:
#                             now = datetime.now()
#                             data = { "time": now, "x": my_gps.latitude[0], "y": my_gps.longitude[0]}
#                             yield 'data: {}\n\n'.format(json.dumps(data, default=json_serial))
#                             await asyncio.sleep(5)

def SSEtemp(request):
    response = StreamingHttpResponse(streaming_content = getTemp())
    response['Content-Type'] = 'text/event-stream'
    response['Cache-control'] = 'no-cache'
    return response

async def getTemp():
    while True:
        now = datetime.now()
        temp = 37
        if random.randint(0,1):
            temp += random.randint(0,5)
        else:
            temp -= random.randint(0,5)
        data = { "time": now, "temp": temp}
        yield 'data: {}\n\n'.format(json.dumps(data, default=json_serial))
        await asyncio.sleep(5)


def event_stream(request):
    response = StreamingHttpResponse(streaming_content = stream_events())
    response['Content-Type'] = 'text/event-stream'
    response['Cache-control'] = 'no-cache'
    return response

def stream_events():
    start_time = datetime.now()
    while True:
        now = datetime.now()
        elapsed_time = now - start_time
        data = { "dt" : now }
        if elapsed_time.seconds >= 5:
            yield 'data: {}\n\n'.format(json.dumps(data, default=json_serial))
            start_time = now
        else:
            time.sleep(1)

def json_serial(obj):
    if isinstance(obj, (datetime, date)):
        return obj.isoformat()
    raise TypeError ("Type %s not serializable" % type(obj))
