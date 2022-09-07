import dynamic from "next/dynamic";

const Chart = dynamic(
    // @ts-ignore
    () => import("../components/chart/Chart"),
    { loading: () => <p>loading...</p>, ssr: false }
);

const chart = () => {
    return <Chart />;
}

export default chart;