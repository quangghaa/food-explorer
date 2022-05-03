import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import { getList, getTotal } from '../../services/api';

import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const AccountsChart = () => {

    var dataPoints = [];

    useEffect(() => {
        var chart = new CanvasJS.Chart("accountChartContainer", {
            title: {
                text: "Daily Accounts Chart"
            },
            axisX: {
                // interval: 12,
                // intervalType: "second",
                valueFormatString: "hh:mm tt"
            },
            axisY: {
                title: "Accounts per Hour",
                valueFormatString: "# ### ### ### ###"   // move comma to change formatting
            },
            data: [{
                type: "spline",
                markerType: 'circle',
                dataPoints: dataPoints
            }
            ],

        });


        const fetchData = async () => {
            const when = new Date();
            let data = null;
            console.log("Calling... account")
            const res = await getList('accountsByMinute/24');
            if (res && res.data != null) {
                res.data.map((d) => {
                    dataPoints.push({
                        x: new Date(d.datetime),
                        y: d.count
                    })
                })

            } 
            chart.render();
        }

        fetchData();    

        var updateChart = () => {
            dataPoints = []
            fetchData();
        };

        setInterval(() => { updateChart() }, 60*60*1000);

    }, [])
    // update chart every second

    return (
        <>
            <div id="accountChartContainer" style={{ height: "300px" }}/>  
        </>
    )
}

export default AccountsChart;