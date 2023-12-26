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

/**
 * Generates a time picker with the specified title, pattern, minimum date, maximum date, and selected date.
 *
 * @param {TimePicker} [paramName={}] - An optional object containing the time picker options.
 * @param {string} [paramName.title] - The title of the time picker.
 * @param {string} [paramName.pattern] - The pattern used to format the time picker display.
 * @param {Date} [paramName.mixDate] - The minimum selectable date in the time picker.
 * @param {Date} [paramName.maxDate] - The maximum selectable date in the time picker.
 * @param {Date} [paramName.selectDate] - The initially selected date in the time picker.
 * @return {Promise<string>} - A promise that resolves with the selected time as a string.
 */
export const ShowTimePicker = ({
     title,
     pattern,
     mixDate,
     maxDate,
     selectDate,
    }: TimePicker = {}): Promise<string> => {
  return UiKitPickerModule.showTimePicker(pattern,title,mixDate,maxDate,selectDate);
};

/**
 * Generates a function comment for the given function body.
 *
 * @param {NormalPicker} options - An object containing the options for the normal picker.
 * @param {string} options.title - The title of the normal picker.
 * @param {Array} options.array - The array of items for the normal picker.
 * @param {Function} options.selectItem - The function to be called when an item is selected in the normal picker.
 * @returns {Promise<NormaItem>} A promise that resolves to the selected item in the normal picker.
 */
export const ShowNormalPicker = ({
    title,
    array,
    selectItem
  }:NormalPicker ={}): Promise<NormaItem> =>{
  return UiKitPickerModule.showNormalPicker(array,title,selectItem);
}
/**
 * Generates a function comment for the given function body.
 *
 * @param {Linkage} [paramName={}] - An object containing parameters for the function.
 * @param {string} [paramName.title] - The title of the picker.
 * @param {Array} [paramName.array] - The array to be used in the picker.
 * @return {Promise<LinkResult>} - A promise that resolves to a LinkResult.
 */
export const ShowLinkagePicker =({
    title,
    array,
  }: Linkage={}) :Promise<LinkResult>=>{
  return UiKitPickerModule.showLinkagePicker(title,array);
}
/**
 *
 * Generates a function comment for the given function body.
 *
 * @param {CityProps} title - The title of the city picker.
 * @param {CityProps} selcetCity - The selected city.
 * @return {Promise<CityResult>} A promise that resolves to the city result.
 */
export const ShowCityPicker = ({
  title,
  selcetCity
}:CityProps={}): Promise<CityResult> =>{
  return UiKitPickerModule.showCityPicker(title,selcetCity);
}
