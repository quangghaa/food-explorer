import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import { getTotal } from '../../services/api';

import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ValueChart = () => {

    var dataPoints = [];

    let restart = 0;

    useEffect(() => {
        const current = new Date();

        let reset = new Date(current + 6 * 1000);

        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Daily Volume Chart"
            },
            axisX: {
                interval: 3,
                intervalType: "second",
                valueFormatString: "hh:mm tt"
            },
            axisY: {
                title: "Volume per Day",
                valueFormatString: "# ### ### ### ###"   // move comma to change formatting
            },
            data: [{
                type: "spline",
                markerType: 'circle',
                dataPoints: dataPoints
            }
            ],

        });

        // const res = await getTotal('transactions/total');
        // if (res) dataPoints.push({ x: new Date(), y: res.data });

        const fetchData = async () => {
            const when = new Date();

            let data = null;

            const res = await getTotal('transactions/total');
            if (res) data = res.data

            dataPoints.push({
                x: when,
                y: data
            })
        }

        fetchData();

        chart.render();

        var updateChart = () => {
            // const res = await getTotal('transactions/total');
            // if (res) dataPoints.push({ x: new Date(), y: res.data });
            let when = new Date();

            const fetchData = async () => {
                let data = null;

                const res = await getTotal('transactions/total');
                if (res) data = res.data

                dataPoints.push({
                    x: when,
                    y: data
                })
            }
            console.log("WHEN and Reset: ", when, reset);

            if (when > reset) {
                restart++;
                console.log("RESTART: ", restart);
            }
            

            fetchData();
            chart.render();
        };

        setInterval(() => { updateChart() }, 1000);

    }, [restart])
    // update chart every second

    return (
        <>
            <div id="chartContainer" style={{ height: "300px" }} />
        </>
    )
}

export default ValueChart;