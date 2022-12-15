import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// visit openweather to get your api key
const API_KEY = '025229b95ed59e33f24b2877e5bb3022'

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data;
}
