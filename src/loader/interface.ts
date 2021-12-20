import { Theme, TThemeColorTypes } from 'react-antd-cssvars'

export interface ICustomWindow extends Window {
  store: any;
  theme: Theme<TThemeColorTypes>;
}

export interface IStore {
  status: EStatus | string;
  current: number;
  total: number;
  name: string;
  version: string;
  action: EAction;
  download: boolean;
  progress: number;
}

export enum EStatus {
  'start_app' = 'Start application ...',
  'get_screens' = 'Retrieve screens data ...',
  'get_screens_done' = 'Retrieve screens data done',
  'get_conf' = 'Read config ...',
  'get_conf_done' = 'Read config done',
  'get_wpt_pid' = 'WPT pid',
  'get_wpt_pid_done' = 'WPT pid done',
  'check_conf' = 'Check config ...',
  'check_conf_done' = 'Check config done',
  'check_update' = 'Check update ...',
  'check_update_done' = 'Check update done',
  'check_update_skip' = 'Check update skip',
  'download_update' = 'Download update',
  'download_update_done' = 'Download update complete',
  'download_update_skip' = 'No update to download',
  'update_quit' = 'Will install and restart ...',
  'launch_wpt' = 'Start WPT ...',
  'launch_wpt_done' = 'Start WPT done',
  'launch_wpt_skip' = 'Start WPT skip',
  'wpt_connect' = 'Connect to WPT ...',
  'wpt_connect_done' = 'Connect to WPT done',
  'wpt_infos' = 'Retrieve WPT hardware infos ...',
  'wpt_infos_done' = 'Retrieve WPT hardware infos done',
	'create_http' = 'create http server',
	'create_http_done' = 'create http server done',
  'REQUEST_WPT' = 'Retrieve WPT plugins ...',
  'REQUEST_WPT_done' = 'Retrieve WPT plugins done',
  'finish' = 'Ready',
}

export type EStatusKeys = keyof typeof EStatus;

export enum EAction {
  'initialize' = 'Initialize',
  'reload' = 'Reload',
  'close' = 'Close',
  'update' = 'Update',
}

export type EActionKeys = keyof typeof EAction;
