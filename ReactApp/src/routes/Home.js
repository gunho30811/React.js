import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import './Home.css';
import NavBar from '../components/NavBar';
import { Grid } from '@mui/material';
function Home() {
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
		// const json = await response.json();
		setMovies(json.data.movies);
	};
	useEffect(() => {
		getMovies();
	}, []);
	console.log(movies);
	return (
		<div>
			<NavBar />
			<div className='홈'>
				{movies.map(mov => (
					<Movie
						key={mov.id}
						id={mov.id}
						medium_cover_image={mov.medium_cover_image}
						title={mov.title}
						summary={mov.summary}
						genres={mov.genres}
					/>
				))}
			</div>
		</div>
	);
}
export default Home;
