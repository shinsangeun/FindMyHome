import areaCode from "../../components/data/AreaCode";

// rentalHouse param
let rentalHouseQueryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D';
rentalHouseQueryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');
rentalHouseQueryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');
rentalHouseQueryParams += '&' + encodeURIComponent('CNP_CD') + '=' + {areaCode};
rentalHouseQueryParams += '&' + encodeURIComponent('SPL_TP_CD') + '=' + encodeURIComponent('07');

// noticeOfSales param
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const startDate = year.toString() + (month-2).toString() + day.toString();
const endDate = year.toString() + month.toString() + day.toString();

let noticeQueryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
noticeQueryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');            /*한 페이지 결과 수 */
noticeQueryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');              /* 페이지 번호 */
noticeQueryParams += '&' + encodeURIComponent('UPP_AIS_TP_CD') + '=' + encodeURIComponent('06');    /* 공고 유형코드 */
noticeQueryParams += '&' + encodeURIComponent('CNP_CD') + '=' + encodeURIComponent('11');           /* 지역코드 */
noticeQueryParams += '&' + encodeURIComponent('PAN_SS') + '=' + encodeURIComponent('공고중');           /* 공고 상태코드 */
noticeQueryParams += '&' + encodeURIComponent('PAN_ST_DT') + '=' + encodeURIComponent(startDate);           /* 검색 날짜 */
noticeQueryParams += '&' + encodeURIComponent('PAN_ED_DT') + '=' + encodeURIComponent(endDate);


export default [
    {
        rentalHouse: `/B552555/lhLeaseInfo/lhLeaseInfo` + rentalHouseQueryParams,
        noticeOfSales: `/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo` + noticeQueryParams
    }
]

