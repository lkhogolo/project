$(function() {
    $("#submitBtn").click(function()
    {
        var form = document.getElementById('contact-form');
        var status = document.querySelector('.status');

        var name =  document.getElementById('name').value;
        if (name == "") {
            status.innerHTML = "Name cannot be empty";
            return false;
        }
        var lname =  document.getElementById('lname').value;
        if (lname == "") {
            status.innerHTML = "Last Name cannot be empty";
            return false;
        } 
        var email =  document.getElementById('email').value;      
        if (email == "") {
            status.innerHTML = "Email cannot be empty";
            return false;
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                status.innerHTML = "Email format invalid";
                return false;
            }
        }  
        var phone =  document.getElementById('phone').value;     
        if (phone == "") {
            status.innerHTML = "Phone number cannot be empty";
            return false;
        } 
        var subject =  document.getElementById('subject').value;    
        if (subject == "") {
            status.innerHTML = "Please select your type of service from the menu";
            return false;
        } 
        var message =  document.getElementById('message').value;     
        if (message == "") {
            status.innerHTML = "Message cannot be empty";
            return false;
        }
        /*$.ajax({
            url : "https://formspree.io/xrgyvgrw",
            type: "POST",
            dataType:"json",
            data : {
                name:name,
                lname:lname,
                email:email,
                phone:phone,
                cmethod:cmethod.checked,
                subject:subject,
                message:message
            },
            cache: false,
            
            success: function(data, textStatus, jqXHR)
            {
                status.innerHTML="Message was successfully sent";
                //$('#status').text(data.message);
                if (data.code) //If mail was sent successfully, reset the form.
                $('#contact-form').closest('form').find("input[type=text], textarea").val("");
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                $('#status').text(jqXHR);
            }
        });*/
        
    }); 
});

