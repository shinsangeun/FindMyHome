import React from "react";
import AreaCode from "./AreaCode";
import SupplyTypeCode from "./SupplyTypeCode";
import PageTitle from "../components/PageTitle";
import {Grid} from "@material-ui/core";
import MUIDataTable from "mui-datatables";

/*
임대주택단지 조회 서비스.
광역시도 코드, 공고유형 코드를 이용.
임대주택 단지의 지역명, 공급유형, 단지명, 총 세대수, 전용면적, 세대수, 임대보증금, 월일대료, 최초 입주년월 정보 조회 기능
*/

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
        const areaCode = 11;    // 서울 특별시

        let queryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
        queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');      /* 한 페이지 결과 수 */
        queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');        /* 페이지 번호 */
        queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + areaCode;     /* 지역코드 */
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
            this.setState({
                dsSch: data[0],
                dsList: data[1],
                isLoading: false
            });
        }
    }


    render() {
        const {isLoading} = this.state;
        const datatableData = [];

        if(!isLoading){
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

            console.log("areaCode:", areaCode[0].name);     //서울 특별시

            for(let i = 0; i<this.state.dsList.dsList.length; i++){
                datatableData.push([
                    this.state.dsList.dsList[i].DDO_AR,
                    this.state.dsList.dsList[i].ARA_NM,
                    this.state.dsList.dsList[i].SBD_LGO_NM,
                    this.state.dsList.dsList[i].HSH_CNT,
                    this.state.dsList.dsList[i].SUM_HSH_CNT,
                    this.state.dsList.dsList[i].ALL_CNT
                ])
            }
        }

        return (
            <>
                <PageTitle title="Tables" />
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <MUIDataTable
                            title="[임대 주택] 분양 임대 공고"
                            data={datatableData}
                            columns={["전용 면적", "지역명", "단지명", "세대수", "총 세대수", "전체 건수"]}
                        />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default RentalHouseSite;