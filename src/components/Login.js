import React from 'react'




const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The email you entered was: ${email}`)
        
    }
    return (
			<div>
				<div className='sign-up__body'>
					
					<div className='form-sign-up'>
                    <h1 className='sign-up__title'>Welcome Login </h1>
                        <form onSubmit={handleSubmit}>
							<div>
								<input
									type='email'
									name='email'
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Enter your email address'
									required
								/>
							</div>
							<div>
								<input
									type='password'
									name='password'
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Enter your password'
									required
								/>
							</div>
							<div className='btn'>
								<button type='submit' className='sign-up__btn'>
									Login
								</button>
							</div>
							<p className='span'>
								Don't have an account?
								<a href='SignUp' className='underline text-red-700'>
									{' '}
									Sign up
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
}

export default Login
