import Head from "next/head";
// @ts-ignore
import styled from "styled-components";

const Icon = styled.em`
    width:20px; height: 20px; background-url: ('/public/favicon.ico') center center / no-repeat;
`;


const Header = () => {
    return(
        <Head>
            <Icon/>
            <title>공공 임대 주택 현황</title>
            <meta name="description" content="LH집 - 공공 임대 주택 현황"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

export default Header;