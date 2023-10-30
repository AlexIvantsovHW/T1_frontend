export function searchLink(substring, arr) {
    let matchingObjects = [];
    for(let i = 0; i < arr.length; i++) {
      let obj = arr[i];
      function searchSubstring(obj) {
        for (let key in obj) {
          let value = obj[key];
          if (typeof value === 'string' && value.toLowerCase().includes(substring.toLowerCase())) {
            return true;
          }
          if (typeof value === 'object' && searchSubstring(value)) {
            return true;
          }
        }
        return false;
      }
      let containsSubstring = searchSubstring(obj);
      if (containsSubstring) {
        matchingObjects.push(obj);
      }
    }
    return matchingObjects;
  }