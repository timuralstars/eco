import { FC } from 'react'

import Header from '@/components/ui/header/Header'

import Chart from './chart/Chart'
import Rubbish from './rubbish/Rubbish'

const Home: FC = () => {
	return (
		<div>
			<div className='relative'>
				<Header />
				<Rubbish />
			</div>
			<div>
				<Chart />
			</div>
		</div>
	)
}

export default Home
