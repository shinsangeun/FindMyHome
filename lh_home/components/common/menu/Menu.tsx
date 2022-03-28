// @ts-ignore
import styled from "styled-components";
import Router from "next/router";

const Layout = styled.div`
    display: inline-block;float:right;right: 100px;position:relative;
`;

const List = styled.li`
    display: inline-block;font-size: 15px;padding: 10px;border: 1px solid #eee;cursor: pointer;margin: 10px;background-color: #fff;
`;

const Menu = () => {
    return(
        <Layout>
            <List onClick={() => Router.push("/")}>홈</List>
            <List onClick={() => Router.push("/map")}>지도</List>
            <List onClick={() => Router.push("/list")}>목록</List>
        </Layout>
    )
}

export default Menu;