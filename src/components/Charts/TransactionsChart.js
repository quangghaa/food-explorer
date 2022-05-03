import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import { getList, getTotal } from '../../services/api';

import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TransactionsChart = () => {

    var dataPoints = [];

    useEffect(() => {
        var chart = new CanvasJS.Chart("transactionChartContainer", {
            title: {
                text: "Daily Transactions Chart"
            },
            axisX: {
                // interval: 12,
                // intervalType: "second",
                valueFormatString: "hh:mm tt"
            },
            axisY: {
                title: "Transactions per Minute",
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
            console.log("Calling... transaction")
            const res = await getList('transactionsByMinute?date=today');
            if (res && res.data != null) {
                res.data.map((d) => {
                    dataPoints.push({
                        x: new Date(d.process_time),
                        y: d.count
                    })
                })
                
                
            }
            chart.render();
            
        }

        fetchData();

        var updateChart = () => {
            dataPoints = []
            fetchData()
        };

        setInterval(() => { updateChart() }, 60 * 1000);

    }, [])
    // update chart every second

    return (
        <>
            <div id="transactionChartContainer" style={{ height: "300px" }}/>  
        </>
    )
}

export default TransactionsChart;