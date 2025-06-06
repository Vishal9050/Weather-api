async function getData() 
{
    var response = await fetch('http://api.weatherapi.com/v1/current.json?key=0088b94271684707b2094849250506&q=haryana&aqi=no').then(response => {
        console.log(response.status)

        return response.json()
    }).then(data => {
        console.log(data.location);
        var condition= document.getElementById("condition");
        condition.innerHTML = data.current.condition.text;
        var temp = document.getElementById("temp");
        temp.innerHTML = data.current.temp_c + "°C";
        var city = document.getElementById("city");
        city.innerHTML = data.location.name + ", " + data.location.country;

    });
    
}
getData();