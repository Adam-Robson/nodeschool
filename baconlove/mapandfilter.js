/**
 *
 * The year is 3001 and the planet Earth is under attack by the Zrrks of planet
 * Omicron Persei 6. In order to help the Earthian Defence Force you have been
 * tasked with the gathering of intelligence on the incoming Zrrk invasion. The
 * EDF has provided you with two key sensors which gives constant readings on
 * critical metrics of the invading Zrrk force:
 *
 * 1. A sensor which registers all ships that enter our solar system.
 * 2. A sensor which at any time registers the position of the Zrrk Planet
 *    Destroyer in light-years.
 *
 * Your mission, should you choose to accept it, is to provide three key
 * strategical pieces of information:
 *
 * 1. A stream which emits a 1 for Zrrk ships and a 0 for all other ships which
 *    passes the sensor.
 * 2. A property which reads the current threat level based on the distance of
 *    the Zrrk Planet Destroyer.
 *      -'low' threat for x>5.
 *      -'medium' threat for 5=>x>2.
 *      -'high' threat for 2=>x>=1.
 *      -'extreme' threat for x<1.
 * 3. A stream which emits a 1 for Zrrk ships and a 0 for all other ships which
 *    passes the sensor, but only after we have achieved extreme threat.
 *    Ships entering the solar system will have this information:
 *      {
 *        "type": "zrrk|earthian|purple|martian"
 *      }
 */

module.exports = (Bacon, enteringShips, destroyerPosition) => {
    const ships = enteringShips.map(ship => ship.type === 'zrrk' ? 1 : 0);

    const threat = destroyerPosition.map(distance => {
        if (distance > 5) {
            return 'low';
        } else if (distance > 2) {
            return 'medium';
        } else if (distance > 1) {
            return 'high';
        } else {
            return 'extreme';
        }
    });

    const extremeThreat = threat.filter(threat => threat === 'extreme');
    const postArrivalShips = ships.filter(extremeThreat);

    return {ships, threat, postArrivalShips};
};
