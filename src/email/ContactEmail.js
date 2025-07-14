import emailjs from "@emailjs/browser";

const btn = document.getElementById("btn");
const dialog = document.getElementById("dialog");

// emailjs publiuc key
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "Y0U_5YYlGlnx00jDH",
  });
})();

const form = document.getElementById("form");
const errMessage = `<h2 class="text-3xl">Thanks for contacting us</h2><p class="text-lg text-red-300 text-center">However, we encountered an error sending your message.</p>`;

form.addEventListener("submit", function (e) {
  btn.innerHTML = "Sending...";
  e.preventDefault();
  emailjs.sendForm("service_xnl3k4z", "template_a2ize9q", this).then(
    () => {
      alert("Message sent successfully!");
      btn.innerHTML = "Submit";
      dialog.classList.remove("-top-100", "opacity-0");
      dialog.classList.add("top-0", "opacity-100");

      setTimeout(() => {
        dialog.classList.remove("top-0", "opacity-100");
        dialog.classList.add("-top-100", "opacity-0");
      }, 3000);

      this.reset();
    },
    (err) => {
      alert("Failed to send message.");
      btn.innerHTML = "Submit";
      dialog.innerHTML = errMessage;
      dialog.classList.remove("-top-100", "opacity-0");
      dialog.classList.add("top-0", "opacity-100");

      setTimeout(() => {
        dialog.classList.remove("top-0", "opacity-100");
        dialog.classList.add("-top-100", "opacity-0");
      }, 4000);
    }
  );
});
