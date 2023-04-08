import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'

import { IRoute } from './router.interface'

export const routes: IRoute[] = [
	{
		path: '/',
		isAuth: false,
		component: Home
	},
	{
		path: '/auth',
		isAuth: true,
		component: Auth
	}
]