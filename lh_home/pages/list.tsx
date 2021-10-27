import {useQuery} from "react-query";
import {useState} from "react";

const list = () => {
    const [location, setLocation] = useState('서울');

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const startDate = year.toString() + (month-2).toString() + day.toString();
    const endDate = year.toString() + month.toString() + day.toString();

    // PAN_SS=공고중: 추가해서 지역별 공고중 개수 그래프 만들기
    const {isLoading, error, data} = useQuery('repoData', () =>
        fetch(`http://apis.data.go.kr/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&PAN_NM=${location}&UPP_AIS_TP_CD=06&PAN_NT_ST_DT=${startDate}&CLSG_DT=${endDate}`).then(res =>
            res.json()
        )
    )

    // http://apis.data.go.kr/B552555/lhNoticeInfo/getNoticeInfo?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&SCH_ST_DT=2021-01-01&SCH_ED_DT=2021-10-10&BBS_TL=%EA%B2%B0%EA%B3%BC&BBS_DTL_CTS=%ED%98%84%ED%99%A9&UPP_AIS_TP_CD=01&AIS_TP_CD=02&AIS_TP_CD_INT=36&AIS_TP_CD_INT2=26&AIS_TP_CD_INT3=17&PAGE=1
    console.log("data:", data);

    if (isLoading) return 'Loading...'
    if (error) return 'Error'

    const dsList = data[1].dsList;
    console.log("dsList:", dsList);

    const handleChange = (obj: any) => {
        console.log("result:", obj.target.value);
        setLocation(obj.target.value);
    }

    return(
        <>
            <h2 style={{padding: "0px 20px"}}>임대 주택 공고 현황</h2>
            <div style={{padding: "0px 20px"}}>* 최근 2달 데이터만 조회 합니다.</div>

            <select onChange={handleChange} style={{margin: "20px 20px"}}>
                <option value="서울">서울특별시</option>
                <option value="인천">인천광역시</option>
                <option value="경기">경기도</option>
                <option value="강원">강원도</option>
                <option value="충북">충청북도</option>
                <option value="충남">충청남도</option>
                <option value="전북">전라북도</option>
                <option value="전남">전라남도</option>
                <option value="경북">경상북도</option>
                <option value="경남">경상남도</option>
                <option value="부산">부산광역시</option>
                <option value="대구">대구광역시</option>
                <option value="광주">광주광역시</option>
                <option value="대전">대전광역시</option>
                <option value="울산">울산광역시</option>
                <option value="세종">세종특별자치시</option>
                <option value="제주">제주특별자치도</option>
            </select>

            <div style={{padding: "10px 20px"}}>
                <table style={{border: '1px solid #222'}}>
                    <thead>
                        <th style={{border: '1px solid #222'}}>공고명</th>
                        <th style={{border: '1px solid #222'}}>지역명</th>
                        <th style={{border: '1px solid #222'}}>주택 타입</th>
                        <th style={{border: '1px solid #222'}}>공고 게시일</th>
                        <th style={{border: '1px solid #222'}}>공고 마감일</th>
                        <th style={{border: '1px solid #222'}}>공고 상세 URL</th>
                        <th style={{border: '1px solid #222'}}>공고 상태</th>
                    </thead>
                    <tbody>
                    {dsList.length > 0 ?
                        <>
                            {dsList.map((key: any, index: string | number) => (
                                <tr>
                                    <td style={{maxWidth: "280px", border: "1px solid #808080"}}>{dsList[index].PAN_NM} </td>
                                    <td style={{border: "1px solid #808080"}}>{dsList[index].CNP_CD_NM}</td>
                                    <td style={{border: "1px solid #808080"}}>{dsList[index].AIS_TP_CD_NM}</td>
                                    <td style={{border: "1px solid #808080"}}>{dsList[index].PAN_NT_ST_DT}</td>
                                    <td style={{border: "1px solid #808080"}}>{dsList[index].CLSG_DT}</td>
                                    <td style={{border: "1px solid #808080"}}>
                                        <button>
                                            <a href={dsList[index].DTL_URL} target={"_blank"}>상세 보기</a>
                                        </button>
                                    </td>
                                    <td style={{border: "1px solid #808080"}}>
                                        {dsList[index].PAN_SS === "접수마감" ?
                                        <div style={{background: "red", color: "white"}}>{dsList[index].PAN_SS}</div> :
                                        <div style={{background: "green", color: "white"}}>{dsList[index].PAN_SS}</div>}
                                    </td>
                                </tr>
                            ))}
                        </> : <tr>데이터가 없습니다.</tr>
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default list;