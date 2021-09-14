// @ts-ignore
import { TagCloud } from 'react-tagcloud';
import data from './data/Word';
// @ts-ignore
import styled from "styled-components";

const Layout = styled.div`
    width: 1000px;height:300px;border-top: 1px solid #dcdcdc;padding: 10px;
`;

const Tag = () => {
    return (
        <Layout>
            <TagCloud
                minSize={12}
                maxSize={80}
                tags={data}
                onClick={(tag: { value: string; }) => alert(`'${tag.value}' was selected!`)}
            />
        </Layout>
    )
}

export default Tag;