import * as Config from './../constants/Config';
import axios from 'axios';
export default function callApi(enpoint, method ='GET', body){
  //console.error(headers);
  return  axios({
    method: method,
    url: `${Config.API_URL}/${enpoint}`,
    data: body,
    headers: {Authorization:'Bearer ' + JSON.parse(localStorage.getItem('accessToken')).accessToken}
  }).catch(function (error) {
    console.log(error);
  });
}