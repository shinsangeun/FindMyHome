import React, {useState} from "react";

/* 분양 임대 공고문 조회 서비스 */

/*
지역코드(CNP_CD)
11	서울특별시
26	부산광역시
27	대구광역시
28	인천광역시
29	광주광역시
30	대전광역시
31	울산광역시
36110	세종특별자치시
41	경기도
42	강원도
43	충청북도
44	충청남도
45	전라북도
46	전라남도
47	경상북도
48	경상남도
50	제주특별자치도
*/

/*
공고유형코드(UPP_AIS_TP_CD)
01	토지
05	분양주택
06	임대주택
13	주거복지
22	상가
39	신혼희망타운
*/


class NoticeOfSales extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            dsSch: [],
            dsList: [],
            isLoading: true
        };
    }

    componentDidMount = async () => {
        await this.getNoticeOfSales();
    };

   /* /B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&PAN_NM=서울&UPP_AIS_TP_CD=06&CNP_CD=11&PAN_SS=공고중 */
    getNoticeOfSales = async () => {
        const url = '/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&PAN_NM=서울&UPP_AIS_TP_CD=06&CNP_CD=11&PAN_SS=공고중';
        let queryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
        queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');            /*한 페이지 결과 수 */
        queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');              /* 페이지 번호 */
        queryParams += '&' + encodeURIComponent('PAN_NM') + '=' + encodeURIComponent('서울');          /* 지역명 */
        queryParams += '&' + encodeURIComponent('UPP_AIS_TP_CD') + '=' + encodeURIComponent('06');    /* 공고 유형코드 */
        queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + encodeURIComponent('11');           /* 지역코드 */
        queryParams += '&' + encodeURIComponent('PAN_SS') + '=' + encodeURIComponent('공고중');           /* 공고 상태코드 */
        queryParams += '&' + encodeURIComponent('PAN_ST_DT') + '=' + encodeURIComponent('20201002');           /* 공고 상태코드 */
        queryParams += '&' + encodeURIComponent('PAN_ED_DT') + '=' + encodeURIComponent('20201202');           /* 공고 상태코드 */

        console.log("query:", queryParams);

        const options = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        };

        let response = await fetch(url, options);
        let responseOK = response && response.ok;

        if(responseOK){
            let data = await response.json();
            console.log("NoticeOfSales:", data);

            this.setState({
                dsSch: data[0],
                dsList: data[1],
                isLoading: false
            });
        }
    }

    render() {
        const {isLoading} = this.state;
       // console.log("isLoading:", isLoading)

        if(!isLoading){
            console.log("this:", this.state.dsSch.dsSch[0]);
            console.log("this2:", this.state.dsList.dsList[0]);
            this.state.CNP_CD = this.state.dsSch.dsSch[0].CNP_CD;
            this.state.PAN_ST_DT = this.state.dsSch.dsSch[0].PAN_ST_DT;
            this.state.PAN_ED_DT = this.state.dsSch.dsSch[0].PAN_ED_DT;
        }

        return (
            <>{this.state.CNP_CD}</>
        );
    }
}

export default NoticeOfSales;

/*
export default function noticeOfSales() {

}*/
