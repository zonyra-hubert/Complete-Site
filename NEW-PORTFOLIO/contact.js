function hamburg(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(0px)"

}

function cancel(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(-500px)"

}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




  // // Add event listener to handle form submission
  // document.getElementById("contact-form").addEventListener("submit", function(event) {
  //   event.preventDefault(); // Prevent form from submitting the traditional way

  //   // Send the form data using EmailJS
  //   emailjs.sendForm('service_k07sji8', 'template_mswk08s', this)
  //     .then(function(response) {
  //       alert("Success! Your message has been sent.");
  //     }, function(error) {
  //       alert("Failed to send the message. Error: " + error.text);
  //     });
  // });


  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Send the form data using EmailJS
    emailjs.sendForm('service_k07sji8', 'template_mswk08s', this)
      .then(function(response) {
        alert("Success! Your message has been sent.");
      }, function(error) {
        alert("Failed to send the message. Error: " + error.text);
      });
  });
  
