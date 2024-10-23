function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }
  emailjs.send("service_4ewv82m", "template_xrra1tq", parms).then(alert("Email Sent"))
}

