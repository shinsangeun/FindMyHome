import React from "react";
import axios from "axios";

/* 분양 임대 공고문 조회 서비스 */
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
        queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10'); /* */
        queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1'); /* */
        queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + encodeURIComponent('11'); /* */
        queryParams += '&' + encodeURIComponent('SPL_TP_CD') + '=' + encodeURIComponent('07'); /* */

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
