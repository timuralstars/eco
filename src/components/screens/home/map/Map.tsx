import { FC } from 'react'

import styles from './Map.module.scss'

interface IMap {}

const Map: FC<IMap> = ({}) => {
	return <div className={styles.map}>Map</div>
}

export default Map
