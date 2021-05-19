import { Theme, TThemeColorTypes } from 'react-antd-cssvars'

export interface ICustomWindow extends Window {
	store: any
	theme: Theme<TThemeColorTypes>
}


export interface IStore {
	status: EStatus
	current: number
	total: number
	version: string
	action: EAction
}


export enum EStatus {
	"start_wyndpos" = "Start Wyndpos ...",
	"get_screens" = "Retrieve screens data ...",
	"get_screens_done" = "Retrieve screens data done",
	"get_conf" = "Read config ...",
	"get_conf_done" = "Read config done",
	"check_conf" = "Check config ...",
	"check_conf_done" = "Check config done",
	"update" =  "Check update ...",
	"update_done" = "Check update done",
	"update_skip" = "Check update skip",
	"launch_wpt" =  "Start WPT ...",
	"launch_wpt_done" = "Start WPT done",
	"launch_wpt_skip" = "Start WPT skip",
	"wpt_connect" = "Connect to WPT ...",
	"wpt_connect_done" = "Connect to WPT done",
	"wpt_infos" = "Retrieve to WPT hardware infos ...",
	"wpt_infos_done" = "Retrieve to WPT hardware infos done",
	"wpt_plugins" = "Retrieve to WPT plugins ...",
	"wpt_plugins_done" = "Retrieve to WPT plugins done",
	"finish" =  "Ready"
}

export type EStatusKeys = keyof typeof EStatus;

export enum EAction {
	"initialize" = "Initialize",
	"reload" = "Reload",
	'close' = "Close",
}

export type EActionKeys = keyof typeof EAction;
