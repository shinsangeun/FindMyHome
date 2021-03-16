import Widget from "../../../../components/Widget";
import {Grid} from "@material-ui/core";
import {Typography} from "../../../../components/Wrappers";
import {Line, LineChart} from "recharts";
import React from "react";
import Styles from "../../../../pages/dashboard/styles";
import Theme from "../../../../../src/themes/default";
import AreaCode from "../../../../data/AreaCode";

/*
전국 LH 임대 주택 widget
*/

class TotalCount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            seoul: 0,
            noSeoul: 0,
            isLoading: true
        }
    }

    componentDidMount = async() => {
        await this.getNoticeOfSales();
        await this.calcCount();
    }

    getNoticeOfSales = async () => {
        console.log("AAA:", AreaCode);

        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();

        let startDate = year.toString() + (month-2).toString() + day.toString();
        let endDate = year.toString() + month.toString() + day.toString();

        const url = '/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo';
        // ?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&PAN_NM=서울&UPP_AIS_TP_CD=06&CNP_CD=11&PAN_SS=공고중';

        //TODO AreaCode.CNP_CD 수정 필요
        console.log("AreaCode:", AreaCode.CNP_CD);

        let queryParams= '';

        for(let i = 0; i < AreaCode.CNP_CD.length; i++){
            let areaCode = AreaCode.CNP_CD[i];

            queryParams = '?' + encodeURIComponent('serviceKey') + '=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D'; /* Service Key*/
            queryParams += '&' + encodeURIComponent('PG_SZ') + '=' + encodeURIComponent('10');            /*한 페이지 결과 수 */
            queryParams += '&' + encodeURIComponent('PAGE') + '=' + encodeURIComponent('1');              /* 페이지 번호 */
            queryParams += '&' + encodeURIComponent('UPP_AIS_TP_CD') + '=' + encodeURIComponent('06');    /* 공고 유형코드 */
            queryParams += '&' + encodeURIComponent('CNP_CD') + '=' + areaCode.code;           /* 지역 코드 */
            queryParams += '&' + encodeURIComponent('PAN_SS') + '=' + encodeURIComponent('공고중');           /* 공고 상태코드 */
            queryParams += '&' + encodeURIComponent('PAN_ST_DT') + '=' + encodeURIComponent(startDate);           /* 검색 날짜 */
            queryParams += '&' + encodeURIComponent('PAN_ED_DT') + '=' + encodeURIComponent(endDate);

            console.log("test:", areaCode);

            console.log("queryParams:", queryParams, areaCode.code);

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
                console.log("토탈 카운트:", data);

                this.setState({
                    dsSch: data[0],
                    dsList: data[1],
                    isLoading: false
                });
            }
        }
    }

    calcCount = async () => {

    }

    render() {
        const {isLoading} = this.state;

        if(!isLoading){
            console.log("테스트:", this.state.dsSch, this.state.seoul);
        }

        return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Widget
                    title="전국 LH 주택"
                    upperTitle
                    bodyClass={Styles.fullHeightBody}
                    className={Styles.card}
                >
                    <br/>
                    <div>
                        <Grid container item alignItems={"center"}>
                            <Grid item xs={6}>
                                <Typography size="xl" weight="medium" noWrap>
                                    12, 678
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <LineChart
                                    width={100}
                                    height={30}
                                    data={[
                                        { value: 10 },
                                        { value: 15 },
                                        { value: 10 },
                                        { value: 17 },
                                        { value: 18 },
                                    ]}
                                >
                                    <Line
                                        type="natural"
                                        dataKey="value"
                                        stroke={Theme.palette.success.main}
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                </LineChart>
                            </Grid>
                        </Grid>
                    </div>

                    <br/><br/>

                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <Typography color="text" colorBrightness="secondary" noWrap>
                                공고 중
                            </Typography>
                            <Typography size="md">
                                33
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography color="text" colorBrightness="secondary" noWrap>
                                접수 중
                            </Typography>
                            <Typography size="md">32</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography color="text" colorBrightness="secondary" noWrap>
                                접수 마감
                            </Typography>
                            <Typography size="md">3.25%</Typography>
                        </Grid>
                    </Grid>
                </Widget>
            </Grid>
        );
    }
}

export default TotalCount;