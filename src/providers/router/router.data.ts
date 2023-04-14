import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'
import Personal from '@/components/screens/personal/Personal'

import { IRoute } from './router.interface'

export const routes: IRoute[] = [
	{
		path: '/',
		isAuth: false,
		component: Home
	},
	{
		path: '/auth',
		isAuth: false,
		component: Auth
	},
	{
		path: '/personal',
		isAuth: true,
		component: Personal
	}
]
