import { IRootState } from '../interface'

export const initialState: IRootState = {
	display: {
		ready: false,
		switch: 'POS'
	},
	menu: {
		open: true,
	},
	modal: {
		open: false,
		content: '',
	},
	wpt: {
		connect: false,
		infos: null,
		plugins: [],
	},
	conf: null,
	screens: [],
	user: {
		id: null,
	},
	pinpad: {
		open: false,
		nextAction: null,
	},
}