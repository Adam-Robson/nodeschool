/**
 * 
 * `yield` will return the integers
 * multiplied by any value that is
 * passed in via `.next()`
 * 
 */

export function *multiplier() {
  let i = 0
  let multiplier = 1

  while (true) {
    i++
    multiplier = yield i * multiplier
    if (!multiplier) multiplier = 1
  }
}
