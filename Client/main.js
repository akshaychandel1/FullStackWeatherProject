document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    function validateEmail(email) {
        return emailRegex.test(email);
    }

    const user_fname = document.getElementById('fname').value
    const user_lname = document.getElementById('lname').value
    const user_email = document.getElementById('email').value
    const user_password = document.getElementById('pwd').value
    // console.log(user_fname,user_lname,user_email,user_password);
    const isValidEmail = validateEmail(user_email);
    if (isValidEmail) {

        if (user_email === '' || user_password === '') {
            alert('Plese enter your email and password')
        } else {

            const user = {
                fname: user_fname,
                lname: user_lname,
                email: user_email,
                password: user_password
            }

            const url = `http://localhost:8082/users`
            const xhr = new XMLHttpRequest()
            xhr.open('POST', url)
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
            xhr.setRequestHeader('Content-Type', 'application/json')

            xhr.onreadystatechange = () => {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    console.log(user)
                    console.log(xhr.responseText)
                    window.location = './weather/index.html'


                }
            }
            xhr.send(JSON.stringify(user))
            // window.location = 'http://127.0.0.1:5500/weather/index.html'

        }


    }
    else {

        console.log("invalid");

    }

})