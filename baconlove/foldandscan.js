/**
 *
 * The Earthian Defence Force (EDF) has come to you for aid once again. You
 * must use your newfound intelligence gathering skills to provide them with a
 * running tally of Zrrk ships which has entered the solar system.
 *
 * The EDF has also requested a specialized report on the ships immediately
 * following the Zrrk Planet Destroyer to see if they might be targets of
 * value. The report should contain the distribution of the first five ships
 * which enter immediately after the Zrrk Planet Destroyer. You will know when
 * the Destroyer has arrived when the position is < 1.
 *
 *
 */

module.exports = (Bacon, enteringShips, destroyerPosition) => {
    const shipTally = enteringShips
        .filter(ship => ship.type === 'zrrk')
        .map(1)
        .scan(0, (acc, v) => acc + v);

    const destroyerHasEntered = destroyerPosition.map(distance => distance < 1);

    const threatReport = enteringShips
        .filter(destroyerHasEntered)
        .take(5)
        .fold({}, (report, ship) => {
            if (!report[ship.type]) {
                report[ship.type] = 0;
            }
            report[ship.type] += 1;
            return report;
        });

    return {shipTally, threatReport};
};
