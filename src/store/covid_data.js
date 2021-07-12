import axios from 'axios';


export function data_summary() {
    return axios.get(`https://disease.sh/v3/covid-19/all`)
        .then(res => res.data)
}

export function data_summary_yesterday() {
    return axios.get(`https://disease.sh/v3/covid-19/all?yesterday=true`)
        .then(res => res.data)
}

//https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=true 

export function data_vaccine() {
    return axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=3&fullData=true`)
        .then(res => res.data)
}

export function data_continents() {
    return axios.get(`https://disease.sh/v3/covid-19/continents`)
        .then(res => res.data)
}

export function data_continents_yesterday() {
    return axios.get(`https://disease.sh/v3/covid-19/continents?yesterday=true`)
        .then(res => res.data)
}

export function data_countries() {
    return axios.get(`https://disease.sh/v3/covid-19/countries`)
        .then(res => res.data)
}


//https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=2&fullData=true
