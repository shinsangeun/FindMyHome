/* 임대 주택 조회 서비스 */

const request = require('request');

const url = 'http://apis.data.go.kr/B552555/lhLeaseInfo/lhLeaseInfo';
let queryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + encodeURIComponent('11'); /* */
queryParams += '&' + encodeURIComponent('SPL_TP_CD') + '=' + encodeURIComponent('07'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    if(response.statusCode === 200){
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Data:', body);
    }else{
        console.log('error:', error);
    }
});