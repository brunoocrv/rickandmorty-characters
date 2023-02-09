import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { ChartProps } from '../../types/chart';

export function Chart({ apparencies, options, type }: ChartProps) {
	return (
		<ReactApexChart
			type={type}
			options={options}
			series={apparencies}
			width="100%"
			height={480}
		/>
	);
}
