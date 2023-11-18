// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import theme from "./theme/theme.js";
import './index.scss';

// import { ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<ChakraProvider theme={theme}>
		<ColorModeProvider options={{ useSystemColorMode: true }}>
			<CSSReset />
			{/* 👇 Here's the script */}
			{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
			<App />
		</ColorModeProvider>
	</ChakraProvider>
	// </React.StrictMode>
);
