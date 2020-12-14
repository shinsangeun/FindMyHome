import React from "react";
import AreaCode from "./AreaCode";
import SupplyTypeCode from "./SupplyTypeCode";

/* 분양 임대 공고문 조회 서비스 */

/*
AreaCode: 지역코드(CNP_CD)
SupplyTypeCode: 공급 유형코드(SPL_TP_CD)
*/

class RentalHouseSite extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data: ''
        };
    }

    componentDidMount = async () => {
        await this.getRentalHouseSite();
    };

    getRentalHouseSite = async () => {
        const url = '/B552555/lhLeaseInfo/lhLeaseInfo';
        let queryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
        queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');      /* 한 페이지 결과 수 */
        queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');        /* 페이지 번호 */
        queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + encodeURIComponent('11');     /* 지역코드 */
        queryParams += '&' + encodeURIComponent('SPL_TP_CD') + '=' + encodeURIComponent('07');  /* 공급유형코드 */

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
            console.log("data2:", data);

            this.setState({
                data: data
            });
        }
    }


    render() {
        return (
          <>뿅2</>
        );
    }
}

export default RentalHouseSite;


/*
export default function noticeOfSales() {

}*/
