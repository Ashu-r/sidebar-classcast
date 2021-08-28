import React from 'react';
import { NotificationTwoTone, SettingTwoTone } from '@ant-design/icons';
import profile from '../images/profile.png';

const User = ({ data }) => {
	return (
		<div className='user shadow'>
			<div className='profile-box'>
				<img className='profile' alt='profile' src={profile} />
			</div>
			<div className='nameBox'>
				<div>
					<div>{data.name}</div>
					<div>{data.accountTier}</div>
				</div>
			</div>
			<a href='#'>
				<div className='notification'>
					<NotificationTwoTone className='icon-top' />
				</div>
			</a>
			<a href='#'>
				<div className='settings'>
					<SettingTwoTone style={{ fontSize: '1.5rem' }} />
				</div>
			</a>
		</div>
	);
};

export default User;
