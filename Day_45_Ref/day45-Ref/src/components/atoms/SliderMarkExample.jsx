import {
	Box,
	Slider,
	SliderFilledTrack,
	SliderMark,
	SliderThumb,
	SliderTrack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function SliderMarkExample() {
	const [sliderValue, setSliderValue] = useState(100);
	const [converNumber, setConverNumber] = useState(0);

	function setRangeNumber() {
		if (sliderValue) {
			const valueNumber = Math.ceil(2048 * (sliderValue / 100));
			setConverNumber(Number(valueNumber));
			console.log('sliderValue: ', sliderValue);
		}
	}

	useEffect(() => {
		setRangeNumber();
	}, [sliderValue]);

	const labelStyles = {
		mt: '2',
		ml: '-2.5',
		fontSize: 'sm'
	};

	return (
		<div className="ranger-controler">
			<Box pt={6} pb={2}>
				<Slider
					aria-label="slider-ex-6"
					onChange={val => setSliderValue(val)}
				>
					<SliderMark value={20} {...labelStyles}>
						100
					</SliderMark>
					<SliderMark value={40} {...labelStyles}>
						512
					</SliderMark>
					<SliderMark value={60} {...labelStyles}>
						1024
					</SliderMark>
					<SliderMark value={80} {...labelStyles}>
						1536
					</SliderMark>
					<SliderMark value={100} {...labelStyles}>
						2048
					</SliderMark>

					<SliderMark
						value={sliderValue}
						textAlign="center"
						bg="blue.500"
						color="white"
						mt="-10"
						ml="-5"
						w="12"
					>
						{converNumber}
					</SliderMark>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</Box>
		</div>
	);
}

export default SliderMarkExample;
