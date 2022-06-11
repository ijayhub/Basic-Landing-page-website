import React from 'react'
import {useNavigate } from 'react-router-dom'


const SignUp = () => {
    const navigate = useNavigate()
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
	const [passwordConfirm, setPasswordConfirm] = React.useState('');
	
	
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(' SignUp successfully created ')
        navigate('/');
    }
    
    return (
			<>
				<div className='sign-up__body'>
					<div className='form-sign-up'>
						<h1 className='sign-up__title'>Welcome Create Account</h1>
						<form onSubmit={handleSubmit}>
							<div>
								<input
									type='email'
									name='userEmail'
									id='email'
									placeholder='Enter your email address'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div>
								<input
									type='password'
									name='UserPassword'
									id='password'
									placeholder='Enter your password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div>
								<input
									type='password'
									name='UserPassword'
									id='password'
									placeholder='confirm your password'
									value={passwordConfirm}
									onChange={(e) => setPasswordConfirm(e.target.value)}
								/>
							</div>
							<div className='btn'>
								<button type='submit' className='sign-up__btn'>
									Sign up
								</button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
}

export default SignUp
