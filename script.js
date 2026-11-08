
document.addEventListener('DOMContentLoaded', function () {
    // DEMO LOGIN ONLY: credentials are visible in client-side code.
    const DEMO_USERNAME = 'admin';
    const DEMO_PASSWORD = 'factory123';

    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const loginScreen = document.getElementById('loginScreen');
    const logoutBtn = document.getElementById('logoutBtn');
    const passwordInput = document.getElementById('loginPassword');
    const togglePassword = document.getElementById('togglePassword');

    function unlockDashboard() {
        document.body.classList.remove('auth-locked');
        if (loginScreen) loginScreen.style.display = 'none';
    }

    if (sessionStorage.getItem('smartFactoryDemoLoggedIn') === 'true') {
        unlockDashboard();
    }

    // Login functionality
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('loginUsername').value.trim();
            const password = passwordInput.value;

            if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
                sessionStorage.setItem('smartFactoryDemoLoggedIn', 'true');

                if (loginError) loginError.textContent = '';

                unlockDashboard();
            } else if (loginError) {
                loginError.textContent =
                    'Incorrect username or password. Please try again.';
            }
        });
    }

    // Show / hide password
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const show = passwordInput.type === 'password';

            passwordInput.type = show ? 'text' : 'password';

            togglePassword.innerHTML = show
                ? '<i class="fas fa-eye-slash"></i>'
                : '<i class="fas fa-eye"></i>';

            togglePassword.setAttribute(
                'aria-label',
                show ? 'Hide password' : 'Show password'
            );
        });
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            sessionStorage.removeItem('smartFactoryDemoLoggedIn');

            document.body.classList.add('auth-locked');

            if (loginScreen) loginScreen.style.display = 'flex';
            if (loginForm) loginForm.reset();
        });
    }

    const toggleInputs = document.querySelectorAll('.toggle-input');
    const controlCards = document.querySelectorAll('.control-card');
    const toastContainer = document.getElementById('toastContainer');
    const contactForm = document.getElementById('contact-form');
    const powerOffBtn = document.getElementById('powerOffBtn');

    // GitHub Pages does not provide ESP32 API routes.
    const isGitHubPages =
        window.location.hostname.endsWith('github.io');

    // Equipment routes
    const deviceRoutes = {
        fan: 'fan',
        light: 'light',
        conveyor: 'conv',
        motor: 'motor',
        machine: 'machine'
    };

    // Toast notification
    function showToast(message, type = 'info') {
        if (!toastContainer) {
            console.log(message);
            return;
        }

        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.textContent = message;

        toastContainer.appendChild(toast);

        setTimeout(() => toast.remove(), 4000);
    }

    // Send equipment command
    async function sendEquipmentCommand(route, action) {
        if (isGitHubPages) {
            showToast(
                'Hardware control needs a connected ESP32/Raspberry Pi backend.',
                'warning'
            );
            return;
        }

        try {
            const response = await fetch('/' + route + action);

            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
        } catch (error) {
            console.error('Equipment command error:', error);
            showToast(
                'Could not reach the hardware controller.',
                'error'
            );
        }
    }

    // Equipment toggle controls
    toggleInputs.forEach((input, index) => {
        input.addEventListener('change', function () {
            const card = controlCards[index];

            if (!card) return;

            const equipment = card.dataset.equipment;
            const route = deviceRoutes[equipment];

            if (!route) return;

            const isOn = this.checked;

            card.classList.toggle('on', isOn);

            if (isGitHubPages) {
                showToast(
                    equipment.charAt(0).toUpperCase() + equipment.slice(1) +
                    (isOn ? ' turned ON successfully!' : ' turned OFF successfully!'),
                    isOn ? 'success' : 'info'
                    );
    }
            } else {
                showToast(
                    equipment + (isOn ? ' turned ON' : ' turned OFF'),
                    isOn ? 'success' : 'info'
                );

                sendEquipmentCommand(
                    route,
                    isOn ? 'on' : 'off'
                );
            }
        });
    });

    // Power off all equipment
    if (powerOffBtn) {
        powerOffBtn.addEventListener('click', function () {
            toggleInputs.forEach((input, index) => {
                input.checked = false;

                const card = controlCards[index];

                if (card) {
                    card.classList.remove('on');

                    const equipment = card.dataset.equipment;
                    const route = deviceRoutes[equipment];

                    if (route && !isGitHubPages) {
                        sendEquipmentCommand(route, 'off');
                    }
                }
            });

            showToast(
                isGitHubPages
                    ? 'Demo controls reset. Hardware power-off requires a connected backend.'
                    : 'Power-off command sent to all equipment.',
                'warning'
            );
        });
    }

    // Update sensor values
    async function updateSensors() {
        if (isGitHubPages) return;

        try {
            const response = await fetch('/sensor');

            if (!response.ok) {
                throw new Error(
                    'Sensor API returned HTTP ' + response.status
                );
            }

            const data = await response.json();

            const temperature = document.getElementById('temp');
            const humidity = document.getElementById('humidity');

            if (temperature && data.temp !== undefined) {
                temperature.textContent = data.temp + '°C';
            }

            if (humidity && data.humidity !== undefined) {
                humidity.textContent = data.humidity + '%';
            }
        } catch (error) {
            console.error('Sensor fetch error:', error);
        }
    }

    if (!isGitHubPages) {
        updateSensors();
        setInterval(updateSensors, 3000);
    } else {
        console.info(
            'GitHub Pages detected: live sensor polling is disabled.'
        );
    }

    // EmailJS contact form
    if (contactForm) {
        if (typeof emailjs === 'undefined') {
            console.error(
                'EmailJS SDK did not load. Check the EmailJS script tag.'
            );

            showToast(
                'Email service could not load. Please refresh and try again.',
                'error'
            );
        } else {
            emailjs.init({
                publicKey: 'vJOcMT4YjG5Ed7Xq3'
            });

            contactForm.addEventListener('submit', async function (event) {
                event.preventDefault();

                const submitButton = contactForm.querySelector(
                    'button[type="submit"]'
                );

                const originalButtonText = submitButton
                    ? submitButton.textContent
                    : 'Send Message';

                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = 'Sending...';
                }

                try {
                    await emailjs.sendForm(
                        'service_ykog2wp',
                        'template_g0huazr',
                        contactForm
                    );

                    showToast(
                        'Your message has been sent successfully!',
                        'success'
                    );

                    contactForm.reset();

                } catch (error) {
                    console.error('EmailJS status:', error && error.status);
                    console.error('EmailJS details:', error && error.text);
                    console.error('Full EmailJS error:', error);

                    const details = error &&
                        (error.text || error.message);

                    showToast(
                        'Unable to send email' +
                        (details ? ': ' + details : '. Check the browser Console.'),
                        'error'
                    );

                } finally {
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = originalButtonText;
                    }
                }
            });
        }
    }
});
