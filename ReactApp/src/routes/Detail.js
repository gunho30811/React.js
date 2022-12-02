import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
	const { id } = useParams();
	console.log({ id });
	const getMovide = useCallback(async () => {
		const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
		console.log(json);
	}, [id]);
	useEffect(() => {
		getMovide();
	}, [getMovide]);
	return <h1>Detail</h1>;
}
export default Detail;
