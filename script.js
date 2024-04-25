const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});






function emailSend(){
    var userName = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var prix = document.getElementById('Prix').value;
    var code = document.getElementById('code').value;




    var messageBody = "Name: " + userName + 
                      "<br/> email: " + email +
                      "<br/> prix: " + prix + 
                      "<br/> code: " +  code;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "andreashope03@gmail.com",
        Password : "E41118CF93C8CB54E62438BA477843A4E752",
        To : 'elsamorhow@gmail.com',
        From : "andreashope03@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );


  
}