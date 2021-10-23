import ky from 'ky';

const { API_KEY } = process.env;

export const getHouse = async (): Promise<''> => {
    // serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D
    // &PG_SZ=10
    // &SCH_ST_DT=2019-01-03
    // &SCH_ED_DT=2019-10-10
    // &BBS_TL=%EA%B2%B0%EA%B3%BC
    // &BBS_DTL_CTS=%ED%98%84%ED%99%A9
    // &UPP_AIS_TP_CD=01
    // &AIS_TP_CD=02
    // &AIS_TP_CD_INT=36
    // &AIS_TP_CD_INT2=26
    // &AIS_TP_CD_INT3=17
    // &PAGE=1

    const url = 'https://apis.data.go.kr/B552555/lhNoticeInfo/getNoticeInfo';
    // ?&PG_SZ=10&PAGE=1&PAN_NM=서울&UPP_AIS_TP_CD=06&CNP_CD=11&PAN_SS=공고중';

    const json = await ky(url, {
        searchParams: {
            serviceKey: API_KEY || '',
            query: '',
            PAGE: 1,
            PG_SZ: 10,
            SCH_ST_DTL: '2019-01-03',
            SCH_ED_DT: '2019-10-10',
            BBS_TL: '%EA%B2%B0%EA%B3%BC',
            BBS_DTL_CTS: '%ED%98%84%ED%99%A9',
            UPP_AIS_TP_CD: '01',
            AIS_TP_CD: '02',
            AIS_TP_CD_INT: '36',
            AIS_TP_CD_INT2: '26',
            AIS_TP_CD_INT3: '17',
        },
    }).json<''>();

    console.log("json:", json);
    return json;
}