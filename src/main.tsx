import React from 'react'
import ReactDOM from 'react-dom/client'

import MenuBurgerProvider from '@/providers/menu-burger/MenuBurgerProvider'
import RouterProvider from '@/providers/router/RouterProvider'

import './index.scss'
import ReactQueryProvider from './providers/react-query/ReactQueryProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ReactQueryProvider>
			<MenuBurgerProvider>
				<RouterProvider />
			</MenuBurgerProvider>
		</ReactQueryProvider>
	</React.StrictMode>
)
