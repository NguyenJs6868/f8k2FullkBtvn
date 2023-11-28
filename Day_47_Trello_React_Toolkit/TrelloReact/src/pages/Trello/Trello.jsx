// import React from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Fragment } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddColumm from '../../components/AddColumn/AddColumn';
// import { useSelector } from 'react-redux';

function Trello() {
	const arrColumns = [
		{
			id: 1,
			column_title: 'Todo',
			todos: [
				{
					id: 1,
					todo_content: 'Todo 1',
					status_edit: true
				},
				{
					id: 2,
					todo_content: 'Todo 2',
					status_edit: false
				}
			]
		},
		{
			id: 2,
			column_title: 'Doing',
			todos: [
				{
					id: 3,
					todo_content: 'Todo 3',
					status_edit: true
				},
				{
					id: 4,
					todo_content: 'Todo 4',
					status_edit: false
				}
			]
		},
		{
			id: 3,
			column_title: 'Done',
			todos: [
				{
					id: 5,
					todo_content: 'Todo 5',
					status_edit: true
				},
				{
					id: 6,
					todo_content: 'Todo 6',
					status_edit: false
				}
			]
		},
		{
			id: 4,
			column_title: 'Save',
			todos: []
		}
	];

	const [columns] = useState(arrColumns);

	return (
		<>
			<div className="trello-container">
				<div className="trello-wrap">
					<div className="trello-drag-drop">
						<div className="columns">
							{/*  */}
							{columns &&
								columns.map(item => {
									return (
										<Fragment key={item.id}>
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
																	defaultValue={
																		'Content'
																	}
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
										</Fragment>
									);
								})}
							<AddColumm />
							{/*  */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Trello;

{
	/* <DragDropContext>
<Droppable>
	Nội dung của danh sách kéo thả
	<Draggable />
</Droppable>
</DragDropContext> */
}
