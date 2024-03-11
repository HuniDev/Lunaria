import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SimpleGrid, Box, Image, Text } from '@chakra-ui/react';

function Card() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	let { cardName } = useParams();

	useEffect(() => {
		fetch(`http://localhost:8000/api/v1/cards/${cardName}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data.card);
				setIsLoading(false);
			});
	}, [cardName]);

	function Info() {
		if (isLoading == false) {
			return (
				<SimpleGrid columns={2} spacing={1}>
					<Box align='start' height='70%'>
						<Text fontSize='xl'>{data.name}</Text>
						<Box pt='20px' w='70%'>
							<Image src={data.image} />
						</Box>
					</Box>

					<Box height='80%'>
						<Text fontSize='xl' pt='20px'>
							Meaning Upright
						</Text>
						<Text>{data.meaning_up}</Text>
						<Text fontSize='xl' pt='40px'>
							Meaning Reversed
						</Text>
						<Text>{data.meaning_rev}</Text>
						<Text mt='35px' mb='20px' fontSize='xl'>
							Description
						</Text>
						<Box align='left' w='500px' height='400px' overflow='scroll'>
							<Text>{data.desc}</Text>
						</Box>
					</Box>
				</SimpleGrid>
			);
		} else {
			return <h1>Sorry No Data</h1>;
		}
	}

	return (
		<>
			<Info />
		</>
	);
}

export default Card;
