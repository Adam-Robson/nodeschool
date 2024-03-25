/**
 * Bacon.js has different ways of creating reactive datatypes from
 * various sources.
 *
 * One method you can use is `sequentially`, which takes an
 * interval and an array of values which will create an EventStream that emits
 * one value each interval until all values have been emitted.
 *
 */

module.exports = Bacon => Bacon.sequentially(100, [1, 2, 3]);
