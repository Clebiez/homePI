
import board
import adafruit_dht
import json;
import sys;


# Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT22(board.D17)

def readDHT22(numberOfTries=1):
  try:
    print(json.dumps({
      "temperature": dhtDevice.temperature,
      "humidity": dhtDevice.humidity
    }))

  except RuntimeError as error:
      if (numberOfTries < 5) :
        return readDHT22(numberOfTries + 1)
      else :
        print('Failed to get reading, problems here.')
        sys.exit(1)

readDHT22()
