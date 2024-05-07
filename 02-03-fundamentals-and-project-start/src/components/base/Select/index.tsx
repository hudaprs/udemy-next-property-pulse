'use client'

// React
import { memo } from 'react'

// Types
import { SelectProps } from './types'

// Next UI
import { Select, SelectItem } from '@nextui-org/react'

const BaseSelect = memo((props: SelectProps) => {
	return (
		<Select {...props?.select}>
			{props.selectItems.map(selectItem => (
				<SelectItem
					{...selectItem}
					key={selectItem.value as never}
					value={selectItem.value}
				>
					{selectItem.label}
				</SelectItem>
			))}
		</Select>
	)
})

BaseSelect.displayName = 'BaseSelect'

export { BaseSelect }
