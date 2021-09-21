import React, {useState} from "react";
import HouseCode from './HouseCode';
import AreaCode from "./AreaCode";
import mock from "../pages/dashboard/mock";

/*
분양 임대 공고문 조회 서비스.
광역시도 코드, 공고유형코드, 공고상태코드, 공고명으로 분양.임대공고문 이용.
공고유형, 공고명, 지역, 공고게시일 정보를 조회하는 목록 조회 기능
*/

/*
AreaCode: 지역코드(CNP_CD),
HouseCode: 공고유형코드(UPP_AIS_TP_CD)
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
