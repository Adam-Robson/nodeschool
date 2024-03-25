/**
 *
 * Given an observable representing the result of an async task that can error
 * you should return an observable representing the presence of an error. This
 * observable can be used to for instance show an error-message.
 *
 */
module.exports = (Bacon, asyncTask) =>
    asyncTask
        .map(false)
        .mapError(true)
        .toProperty(false);
