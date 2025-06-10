import emailjs from "@emailjs/browser"

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "0JXto0xokULVJrV8_",
  });
})();

const form=document.getElementById("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("Form submitted successfully");
})