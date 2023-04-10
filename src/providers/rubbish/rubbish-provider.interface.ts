import { RubbishType } from '@/interfaces/rubbish.interface'

export interface IRubbishProvider {
	currentRubbish: RubbishType
	setCurrentRubbish: React.Dispatch<React.SetStateAction<RubbishType>>
}
