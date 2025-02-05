var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".donation-form")
    .addEventListener("submit", function (e) {
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let amount = document.getElementById("amount").value.trim();

      if (name === "" || email === "" || amount === "") {
        alert("Please fill in all fields.");
        e.preventDefault(); // Prevent form submission
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      } else if (amount <= 0) {
        alert("Donation amount must be greater than zero.");
        e.preventDefault();
      }
    });

  function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  let script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js";
  document.body.appendChild(script);
});

document.querySelector(".donation-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let amount = document.getElementById("amount").value;
  window.location.href = https://www.paypal.com/donate?business=your-paypal-email&amount=${amount}&currency_code=USD;
});