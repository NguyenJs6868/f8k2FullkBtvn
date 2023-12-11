// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
 
	return (
		<div className="d-flex">
			{/* {theme === 'dark' ? (
				<button onClick={() => changeTheme('light')} className="pr-4">
					<i className="fa-regular fa-moon"></i>
				</button>
			) : (
				<button onClick={() => changeTheme('dark')}>
					<i className="fa-regular fa-sun"></i>
				</button>
			)} */}
			{/* { <button onClick={() => changeTheme('light')}>Light Mode</button>}
			{ <button onClick={() => changeTheme('dark')}>Dark Mode</button>} */}

			{/* <button onClick={() => setTheme('light')}>
				<i className="fa-regular fa-moon"></i>
			</button>
			<button onClick={() => setTheme('dark')}>
				<i className="fa-regular fa-sun"></i>
			</button> */}

			{theme === 'dark' ? (
				<button onClick={() => setTheme('light')}>
					<i className="fa-regular fa-sun"></i>
				</button>
			) : (
				<button onClick={() => setTheme('dark')}>
					<i className="fa-regular fa-moon"></i>
				</button>
			)}
		</div>
	);
}
