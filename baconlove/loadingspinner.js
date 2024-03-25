/**
 *
 * Create an observable which holds the current visibility of a spinner.
 *
 * You will be supplied with one observable which is a stream of
 * clicks and one function that when called will return an observable
 * representing the result of the async task.
 *
 * The spinner should only be visible after the button has been clicked and
 * while waiting for the result of an async operation.
 *
 */

module.exports = (Bacon, clicks, startAsyncTask) => {
    const request = clicks.map(true);
    const response = request.flatMap(startAsyncTask);

    return request.awaiting(response);
};
