/**
 *
 * In Trondheim, Norway, there is a river called Nidelva. The average flow in
 * some areas is about 200 000 liters per second. There is a limit of how much
 * water a specific dam can handle and we need a reporting system that notifies
 * the workers if this limit has been exceeded.
 *
 * We are only interested in having the report-system active if it is turned on
 * and only one of the water gates are open, or if the system is in critical
 * mode (this trumps if the system is active and if more than one gate is open).
 *
 * The people working at this particular dam are passionate about lunch, and
 * won't be bothered in the lunch time.
 *
 * Remember we only want to be reported if the river flow is above a specific
 * threshold.
 *
 * Expected output: A property with the value true if we should activate the
 * report system, or false if there is no worries.
 *
 * Hint and Tips:
 * You should create two properties first: if we should report and if the river
 * limit is exceeded. After you have these you should be able to find if the
 * report system should be triggered.
 *
 */

module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {
  const limitExceeded = riverFlow.map(flow => flow > riverFlowLimit);
  const notOnBreak = isOnBreak.not();

  const shouldReport = systemActive
    .and(notOnBreak)
    .and(isSingleGate)
    .or(inCriticalMode);

  return shouldReport.and(limitExceeded);
};
