import axios from 'axios';

//"https://api.covid19api.com/countries";
//"https://api.covid19api.com/world/total";
//"https://covid-193.p.rapidapi.com/statistics"

//https://disease.sh/v3/covid-19/countries

//https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=true vaccines


export function data_summary() {
    return axios.get(`https://api.quarantine.country/api/v1/summary/latest`)
        .then(res => res.data)
}
