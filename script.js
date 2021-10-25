//let apiKey = "82e7dd9f91594cf16ab74b32d027fd08";
// const displayData = (data)=>{
//     const{name} = data;
//     const{icon,discription} = data.weather[0];
//     const{temp,humidity} = data.main;
//     const{speed} = data.wind;

//     console.log(name,icon,discription,temp,humidity,speed);

// };

let weather = {
    apiKey: '82e7dd9f91594cf16ab74b32d027fd08',
    fetchWeatherData: (city) => {
        const a = fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city
            + '&units=metric&appid='
            + weather.apiKey
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {

                weather.displayData2(data);
                // console.log(data);
            })

            .catch((err) => {

            })
    },
    // display data to web.
    displayData2: (data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

       // console.log(name, icon, description, temp, humidity, speed);

        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector('.temp').innerText = temp + ' °C';
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = 'humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind speed: ' + speed + ' km/h';

    }
 

};


const driving = ()=>{
    //set default data
    weather.fetchWeatherData('london')
    //button click
    document.querySelector('.search button').onclick = ()=>{
        var input = document.querySelector('.search .search-bar').value;
        weather.fetchWeatherData(input);
    }
}

//call function
driving();


