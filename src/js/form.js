import emailjs from "@emailjs/browser";

const btn=document.getElementById("btn");

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "0JXto0xokULVJrV8_",
  });
})();

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  btn.innerHTML="Sending...";
  e.preventDefault();
  emailjs
    .sendForm("service_f4cy3qs", "template_otawb2t", this)
    .then(
      () => {
        alert("Message sent successfully!");
        btn.innerHTML="Submit";
      },
      (err) => {
        alert("Failed to send message.");
        btn.innerHTML = "Submit";
      }
    );
});
