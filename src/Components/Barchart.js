import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

//there is an error in console because the component is being initialised before the data is recieved from the server
//causing errors

const BarChart = (props) => {

    const data = [
        { distance: 1, earnings: props?.data?.population_5km },
        { distance: 2, earnings: props?.data?.population_10km },
        { distance: 3, earnings: props?.data?.population_30km },
        { distance: 4, earnings: props?.data?.population_100km },
    ];

    return (
        <div>
            <VictoryChart domainPadding={20}>
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["5km", "10km", "30km", "100km"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x / 1000}k`)}
                />
                <VictoryBar
                    data={data}
                    // data accessor for x values
                    x="distance"
                    // data accessor for y values
                    y="earnings"
                />
            </VictoryChart>
        </div>
    );
};

export default BarChart;
