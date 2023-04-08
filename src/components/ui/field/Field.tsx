import { forwardRef } from 'react'

import styles from './Field.module.scss'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type, ...props }, ref) => {
		return (
			<input
				ref={ref}
				placeholder={placeholder}
				type={type}
				className={styles.field}
				{...props}
			></input>
		)
	}
)

export default Field
