import React from 'react';

import {
	DndContext,
	// PointerSensor,
	useSensor,
	useSensors,
	MouseSensor,
	TouchSensor,
	DragOverlay,
	defaultDropAnimationSideEffects,
	closestCorners,
	pointerWithin,
	getFirstCollision
} from '@dnd-kit/core';

function Kanban() {
	//Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: { distance: 10 }
	});

	//Nhấn giữ 250ms và dung sai của cảm ứng(500px) thì mới kích hoạt event
	const touchSensor = useSensor(TouchSensor, {
		activationConstraint: { delay: 250, tolerance: 500 }
	});
	const sensors = useSensors(mouseSensor, touchSensor);

	const handleDragStart = event => {
		console.log('handleDragStart', event);
	};
	const handleDragOver = event => {
		console.log('handleDragOver', event);
	};
	const handleDragEnd = event => {
		console.log('handleDragEnd', event);
	};

	return (

		  /**
   * Animation khi thả (Drop) phần tử
   */
			const dropAnimation = {
				sideEffects: defaultDropAnimationSideEffects({
					styles: {
						active: {
							opacity: '0.5',
						},
					},
				}),
			}
		<div>
			<DndContext
				onDragStart={handleDragStart}
				onDragOver={handleDragOver}
				onDragEnd={handleDragEnd}
				sensors={sensors}
				//Thuật toán phát hiện va chạm (nếu không có nó thì card với cover lớn sẽ không kéo qua Column được vì lúc này nó sẽ bị conflict giữa card và column).

				//Nếu chỉ dùng closestCorners sẽ có bug flickering + sai lệch dữ liệu
				// collisionDetection={closestCorners}

				//Custom thuật toán phát hiện va chạm
			>
				<DragOverlay dropAnimation={dropAnimation}>
					{!activeDragItemType && null}
					{activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
						<Column column={activeDragItemData} />
					)}
					{activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
						<Card card={activeDragItemData} />
					)}
				</DragOverlay>
			</DndContext>
		</div>
	);
}

export default Kanban;
