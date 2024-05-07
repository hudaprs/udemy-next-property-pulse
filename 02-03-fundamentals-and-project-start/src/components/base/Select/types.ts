// Next UI
import type {
	SelectProps as NextUISelectProps,
	SelectItemProps as NextUISelectItemProps
} from '@nextui-org/react'

export type SelectProps = {
	select?: Omit<NextUISelectProps, 'children'>
	selectItems: (Omit<NextUISelectItemProps, 'key'> & {
		label: string
	})[]
}
