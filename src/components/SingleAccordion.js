import React from 'react'
import plus from '../img/plus (2).svg'
import minus from '../img/minus.svg'

const SingleAccordion = ({ accordions,title }) => {
    const [showAnswer, setShowAnswer]=React.useState(false)

    return (
			<>
				<h2 className='my-5 text-center text-bold text-3xl text-green-800 tracking-widest'>
					{title}
                </h2>
                {accordions.map((accordion) => (
					<div key={accordion.id}>
						<div className='flex items-center justify-between border p-8 mb-5'>
							<h3
								onClick={() => setShowAnswer(!showAnswer)}
								className='cursor-pointer font-bold md:text-xl'>
								{accordion.question}
							</h3>
							{showAnswer ? (
								<img src={minus} alt={minus} />
							) : (
								<img
									src={plus}
									alt={plus}
									onClick={() => setShowAnswer(!showAnswer)}
								/>
							)}
                        </div>
                        {showAnswer && (<p className='px-5 my-3 font-mono'>{accordion.answer}</p>
						)}
					</div>
				))}
			</>
		);
}

export default SingleAccordion
