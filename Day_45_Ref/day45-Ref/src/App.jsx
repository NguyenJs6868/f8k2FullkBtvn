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

import { useState } from "react";
import ModalConfirmDel from "./components/ModalConfirmDel";
import RefPlayHead from "./components/RefPlayHead";
import StatisticsGamesHistory from "./components/StatisticsGamesHistory";
import RangerControler from "./components/Template";
import TestEntryNumber from "./components/TestEntryNumber";

function App() {
	const [confirmDelHistory, setConfirmDelHistory] = useState(false)

	return (
		<>
			<div className="ref">
				<div className="ref-play">
					{/* HEAD */}
					<RefPlayHead />
					{/* Kéo khoảng số */}
					<RangerControler />
					{/* Nhập vào số bất kì */}
					<TestEntryNumber />
					{/* Lịch sử chơi */}
					<StatisticsGamesHistory />
					{ confirmDelHistory && <ModalConfirmDel />}
				</div>
			</div>
		</>
	);
}

export default App;

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
