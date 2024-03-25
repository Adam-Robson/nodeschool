/**
 *
 * Continuing our example of the river Nidelva. Some data specialists have been
 * taking water level samples from a specific point on the river, but the data
 * format is hard to work with, and we need to transform the data to a linear
 * stream of water levels.
 *
 */

module.exports = (Bacon, riverFlowInCubicFeet, litresInCubicFeet) =>
    riverFlowInCubicFeet
        .flatMap(tuple => {
            const cubicFeet = tuple[0];
            const numberOfSamples = tuple[1];

            const litres = Math.round(cubicFeet * litresInCubicFeet);

            if (litres > 200000) {
                return Bacon.interval(100, litres).take(numberOfSamples);
            } else {
                return Bacon.never();
            }
        });
