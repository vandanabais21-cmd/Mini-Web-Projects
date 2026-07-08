let apikey ="007dcc8865d28efcd5da94e7474cb1e7";

const  btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");

const geoUrl = (cityName) =>{
    return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apikey}`;
};

const weatherApi = (lat,lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
};

btn.addEventListener("click",() => {
   // console.log(inp.ariaValueMax.trim());
    let value = inp.value.trim();
    let url = geoUrl(value);
    inp.value ="";
 

    axios
        .get(url)
        .then((res) =>{
            let lat = res.data[0].lat;
            
            let lon = res.data[0].lon;

            //console.log(res.data[0]);
            return {lat, lon};
        })
        .then((data) => {
            let lat = data.lat;
            let lon = data.lon;
            let url = weatherApi(lat,lon);
            //console.log(url);
        
            axios.get(url).then((res) => {
                console.log(res.data);
        });
    })
    .catch((err) => {
        console.log(err);
    });
});

