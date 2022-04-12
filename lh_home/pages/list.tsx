import {useQuery} from "react-query";
import {useCallback, useState} from "react";
import axios from 'axios';

const list = () => {
    const [locationCode, setLocationCode] = useState<number>(11); // 서울

    // 공고 유형 코드 (UPP_AIS_TP_CD) 06: 임대주택
    // PAN_SS=공고중: 추가해서 지역별 공고중 개수 그래프 만들기
    const {isLoading, error, data, refetch} = useQuery('repoData', async () =>
        await axios.get(`http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&UPP_AIS_TP_CD=06&CNP_CD=${locationCode}`,
            // @ts-ignore
        {variables: locationCode})
    )

    const onRefresh = useCallback(() => {
        refetch().then(r => {})
    }, [refetch]);

    if(data !== undefined){
        console.log("data:", data.data[1].dsList);
    }

    if (isLoading) return 'Loading...'
    if (error) return 'Error'

    const handleChange = (obj: any) => {
        console.log("result:", obj.target.value);
        setLocationCode(obj.target.value);
    }

    if(data !== undefined) {
        return (
            <>
                <h2 style={{padding: "0px 20px"}}>임대 주택 공고 현황</h2>
                <div style={{padding: "0px 20px"}}>* 최근 2달 데이터만 조회 합니다.</div>

                <select onChange={handleChange} style={{margin: "20px 20px"}}>
                    <option value="11">서울특별시</option>
                    <option value="28">인천광역시</option>
                    <option value="41">경기도</option>
                    <option value="42">강원도</option>
                    <option value="43">충청북도</option>
                    <option value="44">충청남도</option>
                    <option value="45">전라북도</option>
                    <option value="46">전라남도</option>
                    <option value="47">경상북도</option>
                    <option value="48">경상남도</option>
                    <option value="26">부산광역시</option>
                    <option value="27">대구광역시</option>
                    <option value="29">광주광역시</option>
                    <option value="30">대전광역시</option>
                    <option value="31">울산광역시</option>
                    <option value="36110">세종특별자치시</option>
                    <option value="50">제주특별자치도</option>
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
                        {data.data[1].dsList !== null && data.data[1].dsList.length > 0 ?
                            <>
                                {data.data[1].dsList.map((key: string, index: number) => (
                                    <tr>
                                        {/*@ts-ignore*/}
                                        <td style={{maxWidth: "280px", border: "1px solid #808080"}}>{data.data[1].dsList[index].PAN_NM} </td>
                                        {/*@ts-ignore*/}
                                        <td style={{border: "1px solid #808080"}}>{data.data[1].dsList[index].CNP_CD_NM}</td>
                                        {/*@ts-ignore*/}
                                        <td style={{border: "1px solid #808080"}}>{data.data[1].dsList[index].AIS_TP_CD_NM}</td>
                                        {/*@ts-ignore*/}
                                        <td style={{border: "1px solid #808080"}}>{data.data[1].dsList[index].PAN_NT_ST_DT}</td>
                                        {/*@ts-ignore*/}
                                        <td style={{border: "1px solid #808080"}}>{data.data[1].dsList[index].CLSG_DT}</td>
                                        <td style={{border: "1px solid #808080"}}>
                                            <button>
                                                {/*@ts-ignore*/}
                                                <a href={data.data[1].dsList[index].DTL_URL} target={"_blank"}>상세 보기</a>
                                            </button>
                                        </td>
                                        <td style={{border: "1px solid #808080"}}>
                                            {/*@ts-ignore*/}
                                            {data.data[1].dsList[index].PAN_SS === "접수마감" ? <div style={{background: "red", color: "white"}}>{data.data[1].dsList[index].PAN_SS}</div> : <div style={{background: "green", color: "white"}}>{data.data[1].dsList[index].PAN_SS}</div>}
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
}

export default list;