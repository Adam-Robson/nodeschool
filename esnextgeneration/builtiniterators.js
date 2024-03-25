/**
 * 
 * Extracts the numeric values from iterable only,
 * & returns them as an Array.
 * 
 * iterable can be and type of iterable,
 * including a custom iterable
 * 
 * @param iterable
 * @return {Array}
 * 
 */

const filterNums = (iterable) => {
  let arr = []
  for (let val of iterable) {
    if (typeof val === 'number') arr.push(val)
  }
  return arr
}

export { filterNums }
