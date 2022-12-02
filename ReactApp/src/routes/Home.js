import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import './Home.css';
function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json`)).json();
		// const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	console.log(movies);
	return (
		<div>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<div class='홈'>
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
			)}
		</div>
	);
}
export default Home;
