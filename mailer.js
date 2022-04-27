const emailjs = require("@emailjs/browser")

async function sendEmail(target) {
  emailjs
    .sendForm(
      "service_pyin8zo",
      "template_3xema5l",
      target,
      "user_PDVUm0P2xtCSGvc6gTsKc"
    )
    .catch((e) => console.log(e))
}

module.exports = sendEmail
