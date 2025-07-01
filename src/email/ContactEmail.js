import emailjs from "@emailjs/browser";

const btn = document.getElementById("btn");

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "Y0U_5YYlGlnx00jDH",
  });
})();

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  btn.innerHTML = "Sending...";
  e.preventDefault();
  emailjs.sendForm("service_xnl3k4z", "template_a2ize9q", this).then(
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
