const form = document.querySelector("#contact-form");
const fullName=document.getElementById("fullName");
const email=document.getElementById("email");
const message=document.getElementById("textarea");


function sendEmail(){
 if(fullName.value===""){
  alert("Please enter full name");
 }
 else if(email.value===""){
  alert("Please enter email ");
 }
 else if(message.value===""){
  alert("Please enter your message");
 }
 else{
  const bodyMessage = `Full name: ${fullName.value} <br>Email: ${email.value} <br>message: ${message.value}`;
  Email.send({
    SecureToken :"802bdf3e-c8df-4c7d-8f50-261a521fc947",
    To : 'twinkle127k@gmail.com',
    From : "twinkle127k@gmail.com",
    Subject : fullName.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
      Swal.fire({
        title: "Success!",
        text: "Message sent Successfully",
        icon: "success"
      });
    }
  }
);
}
}
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  sendEmail();
})
// popup section started here 
