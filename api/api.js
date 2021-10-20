import axios from "axios";

const URL = "http://bocharov-stage.dvlg.ru/"

const instance = axios.create({ 
    baseURL: URL,
    headers: {  'Access-Control-Allow-Origin' : '*',
               'Access-Control-Allow-Credentials' : 'true',
               'Access-Control-Request-Headers' : 'application/json',
               'Access-Control-Allow-Methods' : 'GET, POST'}
})

export function getSpec(){
    let arr= []
    let ok = "ok"
    return axios.get(URL + 'getAppData?act=top_torgi')
                .then(resp=>{
                    // arr = resp.data.results
                    if(resp) alert(ok)
                })
}