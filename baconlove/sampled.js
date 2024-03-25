/**
 *
 * The same river as mentioned in the previous exercise, Nidelva, has a
 * confluence with another river called Leirelva. This confluence is a
 * potential problem for river overflow, so we need to build a system for
 * taking samples of the water level (of the two rivers combined).
 *
 *
 * To accomplish this we will need to have a button, and when that button is clicked, a sample of the water level should be taken.
 *
 * For this exercise you will get the following input:
 * nidelva - property of the water levels for Nidelva
 * leirelva - property of the water levels for Leirelva
 * buttonClicked - an EventStream of button clicks
 * Expected output:
 *
 * An EventStream of the water level samples.
 *
 */

module.exports = (Bacon, nidelva, leirelva, buttonClicked) =>
  nidelva
    .combine(leirelva, (leirelvaSample, nidelvaSample) => leirelvaSample + nidelvaSample)
    .sampledBy(buttonClicked);
