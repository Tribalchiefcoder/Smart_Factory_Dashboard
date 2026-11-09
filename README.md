
# 🏭 Smart Factory IoT Dashboard with Equipment Control

<p align="center">

  **An IoT-Based Industrial Monitoring and Automation System**

  <a href="https://tribalchiefcoder.github.io/Smart_Factory_Dashboard/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-blue?style=for-the-badge&logo=github" alt="Live Demo">
  </a>
  <a href="docs/researchpaper.pdf">
    <img src="https://img.shields.io/badge/Research%20Paper-View%20PDF-success?style=for-the-badge" alt="Research Paper">
  </a>
  <a href="docs/PROJECT_REPORT.pdf">
    <img src="https://img.shields.io/badge/Project%20Report-View%20PDF-orange?style=for-the-badge" alt="Project Report">
  </a>

</p>

---

## 📌 About the Project

**Smart Factory IoT Dashboard with Equipment Control** is a final-year engineering major project developed to demonstrate industrial automation and real-time monitoring using Internet of Things (IoT) technology.

The proposed system uses an **ESP32 microcontroller** to collect environmental and operational data through sensors. The collected information is transmitted over Wi-Fi to **Firebase Realtime Database**, where it can be accessed through a web-based dashboard.

The dashboard provides a centralized interface for monitoring factory conditions and controlling equipment such as fans, lights, conveyor motors, and buzzers through a relay module.

The project aims to reduce manual intervention, improve operational efficiency, enhance monitoring capabilities, and demonstrate the practical implementation of Industry 4.0 concepts.

## 🌐 Live Website

<p align="center">
  <a href="https://tribalchiefcoder.github.io/Smart_Factory_Dashboard/">
    <img src="https://img.shields.io/badge/OPEN%20LIVE%20WEBSITE-Click%20Here-2ea44f?style=for-the-badge&logo=github" alt="Open Website">
  </a>
</p>

**Website:** https://tribalchiefcoder.github.io/Smart_Factory_Dashboard/

The website is deployed using GitHub Pages.

### 🔐 Demo Login Credentials

| Field | Credentials |
|---|---|
| Username | `admin` |
| Password | `factory123` |

> **Note:** The current GitHub Pages deployment provides a frontend demonstration. Equipment notifications are demo notifications and do not confirm physical hardware operation. Live hardware communication requires the ESP32 and Firebase integration to be connected and configured. The frontend-only login is for demonstration purposes and is not secure authentication.

---

## ✨ Key Features

- **Equipment Control:** Interface for switching factory equipment ON and OFF.
- **Temperature Monitoring:** Monitors environmental temperature using DHT11.
- **Humidity Monitoring:** Displays humidity readings from the sensor.
- **Object Detection:** Uses an IR sensor for object detection.
- **Cloud Integration:** Firebase Realtime Database for storing and synchronizing data.
- **Wireless Communication:** ESP32 communicates over Wi-Fi.
- **Centralized Dashboard:** Web interface for monitoring and controlling equipment.
- **Relay-Based Switching:** Controls connected devices through a 4-channel relay module.
- **Alert System:** Buzzer-based alerts for system notifications.
- **User Login:** Login and logout interface for the dashboard demonstration.
- **Contact Form:** EmailJS integration for receiving messages through the website.

---

## 🛠️ Technologies Used

### Software Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive interface |
| JavaScript | Dashboard functionality |
| Embedded C | ESP32 programming |
| Arduino IDE | Embedded development |
| Firebase Realtime Database | Cloud data storage and synchronization |
| Wokwi | Hardware simulation |
| GitHub Pages | Website hosting |
| EmailJS | Contact form email integration |

### Hardware Components

| Component | Purpose |
|---|---|
| ESP32 DevKit V1 | Main microcontroller |
| DHT11 Sensor | Temperature and humidity monitoring |
| IR Sensor | Object detection |
| 4-Channel Relay Module | Equipment switching |
| DC Motor (60 RPM) | Conveyor mechanism |
| Fan | Cooling demonstration |
| LED Bulb | Lighting demonstration |
| Buzzer | Audio alerts |
| DC Power Supply | Powering the prototype |

---

## ⚙️ System Architecture

The proposed system consists of five major units:

1. **Sensing Unit:** DHT11 and IR sensors collect environmental and operational data.
2. **Processing Unit:** ESP32 processes sensor readings and control commands.
3. **Communication Unit:** Wi-Fi enables communication between ESP32 and Firebase.
4. **Cloud Unit:** Firebase Realtime Database stores and synchronizes system information.
5. **User Interface Unit:** The web dashboard displays sensor readings and provides equipment controls.


### Working Flow Diagram

The system follows two main communication paths:

1. **Monitoring:** Sensors send data to the ESP32, which processes it and uploads it to Firebase. The web dashboard retrieves and displays the sensor readings.
2. **Equipment Control:** Users send ON/OFF commands through the dashboard. These commands are stored in Firebase, retrieved by the ESP32, and executed through the relay module.

```mermaid
flowchart TD
    A["Power Supply"] --> B["ESP32 DevKit V1"]

    subgraph INPUT["Input / Sensing Unit"]
        C["DHT11 Sensor<br/>Temperature & Humidity"]
        D["IR Sensor<br/>Object Detection"]
    end

    C --> B
    D --> B

    B <-->|"Wi-Fi Communication"| E[("Firebase Realtime Database")]

    E -->|"Sensor Readings"| F["Web Dashboard"]
    F -->|"ON / OFF Commands"| E

    B -->|"Control Signals"| G["4-Channel Relay Module"]

    subgraph OUTPUT["Output / Equipment Unit"]
        H["Fan"]
        I["LED Light"]
        J["Conveyor Motor"]
        K["Buzzer"]
    end

    G --> H
    G --> I
    G --> J
    G --> K

    style A fill:#64748b,color:#fff
    style B fill:#2563eb,color:#fff
    style E fill:#f59e0b,color:#000
    style F fill:#16a34a,color:#fff
    style G fill:#7c3aed,color:#fff
```


## 📸 Project Screenshots

### 1. Login Page

![Smart Factory Login Page](assets/screenshots/login.png)

### 2. Dashboard

![Smart Factory Dashboard](assets/screenshots/dashboard.png)

### 3. About Page

![Smart Factory About Page](assets/screenshots/about.png)

### 4. Contact Us Page

![Smart Factory Contact Us Page](assets/screenshots/contactus.png)

---

## 📚 Research Paper Publication

Our project research paper has been published in the:

**International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)**

### Publication Details

| Particular | Details |
|---|---|
| Paper Title | Smart Factory IoT Dashboard with Equipment Control |
| Journal | International Research Journal of Modernization in Engineering Technology and Science |
| Volume | 08 |
| Issue | 04 |
| Publication Month | April 2026 |
| e-ISSN | 2582-5208 |

### Authors

1. Sumedh Sanjay Varadkar
2. Shubham Rajan Malvankar
3. Shreyash Babaso Patil
4. Sanket Tatyaso Balanna
5. Vinayak D. Chavan

📄 **[Read the Published Research Paper](docs/researchpaper.pdf)**

---

## 📄 Project Documentation

The following documents are part of our final-year project:

| Document | Link |
|---|---|
| Project Report | [View PDF](docs/PROJECT_REPORT.pdf) |
| Published Research Paper | [View PDF](docs/researchpaper.pdf) |
| Project Poster | [View PDF](docs/Poster_Majorproject.pdf) |

---

## 💰 Estimated Project Cost

According to our project report, the estimated prototype cost is:

| Component | Cost |
|---|---:|
| ESP32 | ₹550 |
| DC Motor (60 RPM) | ₹370 |
| 4-Channel Relay Module | ₹200 |
| LED Bulb | ₹80 |
| Conveyor | ₹2,000 |
| DHT11 Sensor | ₹70 |
| IR Sensor | ₹45 |
| Buzzer | ₹60 |
| Fan | ₹250 |
| **Total** | **₹3,625** |

*Prices are based on the project report and may vary.*

---

## 🚀 Future Scope

The project can be further enhanced through:

- Implementation of secure authentication and role-based access.
- Advanced real-time data visualization.
- Historical data logging and analysis.
- Intelligent anomaly detection.
- Predictive maintenance.
- Integration of additional industrial sensors.
- Expansion to larger industrial monitoring environments.

---

## 👨‍💻 Project Team

**Department of Electronics and Telecommunication Engineering**

**Finolex Academy of Management & Technology, Ratnagiri**

**Academic Year: 2025–2026**

| Team Member |
|---|
| Sumedh Sanjay Varadkar |
| Shubham Rajan Malvankar |
| Shreyash Babaso Patil |
| Sanket Tatyaso Balanna |

**Project Guide:** Prof. V. D. Chavan

---

## 🙏 Acknowledgement

We express our sincere gratitude to our project guide, Prof. V. D. Chavan, the Department of Electronics and Telecommunication Engineering, and Finolex Academy of Management & Technology for their valuable guidance, support, and encouragement throughout the development of this project.

---

<p align="center">

  **Smart Factory IoT Dashboard with Equipment Control**

  *Building smarter industrial environments through IoT and automation.*

</p>
