/**
 *
 * Create a Property that has an initial value of 10 and increments three
 * times, ending as 13.
 *
 * So a Property following this number sequence: 10 -> 11 -> 12 -> 13.
 *
 */

module.exports = Bacon => Bacon.sequentially(10, [11, 12, 13]).toProperty(10);
