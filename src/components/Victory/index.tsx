import React, { FC } from 'react';

export const Victory: FC<{ victory: number }> = ({ victory }) => (
	<>
		{victory > 0 && (
			<div className='quote-letters-count'>
				Побед{victory === 1 ? 'а' : 'ы'}:
				<span className='badge'>{victory}🏅</span>
			</div>
		)}
	</>
);
