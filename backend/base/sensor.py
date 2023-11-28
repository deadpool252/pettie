import serial
from micropyGPS import MicropyGPS
import smbus2
import bme280

# GPS
uart = serial.Serial('/dev/serial0', 9600, timeout = 10)
my_gps = MicropyGPS(9, 'dd')
tm_last = 0
sentence = uart.readline()

#bme280
port = 1
address = 0x76
flagSensorTemp = False
try:
    bus = smbus2.SMBus(port)
    calibration_params = bme280.load_calibration_params(bus, address)
    data = bme280.sample(bus, address, calibration_params)
    flagSensorTemp = True
except: 
    pass


def sensorGPS():
    x = 0
    y = 0
    if len(sentence) > 0:
        for s in sentence:
            if 10 <= s <= 126:
                stat = my_gps.update(chr(s))
                if stat:
                    tm = my_gps.timestamp
                    tm_now = (tm[0] * 3600) + (tm[1] * 60) + int(tm[2])
                    if (tm_now - tm_last) >= 10:
                        x = my_gps.latitude[0]
                        y = my_gps.longitude[0]
    if x != 0:
        return {"status": True, "x": x, "y": y }
    else:
        return {"status": False }


def sensorBME():
    if flagSensorTemp:
        return {
            "status": True,
            "temperature": data.temperature,
            "pressure": data.pressure,
            "humidity": data.humidity
        }
    else:
        return {
            "status": False
        }
    