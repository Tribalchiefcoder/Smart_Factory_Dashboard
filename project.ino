#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <DHT.h>

// WIFI
#define WIFI_SSID "Airtel_Zerotouch"
#define WIFI_PASSWORD "Airtel@123"

// FIREBASE
#define API_KEY "AIzaSyD5a5n1j8aKxTHRfAfOOAdnXdSn8mkpGe8"
#define DATABASE_URL "https://smart-factory-iot-dashboard-default-rtdb.asia-southeast1.firebasedatabase.app"
#define USER_EMAIL "pmon3140@gmail.com"
#define USER_PASSWORD "123456"

// RELAYS
#define FAN 23
#define CONVEYOR 22
#define LIGHT 21
#define BUZZER 19

#define RELAY_ACTIVE_LOW true

// DHT
#define DHTPIN 4
DHT dht(DHTPIN, DHT11);

// Firebase
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// Relay function
void setRelay(int pin, bool state) {
#if RELAY_ACTIVE_LOW
  digitalWrite(pin, state ? LOW : HIGH);
#else
  digitalWrite(pin, state ? HIGH : LOW);
#endif
}

void setup() {
  Serial.begin(115200);

  pinMode(FAN, OUTPUT);
  pinMode(CONVEYOR, OUTPUT);
  pinMode(LIGHT, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  // OFF state
  setRelay(FAN, false);
  setRelay(CONVEYOR, false);
  setRelay(LIGHT, false);
  setRelay(BUZZER, false);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi Connected");

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  dht.begin();
}

void loop() {

  if (!Firebase.ready()) {
    Serial.println("Waiting Firebase...");
    delay(1000);
    return;
  }

  // 🔥 READ VALUES
  int fan = 0, conv = 0, light = 0, buzzer = 0;

  Firebase.RTDB.getInt(&fbdo, "/fan");
  fan = fbdo.intData();

  Firebase.RTDB.getInt(&fbdo, "/conveyor");
  conv = fbdo.intData();

  Firebase.RTDB.getInt(&fbdo, "/light");
  light = fbdo.intData();

  Firebase.RTDB.getInt(&fbdo, "/buzzer");
  buzzer = fbdo.intData();

  Serial.printf("Fan:%d Conv:%d Light:%d Buzzer:%d\n", fan, conv, light, buzzer);

  // 🔥 CONTROL RELAYS
  setRelay(FAN, fan == 1);
  setRelay(CONVEYOR, conv == 1);
  setRelay(LIGHT, light == 1);
  setRelay(BUZZER, buzzer == 1);

  // 🔥 SENSOR WRITE
  float t = dht.readTemperature();
  float h = dht.readHumidity();

  if (!isnan(t) && !isnan(h)) {
    Firebase.RTDB.setFloat(&fbdo, "/sensor/temperature", t);
    Firebase.RTDB.setFloat(&fbdo, "/sensor/humidity", h);
  }

  delay(2000);
}
