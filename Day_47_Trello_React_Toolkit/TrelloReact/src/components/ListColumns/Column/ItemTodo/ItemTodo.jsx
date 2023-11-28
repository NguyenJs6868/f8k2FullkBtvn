// import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ItemTodo(item) {
	return (
		<>
			<div className="column">
				<div className="column__head">
					<div>
						<div className="column-head-number-task">
							<span>{0}</span>
						</div>
						<div className="column-head-name-column">
							{item.column_title}
						</div>
					</div>
					<div className="column-head-action">
						<button>
							<DeleteIcon />
						</button>
					</div>
				</div>
				{/*  */}

				<div className="column__body">
					<div className="list-task">
						<div className="task-item">
							<div className="task-item__content">
								<textarea
									rows="4"
									type="text"
									defaultValue={'Content'}
								/>
							</div>
							<div className="task-item__action">
								<button>
									<DeleteIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
				{/*  */}

				<div className="column__footer">
					<button className="colum-footer-action">
						<AddCircleOutlineIcon />
						<span>Add task</span>
					</button>
				</div>
				{/*  */}
			</div>
		</>
	);
}

export default ItemTodo;
