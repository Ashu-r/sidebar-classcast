import { MessageTwoTone } from '@ant-design/icons';
import React from 'react';
import trainer1 from '../images/trainer1.jpg';

const TrainerItem = ({ data }) => {
	console.log(data);
	return (
		<a href='#'>
			<div className='trainer-item shadow'>
				<div className='t-img'>
					<img className='t-profile' alt='trainer' src={trainer1}></img>
				</div>
				<div>
					<div className='font-sm '>
						<h5>{data.name}</h5>
					</div>
					<div className='font-vsm '>
						<h5>{data.profession}</h5>
					</div>
				</div>
				<div>
					<MessageTwoTone />
				</div>
			</div>
		</a>
	);
};
export default TrainerItem;
