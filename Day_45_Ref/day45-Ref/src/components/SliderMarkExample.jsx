import {
	Box,
	Slider,
	SliderFilledTrack,
	SliderMark,
	SliderThumb,
	SliderTrack
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from '../core/hook';

function SliderMarkExample() {
	const [sliderValue, setSliderValue] = useState();
const dipatch = useDispatch();
const state = useSelector();

	const labelStyles = {
		mt: '2',
		ml: '-2.5',
		fontSize: 'sm'
	};

	// console.log(sliderValue);



	return (
		<div className="ranger-controler">
			<Box pt={6} pb={2}>
				<Slider
					aria-label="slider-ex-6"
					onChange={val => setSliderValue(val)}

					onChangeEnd={(val) => dipatch({
						type: "range/change",
						payload: val,
					})}

					defaultValue={state.rangeNumber}
					min={2}
					max={2048}
				>
					<SliderMark value={100} {...labelStyles}>
						100
					</SliderMark>
					<SliderMark value={512} {...labelStyles}>
						512
					</SliderMark>
					<SliderMark value={1024} {...labelStyles}>
						1024
					</SliderMark>
					<SliderMark value={1536} {...labelStyles}>
						1536
					</SliderMark>
					<SliderMark value={2048} {...labelStyles}>
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
						{sliderValue}
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
