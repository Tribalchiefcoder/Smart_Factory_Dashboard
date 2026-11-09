Smart Factory IoT Dashboard with Equipment Control
A final-year major project demonstrating an IoT-based smart factory
system for monitoring environmental conditions and remotely controlling
factory equipment through a web dashboard.
<p align="center">
<a href="https://tribalchiefcoder.github.io/Smart_Factory_Dashboard/">{=html}
<img src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-2ea44f?style=for-the-badge&logo=github" alt="Live Demo">{=html}
</a>{=html} <a href="https://doi.org/10.56726/IRJMETS95600">{=html}
<img src="https://img.shields.io/badge/Research%20Paper-Published-blue?style=for-the-badge" alt="Research Paper">{=html}
</a>{=html}
</p>
Project Overview
The project combines the Internet of Things (IoT), embedded systems,
cloud data storage, and a web-based interface for industrial monitoring
and automation.

The proposed system uses an ESP32 DevKit V1 as its main controller.
A DHT11 sensor monitors temperature and humidity, while an IR
sensor is used for object detection. Sensor data is transmitted over
Wi-Fi to Firebase Realtime Database. The web dashboard presents
system information and provides controls for equipment such as a fan,
light, conveyor motor, and buzzer through a relay module.

The project is an educational prototype aligned with smart manufacturing
and Industry 4.0 concepts.
Live Website
Open the Smart Factory
Dashboard

The website is hosted using GitHub Pages. The currently deployed GitHub
Pages version provides a frontend demonstration. GitHub Pages is static
hosting; live hardware communication requires the ESP32 and configured
Firebase/backend integration to be connected and available. A dashboard
notification alone does not confirm that a physical device has switched.
Demo Login
If the demo login screen is enabled:
- Username: admin
- Password: factory123
Security note: This is a frontend-only demonstration login. Its
credentials are present in client-side JavaScript and it is not
suitable for protecting real equipment or sensitive data. Use
server-side authentication and properly secured database rules for a
production system.

Main Features
- Web-based dashboard for factory equipment monitoring and control.
- Temperature and humidity monitoring using the DHT11 sensor.
- Object detection using an IR sensor.
- Equipment control concept for fan, light, conveyor motor, and
  buzzer.
- 4-channel relay module for switching connected loads.
- ESP32 Wi-Fi communication.
- Firebase Realtime Database for cloud data storage and
  synchronization.
- Dashboard login/logout interface for demonstration.
- Contact form with EmailJS integration.
- Responsive web interface.
System Architecture
The intended data and control flow is:
DHT11 Sensor ─┐
              ├──> ESP32 DevKit V1 ── Wi-Fi ──> Firebase Realtime Database
IR Sensor ────┘                                      │
                                                    ▼
                                             Web Dashboard
                                                    │
                                             ON/OFF Commands
                                                    │
                                                    ▼
                                          Firebase Realtime Database
                                                    │
                                                    ▼
                                              ESP32 DevKit V1
                                                    │
                                                    ▼
                                             4-Channel Relay
                                                    │
                         ┌──────────────────────────┼─────────────────────┐
                         ▼                          ▼                     ▼
                       Fan                       Light              Conveyor Motor

                                              Buzzer / Alerts
Hardware Components
  Component                   Purpose
  ESP32 DevKit V1             Main controller and Wi-Fi communication
DHT11 sensor                Temperature and humidity measurement
IR sensor                   Object detection
4-channel relay module      Switching connected equipment
60 RPM DC motor             Conveyor demonstration
Fan                         Equipment output
LED bulb                    Lighting / indication output
Buzzer                      Audio alerts
DC power adapter / supply   Power for the prototype

The project report records an estimated prototype component cost of
₹3,625. Actual cost may vary by supplier and build.
Software and Technologies
- Frontend: HTML, CSS, JavaScript
- Embedded programming: Embedded C
- Microcontroller development: Arduino IDE
- Cloud database: Firebase Realtime Database
- Communication: Wi-Fi
- Simulation: Wokwi
- Hosting: GitHub Pages
- Contact form: EmailJS
Repository Structure
The website repository uses these core frontend files. Add the
documentation and media folders as shown when organizing the repository:
Smart_Factory_Dashboard/
│
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── home.jpeg
│   ├── about.jpeg
│   └── contact.jpeg
│
├── docs/
│   ├── PROJECT_REPORT.pdf
│   ├── researchpaper.pdf
│   └── Poster_Majorproject.pdf
│
├── assets/
│   ├── screenshots/
│   └── diagrams/
│
└── README.md
Keep filenames and paths consistent with the files actually committed to
the repository. Update image paths if your filenames differ.
Project Documentation
Add the following documents to the docs/ folder:
- Project report: docs/PROJECT_REPORT.pdf
- Published research paper: docs/researchpaper.pdf
- Project poster: docs/Poster_Majorproject.pdf
After uploading them, these links will work:
- [View Project Report](docs/PROJECT_REPORT.pdf)
- [View Published Research Paper](docs/researchpaper.pdf)
- [View Project Poster](docs/Poster_Majorproject.pdf)
Published Research Paper
Paper title: Smart Factory IoT Dashboard with Equipment Control

Journal: International Research Journal of Modernization in
Engineering Technology and Science (IRJMETS)
Publication: Volume 08, Issue 04, April 2026
e-ISSN: 2582-5208
DOI: 10.56726/IRJMETS95600

Authors: - Sumedh Sanjay Varadkar - Shubham Rajan Malvankar -
Shreyash Babaso Patil - Sanket Tatyaso Balanna - Vinayak D. Chavan

The paper describes the ESP32, sensor, Wi-Fi, Firebase Realtime
Database, and web-dashboard approach for industrial monitoring and
equipment control.
Getting Started
To view the frontend locally:
1. Clone or download this repository.
2. Open the project folder.
3. Open index.html in a browser, or use the VS Code Live Server
   extension.
4. Use the demo login credentials above if the login screen is enabled.
For a complete hardware-connected setup, the ESP32 firmware, Firebase
project configuration, database structure and rules, and dashboard
Firebase integration must also be configured. Never commit Wi-Fi
passwords, Firebase private credentials, service secrets, or other
sensitive keys to a public repository.
Team
Department of Electronics and Telecommunication Engineering
Finolex Academy of Management & Technology, Ratnagiri
Academic Year: 2025--26

  Name                      Project role
  Sumedh Sanjay Varadkar    Project team
Shubham Rajan Malvankar   Project team
Shreyash Babaso Patil     Project team
Sanket Tatyaso Balanna    Project team

Project Guide: Prof. V. D. Chavan
Future Scope
Possible extensions include:
- Strong authentication and role-based access.
- Secure, reliable hardware-to-cloud communication.
- Historical data visualization and analytics.
- Improved anomaly detection and alerting.
- Predictive maintenance features.
- Expansion to additional sensors and equipment.
Acknowledgement
We express our gratitude to our project guide, department, and
institution for their guidance and support throughout the development of
this project.
<p align="center">
Developed as a Major Project -- II (Semester VIII), Electronics and
Telecommunication Engineering.
</p>
