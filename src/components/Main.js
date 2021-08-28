import React from 'react';
import '../styles/main.css';
import SideBar from './SideBar';

// Imitating as if data is received from the server as json
const userData = {
	name: 'Floyd Miles',
	accountTier: 'Free account',
	health: [
		{ name: 'hours', value: '6.25' },
		{ name: 'bpm', value: '120' },
		{ name: 'kcal', value: '1.84' },
	],
	todayTrainings: [
		{
			name: 'Box',
			type: 'Sport Club',
			time: '10:00',
			trainings: [
				{ name: 'Warm-up', time: '40' },
				{
					name: 'Stretch',
					time: '20',
				},
			],
		},
		{
			name: 'Crossfit',
			type: 'Sport Club',
			time: '12:00',
			trainings: [
				{ name: 'Warm-up', time: '20' },
				{
					name: 'Pull ups',
					time: '20',
				},
			],
		},
	],
	trainers: [
		{ name: 'John Kavanagh', profession: 'MMA coach' },
		{ name: 'Jacob Jones', profession: 'Boxing Coach' },
	],
};

const Main = () => {
	return (
		<div className='main'>
			<div className='left-section'></div>
			<SideBar data={userData} className='sidebar' />
		</div>
	);
};
export default Main;
