/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import TrainerItem from './TrainerItem';

const Trainers = ({ data }) => {
	return (
		<div className='training-container'>
			<h3>Your trainers</h3>
			<div className='training-section'>
				{data.trainers.map((t) => (
					<TrainerItem data={t} />
				))}
			</div>
		</div>
	);
};

export default Trainers;
