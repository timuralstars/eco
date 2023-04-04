import { FC } from 'react'

import Header from '@/components/ui/header/Header'

import Map from './map/Map'
import Rubbish from './rubbish/Rubbish'

const Home: FC = () => {
	return (
		<div>
			<Header />
			<div className='relative'>
				<Map />
				<Rubbish />
			</div>
		</div>
	)
}

export default Home
