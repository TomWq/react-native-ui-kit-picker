import { NativeModules, Platform } from 'react-native';
import type {TimePicker,NormaItem,NormalPicker,CityResult,LinkResult,Linkage,CityProps} from './type'

const LINKING_ERROR =
  `The package 'react-native-ui-kit-picker' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const UiKitPickerModule = NativeModules.UiKitPicker
  ? NativeModules.UiKitPicker
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );


export const ShowTimePicker = ({
     title,
     pattern,
     mixDate,
     maxDate,
     selectDate,
    }: TimePicker = {}): Promise<string> => {
  return UiKitPickerModule.showTimePicker(pattern,title,mixDate,maxDate,selectDate);
};

export const ShowNormalPicker = ({
    title,
    array,
    selectItem
  }:NormalPicker ={}): Promise<NormaItem> =>{
  return UiKitPickerModule.showNormalPicker(array,title,selectItem);
}

export const ShowLinkagePicker =({
    title,
    array,
  }: Linkage={}) :Promise<LinkResult>=>{
  return UiKitPickerModule.showLinkagePicker(title,array);
}

export const ShowCityPicker = ({
  title,
  selcetCity
}:CityProps={}): Promise<CityResult> =>{
  return UiKitPickerModule.showCityPicker(title,selcetCity);
}
