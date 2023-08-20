// document.getElementById('submit').addEventListener('click', () =>{
//   var city = document.getElementById("search-text").value;
// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km');
// xhr.setRequestHeader('X-RapidAPI-Key', '01c56eeb42mshe682863e039f3b3p174034jsn4950fbe95285');
// xhr.setRequestHeader('X-RapidAPI-Host', 'travel-advisor.p.rapidapi.com');

// xhr.send(data);














 v=window.localStorage.getItem('myemail')
console.log("===",v);
document.getElementById('my-email').innerHTML=v





document.getElementById('submit').addEventListener('click', () =>{
  var city = document.getElementById("search-text").value;
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
      headers: { 'X-Api-Key': 'LEDnKf5JNhJ/d9sRMZEEAg==w2uJUJWWdf6dUdXb'},
      contentType: 'application/json',
      success: function(result) {
          console.log(result);


        //   switch (json.weather[0].main) {
        //     case 'Clear':
        //         image.src = 'images/clear.png';
        //         break;

        //     case 'Rain':
        //         image.src = 'images/rain.png';
        //         break;

        //     case 'Snow':
        //         image.src = 'images/snow.png';
        //         break;

        //     case 'Clouds': 
        //         image.src = 'images/cloud.png';
        //         break;

        //     case 'Haze':
        //         image.src = 'images/mist.png';
        //         break;

        //     default:
        //         image.src = '';
        // }
        



          var frame = '';
          if(result.temp <= 0) {
            frame = `
            <div>
              <img />
              <p id="temp"> Temperature is ${result.temp}</p>
            </div>
            `
          } else {
            frame = `
              <div>
                <img />
                <p id="temp"> Temperature is ${result.temp}</p>
              </div>
            `
          }

//  FOR TEMP         
          let generatedHTML_for_temp = '';
          generatedHTML_for_temp = `
          <div>
            <p id="temp"> <h2> ${result.temp} °C</h2></p>
            </div>
          `
        document.getElementById('search-result1').innerHTML = generatedHTML_for_temp;

//  FOR HUMIDITY
        let generatedHTML_for_humidity1 = '';
        generatedHTML_for_humidity1 = `
    
          <p id="humidity">${result.humidity}%</p>
        `
        document.getElementById('humidity1').innerHTML = generatedHTML_for_humidity1;

//  FOR WIND
          let generatedHTML_for_wind1 = '';
          generatedHTML_for_wind1 = `
            <p id="wind1">${result.wind_speed} Km</p>
          `
          document.getElementById('wind1').innerHTML = generatedHTML_for_wind1;
          
// For MIN And MAX Temp          
            let generatedHTML_for_mintemp1 = '';
            generatedHTML_for_mintemp1 = `
              <p id="mintemp1">${result.min_temp} °C</p>
            `
            document.getElementById('mintemp1').innerHTML = generatedHTML_for_mintemp1;

            let generatedHTML_for_maxtemp1 = '';
            generatedHTML_for_maxtemp1 = `
              <p id="maxtemp1">${result.max_temp} °C</p>
            `
            document.getElementById('maxtemp1').innerHTML = generatedHTML_for_maxtemp1;

      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
})