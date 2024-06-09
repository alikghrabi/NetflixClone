$(document).ready(function () {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passFormat = /^[A-Za-z]\w{7,15}$/;
    let input = $(".login-button");
    let sign = $(".mlinput")[0];
    let link = $(".toMain");
    let pass = $(".mlinput")[1];
    input.click(function (e) {
        if(emailFormat.test(sign.value)) {
            if(passFormat.test(pass.value)){
                Swal.fire({      // here we used the sweetAlert library to add good looking alerts for pass and email validation
                    position: 'center',
                    icon: 'success',
                    title: 'Logged In Successfully !',
                    background: `black`,
                    color: `green`,
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(function () {
                    window.location = "../main_HasanDiab/main.html"; // to change to main page after the alert of successful login which lasts 1.5s
                }, 1800);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid',
                    background: `black`,
                    color: `white`,
                    text: 'Password Must be Between 8-16 Letters, Can Only Contain Alphanumerics and Underscore, and Should Start with a Letter',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid',
                background: `black`,
                color: `white`,
                text: 'Please Enter a Valid Email !',
            });
            e.preventDefault();
        }
    });
});