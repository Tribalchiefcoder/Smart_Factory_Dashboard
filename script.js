
document.addEventListener('DOMContentLoaded', function() {

    const toggleInputs = document.querySelectorAll('.toggle-input');
    const controlCards = document.querySelectorAll('.control-card');
    const toastContainer = document.getElementById('toastContainer');

    // Map equipment names to ESP32 routes
    const deviceRoutes = {
        fan: "fan",
        light: "light",
        conveyor: "conv",
        motor: "motor",
        machine: "machine"
    };

    toggleInputs.forEach((input, index) => {

        input.addEventListener('change', function() {

            const card = controlCards[index];
            const equipment = card.dataset.equipment;
            const route = deviceRoutes[equipment];
            const isOn = this.checked;

            if (isOn) {
                card.classList.add('on');
                fetch("/" + route + "on");
                showToast(equipment + " turned ON", "success");
            } else {
                card.classList.remove('on');
                fetch("/" + route + "off");
                showToast(equipment + " turned OFF", "info");
            }

        });

    });

    // Power Off All Equipment
    const powerOffBtn = document.getElementById('powerOffBtn');

    powerOffBtn.addEventListener('click', function() {

        toggleInputs.forEach((input, index) => {

            input.checked = false;

            const card = controlCards[index];
            const equipment = card.dataset.equipment;
            const route = deviceRoutes[equipment];

            card.classList.remove('on');

            fetch("/" + route + "off");

        });

        showToast("All equipment powered OFF", "warning");

    });

    // Fetch sensor data from ESP32
    function updateSensors() {

        fetch("/sensor")
        .then(response => response.json())
        .then(data => {

            document.getElementById("temp").textContent = data.temp + "°C";
            document.getElementById("humidity").textContent = data.humidity + "%";

        })
        .catch(error => {
            console.log("Sensor fetch error:", error);
        });

    }

    setInterval(updateSensors, 3000);
    updateSensors();

    // Contact form - EmailJS
    const contactForm = document.getElementById('contact-form');

    // Initialize EmailJS with your Public Key
    emailjs.init({
        publicKey: "vJOcMT4YjG5Ed7Xq3"
    });

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            await emailjs.sendForm(
                'service_ykog2wp',
                'template_g0huaz',
                contactForm
            );

            showToast('Your message has been sent successfully!', 'success');
            contactForm.reset();

        } catch (error) {
            console.error('EmailJS error:', error);
            showToast('Unable to send your message. Please try again.', 'error');

        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });

    // Toast notifications
    function showToast(message, type = "info") {

        const toast = document.createElement("div");

        toast.className = "toast " + type;
        toast.textContent = message;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);

    }

});
