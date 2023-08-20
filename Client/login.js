document.getElementById('loginbtn').addEventListener('click', (e) => {
    e.preventDefault()
    user_email = document.getElementById('email').value
    user_password = document.getElementById('pwd').value

    window.localStorage.setItem("myemail",user_email)
   
    console.log(user_email);
    console.log(user_password);
   if(user_email === '' || user_password === '') {
      alert('Plese enter your email and password')
   } else {
      const xhr = new XMLHttpRequest()
      url = `http://localhost:8082/users`
      xhr.open('GET', url)
      xhr.setRequestHeader('Access-Control-Allow-Origin','*')
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
            res=JSON.parse(xhr.responseText)
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                  if (res[i].email==user_email && res[i].password==user_password) {
                     document.getElementById('message').innerHTML="Login Sucessfully"
                     // window.location='http://127.0.0.1:5500/weather/index.html'  
                     window.location = './weather/index.html'    
                  }
                  if (res[i].email!=user_email && res[i].password!=user_password) {
                     document.getElementById('message').innerHTML="Invaild username and password"
                  }
               }
            }
      }
      xhr.send()
   }
})