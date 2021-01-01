import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../../../components/PageTitle";
import Widget from "../../../../components/Widget";
import Table from "../../../dashboard/components/Table/Table";

// data
import mock from "../../../dashboard/mock";

const datatableData = [
    [46.71, "서울특별시 강남구", "서울강남 3블록", 72, 873, 19],
    [46.71, "서울특별시 강남구", "서울강남 3블록", 72, 873, 19],
    [46.71, "서울특별시 강남구", "서울강남 3블록", 72, 873, 19],
    [46.71, "서울특별시 강남구", "서울강남 3블록", 72, 873, 19],
    [46.71, "서울특별시 강남구", "서울강남 3블록", 72, 873, 19]
];

const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))

export default function Tables2() {
    const classes = useStyles();
   /* const [dedicatedArea,setDedicatedArea] = useState(46.71);
    const [area,setArea] = useState();
    const [complexName,setComplexName] = useState();
    const [numHouseholds,setNumHouseholds] = useState();
    const [totalNumHouseholds,setTotalNumHouseholds] = useState();
    const [allCount,setAllCount] = useState();*/

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
