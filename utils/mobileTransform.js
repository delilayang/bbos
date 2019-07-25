import { CountryCodeMap } from "~/libs/map";

export default class MobileTransform {

  static withCode(type = 'tw', phone) {
    return `${CountryCodeMap[type]}${phone.slice(1)}`;
  }

  static toLocal(type = 'tw', phone) {
    let len = CountryCodeMap[type].length;
    return `0${phone.slice(len)}`;
  }

}