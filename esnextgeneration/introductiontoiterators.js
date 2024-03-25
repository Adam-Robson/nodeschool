/**
 * 
 * Turn an element into an iterator.
 * This iterator should count positive
 * integers 1-10, inclusive.
 * 
 * @param obj {Object}
 * @return {Object} an iterator
 * 
 */

const makeCounter = obj => {
  let i = 0

  obj.next = () => {
    return {
      done: i >= 10,
      value: ++i
    }
  }
}

export { makeCounter }
