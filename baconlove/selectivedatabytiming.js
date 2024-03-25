/**
 *
 * Following the example of the river Nidelva in Trondheim, Norway, we need to
 * take samples of water quality. We want to take a sample every sampleTime
 * milliseconds (not before), but only as long as the system is turned on. You
 * can assume that the given function parameter untilSwitchTurnedOff holds true
 * as long as the system is active and the water samples should be taken. The
 * first water sample should be included in your resulting stream.
 *
 */


module.exports = (Bacon, riverQuality, untilSwitchTurnedOff, sampleTime) =>
    riverQuality
    .debounceImmediate(sampleTime)
    .takeWhile(untilSwitchTurnedOff);
