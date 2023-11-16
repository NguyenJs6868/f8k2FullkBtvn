// import React from 'react'

function ModalConfirmDel() {
	return (
		<div className="modal-confirm-del-history">
			<div className="modal-confirm-del-history__head">
				Xoá tất cả lịch sử chơi?
			</div>
			<div className="modal-confirm-del-history__content">
				Bạn chắc chắn chứ? Bạn sẽ không thể giữ lại lịch sử trong quá
				khứ sau khi bấm xoá.
			</div>
			<div className="modal-confirm-del-history__control">
				<button id="btn-save">Giữ lại</button>
				<button id="btn-del">Xóa luôn</button>
			</div>
		</div>
	);
}
export default ModalConfirmDel;
