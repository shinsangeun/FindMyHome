import React from "react";
import AreaCode from "./AreaCode";
import SupplyTypeCode from "./SupplyTypeCode";
import HouseCode from "./HouseCode";

/* 분양 임대 공고문 조회 서비스 */

/*
AreaCode: 지역코드(CNP_CD)
SupplyTypeCode: 공급 유형코드(SPL_TP_CD)
*/

class RentalHouseSite extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            dsSch: [],
            dsList: [],
            isLoading: true
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
                dsSch: data[0],
                dsList: data[1],
                isLoading: false
            });
        }
    }


    render() {
        const {isLoading} = this.state;

        if(!isLoading){
            console.log("isLoading:", isLoading);

            console.log("SPL_TP_CD:", this.state.dsSch.dsSch[0].SPL_TP_CD);
            console.log("this2:", this.state.dsList.dsList[1]);
            let supplyTypeCode = SupplyTypeCode.SPL_TP_CD.filter(x => {
                return x.code === parseInt(this.state.dsSch.dsSch[0].SPL_TP_CD);
            })

            // 공고 주택 유형 코드 추가
            // TODO 여러개 일 경우 for문 추가
            this.state.dsSch.dsSch[0].SPL_TP_CD = supplyTypeCode[0].type;

            // 지역 코드 추가
            let areaCode = AreaCode.CNP_CD.filter(x => {
                return x.code = parseInt(this.state.dsSch.dsSch[0].CNP_CD);
            })

            this.state.dsSch.dsSch[0].AREA_NAME = areaCode[0].name;

            console.log("areaCode:", areaCode);
        }

        let data = this.state.dsSch;
        let data2 = this.state.dsList;

        console.log("data2:", data2.dsList);

        return (
         /* <>뿅2</>*/

            <table>
                <thead>
                <tr>
                    {/*<th scope="col">지역</th>
                    <th scope="col">공급 유형</th>*/}
                    <th scope="col">전용 면적</th>
                    <th scope="col">지역명</th>
                    <th scope="col">단지명</th>
                    <th scope="col">세대수</th>
                    <th scope="col">총 세대수</th>
                    <th scope="col">전체 건수</th>
                </tr>
                </thead>
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <tbody>
                    {/*{data.dsSch.map((index, matchId) => (
                        <tr>
                            <th scope="row" key={data.dsSch[matchId].AREA_NAME}>
                                {data.dsSch[matchId].AREA_NAME}
                            </th>
                            <th scope="row" key={data.dsSch[matchId].SPL_TP_CD}>
                                {data.dsSch[matchId].SPL_TP_CD}
                            </th>
                        </tr>
                    ))}*/}

                    {data2.dsList.map((index, matchId) => (
                        <tr>
                            <th scope="row" key={data2.dsList[matchId].DDO_AR}>
                                {data2.dsList[matchId].DDO_AR}
                            </th>
                            <th scope="row" key={data2.dsList[matchId].ARA_NM}>
                                {data2.dsList[matchId].ARA_NM}
                            </th>
                            <th scope="row" key={data2.dsList[matchId].SBD_LGO_NM}>
                                {data2.dsList[matchId].SBD_LGO_NM}
                            </th>
                            <th scope="row" key={data2.dsList[matchId].HSH_CNT}>
                                {data2.dsList[matchId].HSH_CNT}
                            </th>
                            <th scope="row" key={data2.dsList[matchId].SUM_HSH_CNT}>
                                {data2.dsList[matchId].SUM_HSH_CNT}
                            </th>
                            <th scope="row" key={data2.dsList[matchId].ALL_CNT}>
                                {data2.dsList[matchId].ALL_CNT}
                            </th>
                        </tr>
                    ))}
                    </tbody>
                )}
            </table>
        );
    }
}

export default RentalHouseSite;


/*
export default function noticeOfSales() {
    table: [
            {
              dedicatedArea: 46.71,
              area: "서울특별시 강남구",
              complexName: "서울강남 3블록",
              numHouseholds: 72,
              totalNumHouseholds: 873,
              allCount: 19
            }
       ]
}*/
