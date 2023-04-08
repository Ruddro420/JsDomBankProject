// LOGIN PART

const getBtn = document.getElementById('loginBtn').addEventListener('click',function(){

    const getEmail = document.getElementById('emailField');
    const valueEmail = getEmail.value;
    
    const getPass = document.getElementById('passwordField');
    const valuePass = getPass.value;

    if(valueEmail == 'admin@gmail.com' && valuePass == 123)
    {
        window.location.href='main.html';
    }
    else
    {
        const getError = document.getElementById('error');
        getError.innerHTML = 'Something Wrong !!';
        getError.style.color = 'red';
        getError.style.textAlign = 'center';
    }

});









