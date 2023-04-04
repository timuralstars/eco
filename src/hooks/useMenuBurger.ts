import { useContext } from 'react'

import { MenuBurgerContext } from '@/providers/menu-burger/MenuBurgerProvider'

export const useMenuBurger = () => useContext(MenuBurgerContext)
