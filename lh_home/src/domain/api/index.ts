import ky from 'ky';

const { API_KEY } = process.env;

export const getHouse = async (): Promise<''> => {
    const url = 'https://apis.data.go.kr/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo';
    // ?&PG_SZ=10&PAGE=1&PAN_NM=서울&UPP_AIS_TP_CD=06&CNP_CD=11&PAN_SS=공고중';

    const json = await ky(url, {
        searchParams: {
            serviceKey: API_KEY || '',
            query: '',
            PAGE: 1,
            PG_SZ: 30,
            PAN_NM: '서울',
            UPP_AIS_TP_CD: '06',
            CNP_CD: 11,
            PAN_SS: '공고중'
        },
    }).json<''>();

    console.log("json:", json);
    return json;
}