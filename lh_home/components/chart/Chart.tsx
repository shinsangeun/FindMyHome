import { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

am4core.useTheme(am4themes_animated);

const Chart = () => {
    useLayoutEffect(() => {
        let root = am5.Root.new("chartdiv");
        const chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                wheelY: "zoomX"
            })
        );

        // Define
        var data = [{
            date: new Date(2021, 0, 1).getTime(),
            value: 100,
            value2: 220
        }, {
            date: new Date(2021, 0, 2).getTime(),
            value: 320,
            value2: 300
        }, {
            date: new Date(2021, 0, 3).getTime(),
            value: 216,
            value2: 120
        }, {
            date: new Date(2021, 0, 4).getTime(),
            value: 150,
            value2: 190
        }, {
            date: new Date(2021, 0, 5).getTime(),
            value: 156,
            value2: 190
        }, {
            date: new Date(2021, 0, 6).getTime(),
            value: 199,
            value2: 120
        }, {
            date: new Date(2021, 0, 7).getTime(),
            value: 114,
            value2: 300
        }, {
            date: new Date(2021, 0, 8).getTime(),
            value: 269,
            value2: 290
        }, {
            date: new Date(2021, 0, 9).getTime(),
            value: 190,
            value2: 290
        }, {
            date: new Date(2021, 0, 10).getTime(),
            value: 380,
            value2: 170
        }, {
            date: new Date(2021, 0, 11).getTime(),
            value: 250,
            value2: 200
        }, {
            date: new Date(2021, 0, 12).getTime(),
            value: 110,
            value2: 210
        }, {
            date: new Date(2021, 0, 13).getTime(),
            value: 185,
            value2: 85
        }, {
            date: new Date(2021, 0, 14).getTime(),
            value: 105,
            value2: 244
        }];

        // Create Y-axis
        var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                extraTooltipPrecision: 1,
                renderer: am5xy.AxisRendererY.new(root, {
                    minGridDistance: 30
                })
            })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 20,
                    cellStartLocation: 0.2,
                    cellEndLocation: 0.8
                })
            })
        );

        // Create series
        function createSeries(name: string, field: string) {
            var series = chart.series.push(
                am5xy.LineSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: field,
                    valueXField: "date",
                    tooltip: am5.Tooltip.new(root, {})
                })
            );

            series.strokes.template.setAll({
                strokeWidth: 2
            });

            series.events.on("datavalidated", function() {
                // @ts-ignore
                chart.get("cursor").setAll({
                    positionX: 0.99,
                    positionY: 0.4,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    alwaysShow: true
                });
            });

            // @ts-ignore
            series.get("tooltip").label.set("text", "[bold]{name}[/]: {valueY}")
            series.data.setAll(data);
        }

        createSeries("서울", "value");
        createSeries("경기", "value2");

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none",
            xAxis: xAxis,
        }));

        xAxis.set("tooltip", am5.Tooltip.new(root, {
            themeTags: ["axis"]
        }));

        yAxis.set("tooltip", am5.Tooltip.new(root, {
            themeTags: ["axis"]
        }));

        return () => {
            chart.dispose();
        };
    }, []);

    return(
        <div id={"chartdiv"} style={{width: "1000px", height: "500px"}}/>
    )
}

export default Chart;