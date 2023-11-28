const axios = require("axios");
//sua chave aqui
const apiKey = "f309778b83bcd95db252a818ee7a9294";
//cidade desejada
const q = "Santos";

const urlGeocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&appid=${apiKey}&units=metric&lang=pt_br`;

//1. envia o nome de uma cidade
axios.get(urlGeocoding).then((res) => {
    return res.data;
}).then((res) => {
    //2. obtém as coordenadas latitude/longitude dessa cidade
    lat = res[0].lat;
    lon = res[0].lon;

    //3. envia as coordenadas latitude/longitude obtidas anteriormente
    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
    axios.get(urlCurrent).then((res) => {
        return res.data;
    }).then((res) => {
        //4. obtém a sensação térmica (feels_like) e descrição (description)
        feels_like = res.main.feels_like
        description = res.weather[0].description
        
        //5. exibir os valores no console.
        console.log(`Sensação térmica: ${feels_like}°.
Descrição: ${description}.`)
    });
});