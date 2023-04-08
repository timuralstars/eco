import { FC } from 'react'

import styles from './Field.module.scss'

interface IField {}

const Field: FC<IField> = ({}) => {
	return <input className={styles.field}></input>
}

export default Field
