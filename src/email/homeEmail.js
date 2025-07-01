import emailjs from "@emailjs/browser";
const form = document.getElementById("form");
const btn = document.getElementById("btn");

// emailjs publiuc key

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "Y0U_5YYlGlnx00jDH",
    });
  })();
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    btn.innerHTML = "Sending...";
    emailjs.sendForm("service_xnl3k4z", "template_srk5fvd", this).then(
      () => {
        alert("Message sent successfully!");
        btn.innerHTML = "Submit";
        this.reset();
      },
      (err) => {
        alert("Failed to send message.");
        btn.innerHTML = "Submit";
      }
    );
  });