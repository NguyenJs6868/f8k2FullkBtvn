// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div>
			{/* The current theme is: {theme} */}
			<button onClick={() => setTheme('light')}>Light</button>
			<button onClick={() => setTheme('dark')}>Dark</button>
		</div>
	);
}

export default ThemeSwitcher;