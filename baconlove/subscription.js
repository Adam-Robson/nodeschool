/**
 * Adding Subscribers to Observables
 *
 * Add an action on every event on an event stream. The action is given as
 * input. Note: This action should not terminate the stream and you should be
 * able to chain methods on the pipeline.
 *
 * After you add an action to the pipe line, you should log the value of the
 * event stream out to the console with the prefix Value
 * Lastly you should add a subscriber with a callback given as the third input
 * (called `actionOnValue`).
 *
*/

module.exports = (Bacon, stream, action, actionOnValue) => {
    stream
        .doAction(action)
        .log('Value:')
        .onValue(actionOnValue);
    return stream;
};
