/**
 * `yield` results in either odd or even numbers,
 * based on the `isEven` Boolean parameter
 * 
 * @param isEven {Boolean}
 * @return {IterableIterator<*>}
 * 
 */
export function *generate(isEven) {
  let i = isEven ? 0 : -1

  while(true) {
    i += 2
    yield i
  }
}

