/**
 * Create four different reactive datatypes based on sources given as input.
 *
 * Inputs are given in the following order:
 *
 * 1. `promise` - A promise that should be wrapped to as a reactive datatype
 * 2. `eventTarget` - an EventTarget object that emits data on a `data` channel.
 * 3. `callback` - A function which expects to be called with `'foo', 'bar',
 * cb`, whose call to `cb` should be emitted on an event stream.
 * 4. In addition to these values, you should create an event source that emits
 * all the values in an array. The array should have 4 incremented values
 * starting with 1. (i.e. the sum of all values should be 10).
 *
 */

module.exports = (Bacon, promise, eventTarget, callback) => ({
  promise: Bacon.fromPromise(promise),
  eventTarget: Bacon.fromEvent(eventTarget, 'data'),
  callback: Bacon.fromCallback(callback, 'foo', 'bar'),
  array: Bacon.fromArray([1, 2, 3, 4])
});
