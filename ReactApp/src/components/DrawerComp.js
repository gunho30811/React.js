import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ['컨테이너1', '컨테이너2', '컨테이너3', '컨테이너4', '컨테이너5'];

const DrawerComp = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<React.Fragment>
			<Drawer
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}>
				<List>
					{PAGES.map((page, idx) => (
						<ListItemButton key={idx}>
							<ListItemIcon>
								<ListItemText>{page}</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<IconButton
				sx={{ color: 'white' }}
				onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</React.Fragment>
	);
};

export default DrawerComp;
