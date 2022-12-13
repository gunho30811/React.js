import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Card from './components/Card';
function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/movie/:id'
					element={<Detail />}
				/>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/hello'
					element={<Card />}
				/>
			</Routes>
		</Router>
	);
}
export default App;
//App.js는 이제 라우터를 통해 component들을  rendering해서 보여줄 것이다.
