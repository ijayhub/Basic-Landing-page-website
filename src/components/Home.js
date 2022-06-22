import React from 'react'
import { data } from '../data'
import SingleAccordion from './SingleAccordion'

import Display from './Display'
import Footer from './Footer'
import Header from './Header'
import Text from './Text'



const Home = () => {
	const[accordions, setAccordions ]=React.useState(data)
  return (
		<>
			<Header />
			<Display />
			<Text />
			<section className='container mx-auto'>
				<SingleAccordion accordions={accordions} title='FAQ' />
			</section>

			<Footer />
		</>
	);
}

export default Home
