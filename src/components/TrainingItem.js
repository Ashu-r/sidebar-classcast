import { EllipsisOutlined } from '@ant-design/icons';
import React from 'react';

const TrainingItem = ({ trainingData, color }) => {
	const gradient = color === 'blue' ? 'blue-gradient' : 'red-gradient';
	return (
		<a href='#'>
			<div className={`training-item shadow ${gradient}`}>
				<div className=''>
					<div className='font-sm'>{trainingData.name}</div>
					<div className='font-vsm'>{trainingData.type}</div>
					<div className='t-main-time '>{trainingData.time}</div>
				</div>
				<div className=''>
					<div className='big-time'>{trainingData.trainings[0].time}</div>
					<div className='font-vsm'>min</div>
					<div className='font-sm'>{trainingData.trainings[0].name}</div>
				</div>
				<div className=''>
					<div className='big-time'>{trainingData.trainings[1].time}</div>
					<div className='font-vsm'>min</div>
					<div className='font-sm'>{trainingData.trainings[1].name}</div>
				</div>
				<div className=''>
					<EllipsisOutlined />
				</div>
			</div>
		</a>
	);
};

export default TrainingItem;
