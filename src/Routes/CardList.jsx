import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CardList() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:8000/api/v1/cards', {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data.cards);
				setIsLoading(false);
			});
	}, []);

	function Cards() {
		if (isLoading == false && data.length > 0) {
			return (
				<>
					<Grid templateColumns='repeat(5, 1fr)' gap={6}>
						{data.map((card) => (
							<Link to={card.name_short} key={card.name_short}>
								<GridItem>
									<img src={card.image} />
								</GridItem>
							</Link>
						))}
					</Grid>
				</>
			);
		} else {
			return <h1>Sorry No Data</h1>;
		}
	}
	return (
		<>
			<Cards />
		</>
	);
}

export default CardList;
