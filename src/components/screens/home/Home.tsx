import { FC } from 'react'

import Header from '@/components/ui/header/Header'

import Map from './map/Map'

const Home: FC = () => {
	return (
		<div>
			<Header />
			<Map />
		</div>
	)
}

export default Home
