import trainer from '../images/trainer.jpg';

const Upgrade = () => {
	return (
		<div className='upgrade'>
			<div className='up-icon'>
				<img className='trainer-img' alt='upgrade to trainer' src={trainer} />
			</div>
			<div className='up-msg'>
				<div className='up-text font-sm'>Sign up for a personal trainer to improve your results</div>
				<div className='button font-sm'>Sign up</div>
			</div>
		</div>
	);
};

export default Upgrade;
