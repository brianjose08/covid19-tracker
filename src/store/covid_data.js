import axios from 'axios';


export function data_summary() {
    return axios.get(`https://disease.sh/v3/covid-19/all`)
        .then(res => res.data)
}

//https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=true 

export function data_vaccine() {
    return axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=true `)
        .then(res => res.data)
}
