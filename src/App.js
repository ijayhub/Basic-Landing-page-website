
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';


const App = () => {
  return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='Login' element={<Login/>}></Route>
				<Route path='SignUp' element={<SignUp />}></Route>
			</Routes>
		</div>
	);
}

export default App