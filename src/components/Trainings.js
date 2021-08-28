import React from 'react';
import TrainingItem from './TrainingItem';

const Trainings = ({ data }) => {
	return (
		<div className='training-container'>
			<h3>Today's Trainings</h3>

			<div className='training-section'>
				{data.todayTrainings.map((t, i) => (
					<TrainingItem trainingData={t} color={i === 0 ? 'blue' : 'red'} />
				))}
			</div>
		</div>
	);
};

export default Trainings;
