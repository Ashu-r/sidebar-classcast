const HealthItem = ({ healthData, icon, color }) => {
	return (
		<a href='#'>
			<div className='health-item shadow'>
				<div className='health-value'>{healthData.value}</div>
				<div className='health-text'>
					{icon}
					{healthData.name}
				</div>
				<div className='progress-cont'>
					<div style={{ backgroundColor: color }} className='progress'></div>
				</div>
			</div>
		</a>
	);
};

export default HealthItem;
