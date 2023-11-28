// import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './AddColumn.scss';

function AddColumn() {
	return (
		<>
			<div className="add-column">
				<button>
					<span>
						<AddCircleOutlineIcon />
					</span>
					<span>Add Column</span>
				</button>
			</div>
		</>
	);
}

export default AddColumn;
