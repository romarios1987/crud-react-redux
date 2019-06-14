// import axios from 'axios';
// import config from '../config/config';
//
// export const httpService = {
//     get,
//     post,
//     put,
//     deleteDetail
// };
// function get(apiEndpoint){
//     return axios.get(config.baseUrl+apiEndpoint, getOptions())
//         .then((response)=>{
//             // console.log(response);
//             return response;
//         }).catch((err)=>{
//             console.log(err);
//         })
// }
// function post(apiEndpoint, payload){
//     return axios.post(config.baseUrl+apiEndpoint, payload, getOptions())
//         .then((response)=>{
//             return response;
//         })
// }
// function put(apiEndpoint, payload){
//     return axios.put(config.baseUrl+apiEndpoint, payload, getOptions())
//         .then((response)=>{
//             return response;
//         }).catch((err)=>{
//             console.log(err);
//         })
// }
// function deleteDetail(apiEndpoint){
//     return axios.delete(config.baseUrl+apiEndpoint, getOptions())
//         .then((response)=>{
//             return response;
//         }).catch((err)=>{
//             console.log(err);
//         })
// }
//
//
//
// function getOptions(){
//     let options = {};
//
//     if(localStorage.getItem('token')){
//         //options.headers = { 'x-access-token': localStorage.getItem('token') };
//         options.headers = {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         }
//     }
//
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//         delete axios.defaults.headers.common['Authorization'];
//     }
//
//
//
//
//     return options;
// }
//
// const setAuthToken = token => {
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//         delete axios.defaults.headers.common['Authorization'];
//     }
// };
//
// export default setAuthToken;
