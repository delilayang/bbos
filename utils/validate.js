export default class Validate {

  static password(str) {

    const upperCase = "[ABCDEFGHIJKLMNOPQRSTUVWXYZ]";
    const lowerCase = "[abcdefghijklmnopqrstuvwxyz]";
    const digitCase = "[0123456789]";
    // const symbolCase = "[~!$%&-_=+]";

    if (str.length < 8 || str.length > 12) return false;
    if (!new RegExp(upperCase).test(str)) return false;
    if (!new RegExp(lowerCase).test(str)) return false;
    if (!new RegExp(digitCase).test(str)) return false;
    // if (!new RegExp(symbolCase).test(str)) return false;

    return true;

  }
  
  static isEmail(value) {
    const reg = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return reg.test(value) ? true : false;
  }

  static isMemberID(value) {
    const reg = /^[A-Z]{2}[0-9]{6}$/;
    return reg.test(value) ? true : false;
  }

  static isCellPhone(value) {
    const reg = /^09[0-9]{8}$/;
    return reg.test(value) ? true : false;
  }

}