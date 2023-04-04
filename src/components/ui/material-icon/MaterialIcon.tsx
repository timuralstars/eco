import { FC } from 'react'
import * as MaterialIcons from 'react-icons/all'

import { TypeMaterialIconName } from '@/interfaces/icons.interface'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const Icon = MaterialIcons[name]
	return <Icon className='fill-accent stroke-none' size={20} />
}

export default MaterialIcon
