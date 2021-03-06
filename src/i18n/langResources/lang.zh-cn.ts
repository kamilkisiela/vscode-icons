import { ILangResource } from '../../models/i18n';
import { constants } from '../../constants';

export const langZhCn: ILangResource = {
  newVersion: `欢迎使用最新版本的 ${constants.extensionName}`,
  seeReleaseNotes: '关于最新版本的改动',
  dontShowThis: '下次不再显示这条消息',
  seeReadme: '了解关于此插件的更多信息',
  welcome: `${constants.extensionName} 现在支持官方 API`,
  activate: '激活',
  aboutOfficialApi: '查看更多关于文件和文件夹的图标',
  learnMore: '想要了解更多信息？',
  reload: '重启',
  autoReload: '自动重启',
  disableDetect: '关闭自动检测',
  iconCustomization: '重新生成图标',
  iconRestore: '图标正在被复原',
  ngPresetEnabled: '使用 Angular 的图标',
  ngPresetDisabled: '取消使用 Angular 的图标',
  jsOfficialPresetEnabled: '使用官方的 JS 图标',
  jsOfficialPresetDisabled: '取消使用官方的 JS 图标',
  tsOfficialPresetEnabled: '使用官方的 TS 图标',
  tsOfficialPresetDisabled: '取消使用官方的 TS 图标',
  jsonOfficialPresetEnabled: '使用官方的 JSON 图标',
  jsonOfficialPresetDisabled: '取消使用官方的 JSON 图标',
  hideFoldersPresetEnabled: '现在使用文件夹图标',
  hideFoldersPresetDisabled: '现在隐藏文件夹图标',
  foldersAllDefaultIconPresetEnabled: '现在使用指定的文件夹图标',
  foldersAllDefaultIconPresetDisabled: '现在取消使用指定的文件夹图标',
  restart: '选择「重启」使改变生效',
  ngDetected: `${constants.extensionName} 发现当前工程是 Angular。选择「重启」使用 Angular 的图标`,
  nonNgDetected: `${constants.extensionName} 发现当前工程不是 Angular。选择「重启」取消使用 Angular 的图标`,
  projectDetectionReset: '重设自动检测工程文件为默认设置',
};
