import { FC } from 'react'

import Header from '@/components/ui/header/Header'

import Chart from './map/Chart'
import Rubbish from './rubbish/Rubbish'

const Home: FC = () => {
	return (
		<div>
			<Header />
			<div className='relative'>
				<Chart />
				<Rubbish />
			</div>
		</div>
	)
}

export default Home
