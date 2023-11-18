// import React from 'react'

import { useColorMode } from '@chakra-ui/react';
import Light from './atoms/light';
import Dark from './atoms/Dark';
// import { Button } from 'bootstrap';

function BtnChangeTheme() {
	const { colorMode, toggleColorMode } = useColorMode();
	console.log('colorMode', colorMode);
	return (
		<div className='btn btn-change-theme' onClick={toggleColorMode}>
			{colorMode === 'light' ? <Dark /> : <Light/>}
		</div>
	);
}
export default BtnChangeTheme;
