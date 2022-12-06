import React, { useState } from 'react';
import './NavBar.css';
import { AppBar, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DrawerComp from './DrawerComp';
const PAGES = ['컨테이너1', '컨테이너2', '컨테이너3', '컨테이너4'];

function NavBar() {
	const [value, setValue] = useState();
	const theme = useTheme();
	console.log(theme);
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));
	console.log(isMatch);
	return (
		<React.Fragment>
			<AppBar sx={{ background: '#845EC2' }}>
				<Toolbar>
					<Tabs
						sx={{ marginRight: 'auto' }}
						textColor='inherit'>
						<Tab
							label='NetFlex'
							sx={{ fontSize: '25px' }}
						/>
					</Tabs>
					{isMatch ? (
						<>
							<DrawerComp />
						</>
					) : (
						<>
							<Tabs
								sx={{ marginRight: 'auto' }}
								textColor='white'
								value={value}
								onChange={(e, value) => setValue(value)}
								indicatorColor='secondary'>
								{PAGES.map((page, idx) => (
									<Tab
										key={idx}
										label={page}
									/>
								))}
							</Tabs>
							<AccountCircleIcon />
						</>
					)}
				</Toolbar>
				{/* <DrawerComp /> */}
			</AppBar>
		</React.Fragment>
	);
}

export default NavBar;
