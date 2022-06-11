import React from 'react'
import linkedin from '../img/linkedin (1).svg'
import Twitter from '../img/twitter (2).svg'
import Instagram from '../img/instagram (2).svg'
const Footer = () => {
	const LinkedIn = 'https://www.linkedin.com/in/ijeoma-igboagu/'
	const twitter = 'https://twitter.com/ijaydimples';
	const instagram = 'https://www.instagram.com/ij.ijay/';
	const portfolio = 'https://portfolio-ijay.netlify.app/';

	
    return (
			<>
				<section className='footer-container'>
					<footer>
						<div className='social-box'>
							<div className='social-links'>
								<a href={LinkedIn} target='_blank' rel='noreferrer'>
									<img src={linkedin} alt='linkedin' />
								</a>
							</div>
							<div className='social-links'>
								<a href={twitter} target='_blank' rel='noreferrer'>
									<img src={Twitter} alt='twitter' />
								</a>
							</div>
							<div className='social-links'>
								<a href={instagram} target='_blank' rel='noreferrer'>
									<img src={Instagram} alt='instagram' />
								</a>
							</div>
						</div>
						<hr />
						<div className='footer-para'>
							<p>
								coded by{' '}
								<a href={portfolio} target='_blank' rel='noreferrer' className='underline'>
									Ijay{' '}
								</a>{' '}
								♥ &copy; 2022
							</p>
						</div>
					</footer>
				</section>
			</>
		);
}

export default Footer
