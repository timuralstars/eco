import { FC, Fragment } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import NotFound from '@/components/screens/not-found/NotFound'

import { useAuth } from '@/hooks/useAuth'

import { routes } from './router.data'

const RouterProvider: FC = () => {
	const { isUser } = useAuth()
	return (
		<Router>
			<Routes>
				{routes.map(route => (
					<Fragment key={route.path}>
						{route.isAuth && !isUser ? null : (
							<Route path={route.path} element={<route.component />} />
						)}
					</Fragment>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default RouterProvider
