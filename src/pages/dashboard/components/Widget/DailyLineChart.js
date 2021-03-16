import Widget from "../../../../components/Widget";
import {Typography} from "../../../../components/Wrappers";
import React, {useState} from "react";
import Styles from "../../../../pages/dashboard/styles";
import Theme from "../../../../../src/themes/default";
import AreaCode from "../../../../data/AreaCode";
import Dot from "../../../../components/Sidebar/components/Dot";

import {
    Grid,
    Select,
    OutlinedInput,
    MenuItem,
    Button
} from "@material-ui/core";

import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    YAxis,
    XAxis,
} from "recharts";

class DailyLineChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            seoul: 0,
            noSeoul: 0,
            isLoading: true
        }
    }

    render() {
        const {isLoading} = this.state;

        if(!isLoading){
            console.log("Test");
        }

        return(
        <Grid item xs={12}>
            <Widget
                bodyClass={Styles.mainChartBody}
                header={
                    <div className={Styles.mainChartHeader}>
                        <Typography
                            variant="h5"
                            color="text"
                            colorBrightness="secondary"
                        >
                            Daily Line Chart
                        </Typography>
                        <div className={Styles.mainChartHeaderLabels}>
                            <div className={Styles.mainChartHeaderLabel}>
                                <Dot color="warning" />
                                <Typography className={Styles.mainChartLegentElement}>
                                    Tablet
                                </Typography>
                            </div>
                            <div className={Styles.mainChartHeaderLabel}>
                                <Dot color="primary" />
                                <Typography className={Styles.mainChartLegentElement}>
                                    Mobile
                                </Typography>
                            </div>
                            <div className={Styles.mainChartHeaderLabel}>
                                <Dot color="secondary" />
                                <Typography className={Styles.mainChartLegentElement}>
                                    Desktop
                                </Typography>
                            </div>
                        </div>
                        <Select
                            // TODO 수정 필요
                            /*value={mainChartState}
                            onChange={e => setMainChartState(e.target.value)}
                            */
                            input={
                                <OutlinedInput
                                    labelWidth={0}
                                    classes={{
                                        notchedOutline: Styles.mainChartSelectRoot,
                                        input: Styles.mainChartSelect,
                                    }}
                                />
                            }
                            autoWidth
                        >
                            <MenuItem value="daily">Daily</MenuItem>
                            <MenuItem value="weekly">Weekly</MenuItem>
                            <MenuItem value="monthly">Monthly</MenuItem>
                        </Select>
                    </div>
                }
            >
                <ResponsiveContainer width="100%" minWidth={500} height={350}>
                    <ComposedChart
                        margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                       // data={mainChartData}
                    >
                        <YAxis
                            ticks={[0, 2500, 5000, 7500]}
                            tick={{ fill: Theme.palette.text.hint + "80", fontSize: 14 }}
                            stroke={Theme.palette.text.hint + "80"}
                            tickLine={false}
                        />
                        <XAxis
                            tickFormatter={i => i + 1}
                            tick={{ fill: Theme.palette.text.hint + "80", fontSize: 14 }}
                            stroke={Theme.palette.text.hint + "80"}
                            tickLine={false}
                        />
                        <Area
                            type="natural"
                            dataKey="desktop"
                            fill={Theme.palette.background.light}
                            strokeWidth={0}
                            activeDot={false}
                        />
                        <Line
                            type="natural"
                            dataKey="mobile"
                            stroke={Theme.palette.primary.main}
                            strokeWidth={2}
                            dot={false}
                            activeDot={false}
                        />
                        <Line
                            type="linear"
                            dataKey="tablet"
                            stroke={Theme.palette.warning.main}
                            strokeWidth={2}
                            dot={{
                                stroke: Theme.palette.warning.dark,
                                strokeWidth: 2,
                                fill: Theme.palette.warning.main,
                            }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </Widget>
        </Grid>
        )
    }
}

export default DailyLineChart;