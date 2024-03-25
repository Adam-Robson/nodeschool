/**
 * 
 * Returns an iterator based on boolean isEven
 * If isEven is true, returns an iterator for even numbers
 * If isEven is false, returns an iterator for odd numbers
 * If `.next(swap)` receives `true`, swaps between even <-> odd
 * 
 * @param isEven {Boolean}
 * @return {{next: (function(*))}}
 * 
 */

const generate = (isEven) => {
  let i = isEven ? 0 : -1

  return {
    next: (swap) => {
      i += (swap ? 1 : 2)

      return {
        value: i
      }
    }
  }
}

export { generate }
