$(document).ready(function () {

    send();

    var ccforms= {};

    function send() {

        $("#ccbtn1").on("click", (event) => {
           
            var name = $('#name').val();
            var email= $('#email').val();
            var phone = $('#phone').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            persist(name, email, phone, subject, message);

            $('#name').val("");
            $('#email').val("");
            $('#phone').val("");
            $('#subject').val("");
            $('#message').val("");


        
            
            event.preventDefault();
            
        });

    }

    function persist(name, email, phone, subject, message){
        ccforms.name = name;
        ccforms.email = email;
        ccforms.phone = phone;
        ccforms.subject = subject;
        ccforms.message = message;

        localStorage.setItem('ccForms', JSON.stringify(ccforms));

        console.log(ccforms);
        
        

    }





});