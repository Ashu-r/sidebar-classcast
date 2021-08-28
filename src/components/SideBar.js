import React from 'react';
import '../styles/sidebar.css';
import Trainers from './ Trainers';
import Health from './Health';
import Trainings from './Trainings';
import Upgrade from './Upgrade';
import User from './User';

const SideBar = ({ className, data }) => {
	return (
		<div className={className}>
			<User data={data} />
			<Upgrade />
			<Health data={data} />
			<Trainings data={data} />
			<Trainers data={data} />
		</div>
	);
};
export default SideBar;
