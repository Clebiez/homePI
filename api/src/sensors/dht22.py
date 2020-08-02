
import board
import adafruit_dht
import json;
import sys;


# Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT22(board.D17)

try:
  print(json.dumps({
    "temperature": dhtDevice.temperature,
    "humidity": dhtDevice.humidity
  }))

except RuntimeError as error:
    print('Failed to get reading. Try again!')
    sys.exit(1)
