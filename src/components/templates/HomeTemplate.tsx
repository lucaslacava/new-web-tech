import React from 'react'
import './style.scss'
import Lottie from 'react-lottie'
import animationData from '../../lotties/kombosa.json'

const HomeTemplate = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<div className='flex flex-col justify-center items-center select-none min-h-screen bg-gradient-to-br from-gray-500  to-indigo-700'>
			<h1 className='text-6xl text-indigo-50  pb-4'>bora!</h1>
			<Lottie isClickToPauseDisabled={true} options={defaultOptions} height={400} width={400} />
		</div>
	)
}

export default HomeTemplate
