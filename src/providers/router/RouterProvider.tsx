import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import NotFound from '@/components/screens/not-found/NotFound'

import { routes } from './router.data'

const RouterProvider: FC = () => {
	return (
		<Router>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default RouterProvider
