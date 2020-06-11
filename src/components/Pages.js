import React from 'react';

const Pages = ({ currentPage, onNextButtonClick, onPrevButtonClick }) => {
	return (
		<div className="pageNav">
			<button
				disabled={currentPage <= 1}
				className="PrevButton"
				onClick={() => {
					onPrevButtonClick();
				}}
			>
				Previous{' '}
			</button>

			<button
				className="nextButton"
				onClick={() => {
					onNextButtonClick();
				}}
			>
				Next{' '}
			</button>
		</div>
	);
};

export default Pages;
