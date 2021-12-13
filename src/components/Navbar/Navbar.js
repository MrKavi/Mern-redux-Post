import React from 'react';
import CreateForm from '../../CreateForm';
import memories1 from '../../images//memories1.jpg';
import Form from '../Form/Form';

//import useStyles from '../../styles';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
      Memories
		</NavLink>
    <img src={memories1} alt="icon" height="40"  />
		{/* <NavLink to='/events' activeStyle>
			Home
		</NavLink>
		<NavLink to='/annual' activeStyle>
			About
		</NavLink> */}
	
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/form' >Create Memory</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
