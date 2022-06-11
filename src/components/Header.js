import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
			<div>
				<div className='showcase'>
					<nav className='nav '>
						<h1 className='header'>Home</h1>
						<div>
							<Link to='Login'>
								<span className='header'>Login</span>
							</Link>
							<Link to='SignUp'>
								<span className='header'>Sign up</span>
							</Link>
						</div>
					</nav>
					<div className='travel'>
						<h1 className='travel-heading'>Travel Agency Website</h1>
						<p>
							lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
						</p>
					</div>
				</div>
			</div>
		);
}

export default Header
