import React, { useState } from 'react';
import './NavBar.css';
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function NavBar() {
	const [value, setValue] = useState();
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
					<Tabs
						sx={{ marginRight: 'auto' }}
						textColor='white'
						value={value}
						onChange={(e, value) => setValue(value)}
						indicatorColor='secondary'>
						<Tab label='High Rating' />
						<Tab label='컨텐트2' />
						<Tab label='컨텐트3' />
						<Tab label='컨텐트4' />
					</Tabs>
					<AccountCircleIcon />
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default NavBar;
