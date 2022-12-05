import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';
function Movie({ id, medium_cover_image, title, summary, genres }) {
	return (
		<div>
			<div className='이미지와타이틀'>
				<img
					src={medium_cover_image}
					alt='MoviePicture'
				/>
				<h2>
					<Link to={`/movie/${id}`}>{title}</Link>
				</h2>
			</div>
			<p>{summary}</p>
			<ul>
				{genres.map(g => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	medium_cover_image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
