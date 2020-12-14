import React, {useState} from "react";
import HouseCode from './HouseCode';
import AreaCode from "./AreaCode";
import mock from "../pages/dashboard/mock";
// import Table from "../pages/dashboard/components/Table/Table";

/* 분양 임대 공고문 조회 서비스 */

/*
CNP_CD : 지역코드(AreaCode),
UPP_AIS_TP_CD: 공고유형코드(HouseCode),
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
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();

        let startDate = year.toString() + (month-2).toString() + day.toString();
        let endDate = year.toString() + month.toString() + day.toString();

        const url = '/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&PAN_NM=서울&UPP_AIS_TP_CD=06&CNP_CD=11&PAN_SS=공고중';
        let queryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
        queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');            /*한 페이지 결과 수 */
        queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');              /* 페이지 번호 */
        queryParams += '&' + encodeURIComponent('UPP_AIS_TP_CD') + '=' + encodeURIComponent('06');    /* 공고 유형코드 */
        queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + encodeURIComponent('11');           /* 지역코드 */
        queryParams += '&' + encodeURIComponent('PAN_SS') + '=' + encodeURIComponent('공고중');           /* 공고 상태코드 */
        queryParams += '&' + encodeURIComponent('PAN_ST_DT') + '=' + encodeURIComponent(startDate);           /* 검색 날짜 */
        queryParams += '&' + encodeURIComponent('PAN_ED_DT') + '=' + encodeURIComponent(endDate);

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

        if(!isLoading){
            console.log("this:", this.state.dsSch.dsSch[0]);
            console.log("this2:", this.state.dsList.dsList[0]);

            let houseCode = HouseCode.UPP_AIS_TP_CD.filter(x => {
                return x.code === parseInt(this.state.dsSch.dsSch[0].UPP_AIS_TP_CD);
            })

            // 공고 주택 유형 코드 추가
            // TODO 여러개 일 경우 for문 추가
            this.state.dsSch.dsSch[0].HOUSE_TYPE = houseCode[0].type;

            // 지역 코드 추가
            let areaCode = AreaCode.CNP_CD.filter(x => {
                return x.code = parseInt(this.state.dsSch.dsSch[0].CNP_CD);
            })

            this.state.dsSch.dsSch[0].AREA_NAME = areaCode[0].name;
        }

        let data = this.state.dsSch;
        console.log("data:", data);

        return (
            <table>
                <thead>
                <tr>
                    <th scope="col">지역</th>
                    <th scope="col">유형</th>
                    <th scope="col">공고 마감일</th>
                    <th scope="col">공고 상태</th>
                </tr>
                </thead>
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <tbody>
                    {data.dsSch.map((index, matchId) => (
                        <tr>
                            <th scope="row" key={data.dsSch[matchId].AREA_NAME}>
                                {data.dsSch[matchId].AREA_NAME} / {data.dsSch[matchId].PAN_NM}
                            </th>
                            <th scope="row" key={data.dsSch[matchId].HOUSE_TYPE}>
                                {data.dsSch[matchId].HOUSE_TYPE}
                            </th>
                            <th scope="row" key={data.dsSch[matchId].PAN_ED_DT}>
                                {data.dsSch[matchId].PAN_ED_DT}
                            </th>
                            <th scope="row" key={data.dsSch[matchId].PAN_SS}>
                                {data.dsSch[matchId].PAN_SS}
                            </th>
                        </tr>
                    ))}
                    </tbody>
                )}
            </table>
        );
    }
}

export default NoticeOfSales;
