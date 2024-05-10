import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Register from './components/Register/index.jsx';
import Login from './components/Login/index.jsx';
import SecuredPage from './components/SecuredPage/index.jsx';
import AlertBox from './components/AlertBox/index.jsx';
import { useState } from 'react';

const App = () => {
	const [username, setUsername] = useState("")
	const [alert, setAlert] = useState(false)

	const showAlert = (type, message) => {
		setAlert({
			type: type,
			message: message
		})

		setTimeout(()=> {
			setAlert(false)
		}, 5000)
	}

	const closeAlert = () => {
		setAlert(false)
	}

	return (
		<>
		<Router>
			<AlertBox alert={alert} closeAlert={closeAlert}/>
			<Routes>
				<Route exact path="/" element={<Register showAlert={showAlert} setUsername={setUsername}/>}/>
				<Route exact path="/register" element={<Register showAlert={showAlert} setUsername={setUsername}/>}/>
				<Route exact path="/login" element={<Login setUsername={setUsername} showAlert={showAlert}/>}/>
				<Route exact path="/secured" element={<SecuredPage username={username} showAlert={showAlert}/>}/>
			</Routes>
		</Router>
		</>
	);
}

export default App;