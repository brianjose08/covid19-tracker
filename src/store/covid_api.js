import axios from 'axios';

//"https://api.covid19api.com/countries";
//"https://api.covid19api.com/world/total";
//"https://covid-193.p.rapidapi.com/statistics"


export function data() {
    return axios.get(`https://api.quarantine.country/api/v1/summary/latest`)
        .then(res => res.data)
}
