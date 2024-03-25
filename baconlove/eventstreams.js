/**
 *
 * Create one EventStream that emits three different async values in the
 * following order: Bacon, is, delicious.
 *
*/

module.exports = Bacon => {
    const bus = Bacon.Bus();
    setTimeout(() => bus.push('Bacon'), 100);
    setTimeout(() => bus.push('is'), 200);
    setTimeout(() => bus.push('delicious'), 300);
    setTimeout(() => bus.end(), 400);
    return bus;
};
