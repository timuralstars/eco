import React from 'react'
import ReactDOM from 'react-dom/client'

import MenuBurgerProvider from '@/providers/menu-burger/MenuBurgerProvider'
import RouterProvider from '@/providers/router/RouterProvider'

import './index.scss'
import AuthProvider from './providers/auth/AuthProvider'
import ReactQueryProvider from './providers/react-query/ReactQueryProvider'
import RubbishProvider from './providers/rubbish/RubbishProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ReactQueryProvider>
			<AuthProvider>
				<RubbishProvider>
					<MenuBurgerProvider>
						<RouterProvider />
					</MenuBurgerProvider>
				</RubbishProvider>
			</AuthProvider>
		</ReactQueryProvider>
	</React.StrictMode>
)
