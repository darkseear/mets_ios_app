import axios from "axios";

// const URL = "http://bocharov-stage.dvlg.ru/"
const URL = "https://m-ets.ru/"

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

export const getSpecOneAsinc = async (lots_id) => {
    try{
        const resp = await fetch(URL + `getAppData?act=spec_data&lots_id=${lots_id}`);
        const json = await resp.json();
        return json.results;
    } catch (error){
        alert(error);
    }
}

export const getSpecAsinc =  async () => {
    try{
        const resp = await fetch(URL + 'getAppData?act=top_torgi');
        const json = await resp.json();
        return json.results;
    } catch (error){
        console.log(error)
    } 
}