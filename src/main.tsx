import React from 'react'
import ReactDOM from 'react-dom/client'

import MenuBurgerProvider from '@/providers/menu-burger/MenuBurgerProvider'
import RouterProvider from '@/providers/router/RouterProvider'

import './index.scss'
import ReactQueryProvider from './providers/react-query/ReactQueryProvider'
import RubbishProvider from './providers/rubbish/RubbishProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ReactQueryProvider>
			<RubbishProvider>
				<MenuBurgerProvider>
					<RouterProvider />
				</MenuBurgerProvider>
			</RubbishProvider>
		</ReactQueryProvider>
	</React.StrictMode>
)
