import React from "react";
import axios from "axios";

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

    getNoticeOfSales = async () => {
        const url = '/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo';
        let queryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
        queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');      /*한 페이지 결과 수 */
        queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');        /* 페이지 번호 */
        queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + encodeURIComponent('11');     /* 지역코드 */
        queryParams += '&' + encodeURIComponent('SPL_TP_CD') + '=' + encodeURIComponent('07');  /* */

        const options = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        };

        let response = await fetch(url + queryParams, options);
        let responseOK = response && response.ok;

        if(responseOK){
            let data = await response.json();
            console.log("NoticeOfSales:", data);
            let dsSchArray = [];
            let dsListArray = [];

            dsSchArray.push(data[0]);
            // dsListArray.push(data[1]);

            this.setState({
                dsSch: dsSchArray[0].dsSch,
                // dsList: dsListArray,
                isLoading: false
            });
        }
    }

    render() {
        const {isLoading} = this.state;
        console.log("isLoading:", isLoading)

        if(!isLoading){
            console.log("this:", this.state.dsSch);
        }

        return (
            <div>
                {this.state.dsSch}
            </div>
        );
    }

}

export default NoticeOfSales;


/*
export default function noticeOfSales() {

}*/
