import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg';

const Display = () => {
    return (
			<section>
				<h3 className='title my-5 text-center text-bold text-3xl text-green-800'>
					Available in most countries
				</h3>
				<div className='display'>
					<div className='bg-color'>
						<img src={img1} alt='img1' className='img' />
						<h4 className='heading-title text-green-800'>Experience a Comfortable flying</h4>
						<p className='box-text text-slate-900'>
							Synergistically supply accurate ideas through revolutionary
							applications.
						</p>
					</div>
					<div className='bg-color'>
						<img src={img2} alt='img2' className='img' />
						<h4 className='heading-title text-green-800'>Experience a Comfortable flying</h4>
						<p className='box-text text-slate-900'>
							Synergistically supply accurate ideas through revolutionary
							applications.
						</p>
					</div>
					<div className='bg-color'>
						<img src={img3} alt='img3' className='img' />
						<h4 className='heading-title text-green-800'>Experience a Comfortable flying</h4>
						<p className='box-text text-slate-900'>
							Synergistically supply accurate ideas through revolutionary
							applications.
						</p>
					</div>
				</div>
			</section>
		);
}

export default Display
