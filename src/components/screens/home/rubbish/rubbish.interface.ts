import { TypeMaterialIconName } from '@/interfaces/icons.interface'
import { RubbishType } from '@/interfaces/rubbish.interface'

export interface IRubbishItem {
	value: string
	title: RubbishType
	icon: TypeMaterialIconName
}
