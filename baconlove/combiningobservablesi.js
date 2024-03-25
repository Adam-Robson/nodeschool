/**
 *
 * The Earthian Defence Force has been able to obtain a decoding-machine that
 * can translate commands from the Zrrk command. This machine does however
 * require both the scrambled message and a unique key that unscrambles it. The
 * EDF has learned that the Zrrk command sends these messages on two separate
 * streams but in a synchronized fashion.
 *
 * Your job will be to combine these two streams with the decoder function and
 * produce a stream of invaluable intel for the EDF.
 *
 * The decoder function, passed as the third argument, will take as its single
 * parameter a tuple on the form [message, key].
 *
 */

module.exports = (Bacon, messages, keys, decoderFunction) =>
  messages
    .zip(keys)
    .map(decoderFunction);
