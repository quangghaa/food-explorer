import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import { getTotal } from '../../services/api';

import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TestChart = () => {

    var dataPoints = [];

    const [reset, setReset] = useState(0);
    console.log("Check render")
    
    var current = new Date();
    var stop = new Date(current.getTime() + 15*1000);

    useEffect(() => {
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Daily Transactions Chart"
            },
            axisX: {
                interval: 10,
                intervalType: "second",
                valueFormatString: "hh:mm tt"
            },
            axisY: {
                title: "Transactions per Day",
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

            const fetchData = async () => {
                const when = new Date();

                console.log("When and Stop: ", when, stop);
                

                if(when > stop) {
                    clearInterval(id);
                    setReset(reset => reset+1);
                    console.log("STop", reset);
                }

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
        };

        var id = setInterval(() => { updateChart() }, 2000);

    }, [reset])
    // update chart every second

    return (
        <>
            <HomeHeader />
            <div >
                <div id="chartContainer" style={{ height: "300px" }}/>
            </div>
            <Footer />
        </>
    )
}

export default TestChart;