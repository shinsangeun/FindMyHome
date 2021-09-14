import React, {useState} from "react";
import {Grid, MenuItem, OutlinedInput, Select} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
    const classes = useStyles();
    let [location, setLocation] = useState("서울특별시");

    console.log("location:", location);

    return (
    <>
      <PageTitle title="Tables" />
       {/* TODO defaultValue 값 추가 하기 */}

        지역 선택: <Select
            defaultValue={location}
            value={location}
            onChange={e => setLocation(e.target.value)}
            input={
                <OutlinedInput
                    classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                    }}
                />
            }
            autoWidth
        >
            <MenuItem value="Seoul">서울특별시</MenuItem>
            <MenuItem value="Incheon">인천광역시</MenuItem>
            <MenuItem value="Gyeonggi">경기도</MenuItem>
            <MenuItem value="Gangwondo">강원도</MenuItem>
            <MenuItem value="Chungbuk">충청북도</MenuItem>
            <MenuItem value="Chungnam">충청남도</MenuItem>
            <MenuItem value="Jeonbuk">전라북도</MenuItem>
            <MenuItem value="Jeonnam">전라남도</MenuItem>
            <MenuItem value="Gyeongbuk">경상북도</MenuItem>
            <MenuItem value="Gyeongnam">경상남도</MenuItem>
            <MenuItem value="Busan">부산광역시</MenuItem>
            <MenuItem value="Daegu">대구광역시</MenuItem>
            <MenuItem value="Kwangju">광주광역시</MenuItem>
            <MenuItem value="Daejeon">대전광역시</MenuItem>
            <MenuItem value="Ulsan">울산광역시</MenuItem>
            <MenuItem value="Sejong">세종특별자치시</MenuItem>
            <MenuItem value="Jeju">제주특별자치도</MenuItem>
        </Select>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
