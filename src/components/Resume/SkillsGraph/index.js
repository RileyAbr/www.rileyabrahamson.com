import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

import scssVariables from '../../../scss/_variables.scss';

const data = [
    {
        name: 'HTML', Years: 3,
    },
    {
        name: 'CSS', Years: 3,
    },
    {
        name: 'JS', Years: 2,
    },
    {
        name: 'Python', Years: 2,
    },

];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <BarChart
                layout="vertical"
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 20,
                }}
            >
                <CartesianGrid horizontal={false} strokeDasharray="5 5" />
                <XAxis allowDecimals={false}
                    type="number"
                    stroke={scssVariables.cborderprimary}
                    label={{ value: 'Years of Experience', position: 'bottom', offset: 0 }} />
                <YAxis type="category" dataKey="name" stroke={scssVariables.cborderprimary} />
                <Tooltip />
                <Bar dataKey="Years"
                    stroke={scssVariables.cborderpurple}
                    strokeWidth={2}
                    fill={scssVariables.cbackgroundpurple}
                    fillOpacity={1} />
            </BarChart>
        );
    }
}
