// Scroll Animation
const animateElements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

animateElements.forEach((el) => observer.observe(el));

// Smooth Scroll for Navbar (Optional)
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// EmailJS Init
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

// Contact Form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let params = {
      from_name: name.value,
      email_id: email.value,
      message: message.value,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params).then(
      () => {
        alert("Message Sent Successfully!");
      },
      () => {
        alert("Failed to Send Message.");
      }
    );
  });
