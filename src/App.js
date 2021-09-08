import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';
import FocusLock from 'react-focus-lock';

function App() {
	const [open, setOpen] = useState(false);
	const node = useRef();
	const menuId = 'main-menu';
	useOnClickOutside(node, () => setOpen(false));
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div ref={node}>
					<FocusLock disabled={!open}>
						<Burger open={open} setOpen={setOpen} aria-controls={menuId} />
						<Menu open={open} setOpen={setOpen} id={menuId} />
					</FocusLock>
				</div>
				<div>
					<h1>Hello. This is burger menu tutorial</h1>
					<img
						src='https://image.flaticon.com/icons/svg/2016/2016012.svg'
						alt='burger icon'
					/>
					<small>Icon made by Freepik from www.flaticon.com</small>
				</div>
			</>
		</ThemeProvider>
	);
}
export default App;
