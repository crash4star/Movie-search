function localStorageItem(type, item, value) {
  let result;

  if (type === 'get') {
    if (localStorage.getItem(`${item}`) !== null) {
      result = JSON.parse(localStorage.getItem(`${item}`));
    } else {
      result = false;
    }
  } else if (type === 'set') {
    localStorage.setItem(`${item}`, JSON.stringify(value));
  }

  return result;
}

export default localStorageItem;