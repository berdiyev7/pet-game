import React, { FC } from 'react';

export const LettersCount: FC<{ quoteLetters: string }> = ({
	quoteLetters,
}) => (
	<div className='quote-letters-count'>
		Букв и знаков осталось:
		<span className='badge'>{quoteLetters?.length}</span>
	</div>
);
