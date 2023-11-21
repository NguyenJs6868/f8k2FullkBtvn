// import { useState } from 'react';
// import {
// 	Table,
// 	Thead,
// 	Tbody,
// 	Tfoot,
// 	Tr,
// 	Th,
// 	Td,
// 	TableCaption,
// 	TableContainer
// } from '@chakra-ui/react';

import { useState } from 'react';
import ModalConfirmDel from './components/ModalConfirmDel';
import RefPlayHead from './components/RefPlayHead';
import StatisticsGamesHistory from './components/StatisticsGamesHistory';
import RangerControler from './components/Template';
import TestEntryNumber from './components/TestEntryNumber';
import SliderMarkExample from './components/SliderMarkExample';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from './core/hook';
import { useSelector } from './core/hook';

console.log('useSelector', useSelector);

function App() {
	const [confirmDelHistory] = useState(false); // setConfirmDelHistory
	// const notify = () => toast('Wow so easy!');



	return (
		<>
			{/* <button onClick={notify}>Notify!</button> */}
			{/* <ToastContainer /> */}
			<div className="ref">
				<div className="ref-play">
					{/* HEAD */}
					<RefPlayHead />
					{/* Kéo khoảng số */}
					<RangerControler />
					<SliderMarkExample />
					{/* Nhập vào số bất kì */}
					<TestEntryNumber />
					{/* Lịch sử chơi */}
					<StatisticsGamesHistory />
					{confirmDelHistory && <ModalConfirmDel />}
				</div>
			</div>
		</>
	);
}

export default App;

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
