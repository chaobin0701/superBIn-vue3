export function IsURL(strUrl) {
  var regular = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  var regular1 = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/
  if (regular.test(strUrl) || regular1.test(strUrl)) {
    return true;
  } else {
    return false;
  }
}
