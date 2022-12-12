import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

function Movie({ id, medium_cover_image, title, summary, genres }) {
	return (
		<div className='무비'>
			<Grid
				container
				spacing={2}
				sx={{}}>
				<Grid
					item
					xs={12}>
					<Card sx={{}}>
						<CardActionArea>
							<CardMedia
								component='img'
								height=''
								image={medium_cover_image}
								alt='MoviePicture'
							/>
							<CardContent>
								<Link to={`/mvoie/${id}`}>
									<Typography
										gutterBottom
										variant='h5'
										component='div'>
										{title}
									</Typography>
								</Link>
								<Typography
									variant='body2'
									color='text.secondary'
									sx={{ maxHeight: 100 }}>
									{genres.map(g => (
										<li key={g}>{g}</li>
									))}
									{summary}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
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
