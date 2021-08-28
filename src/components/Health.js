import { FieldTimeOutlined, HeartOutlined, ThunderboltOutlined } from '@ant-design/icons';
import React from 'react';
import HealthItem from './HealthItem';

const Health = ({ data }) => {
	const icons = [
		<FieldTimeOutlined style={{ backgroundColor: '#4C95FE', color: 'white' }} className='health-icon' />,
		<HeartOutlined style={{ backgroundColor: '#FA715F', color: 'white' }} className='health-icon' />,
		<ThunderboltOutlined style={{ backgroundColor: '#71CC63', color: 'white' }} className='health-icon' />,
	];
	const colors = ['#4C95FE', '#FA715F', '#71CC63'];
	return (
		<div className='health-section'>
			<h3>Health</h3>
			<div className='health'>
				{data.health.map((h, i) => (
					<HealthItem healthData={h} icon={icons[i]} color={colors[i]} />
				))}
			</div>
		</div>
	);
};

export default Health;
