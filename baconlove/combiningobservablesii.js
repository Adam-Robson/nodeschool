/**
 *
 * Thanks to the intel you have provided throughout the defence campaign
 * against the Zrrk invasion, the Earthian Defence Force has concluded that the
 * Zrrk come in peace. The EDF have decided that in order to show signs of good
 * will towards the apparently friendly Zrrk, they need to broadcast the
 * withdrawal status of the EDF fleet.
 *
 * The solar system is divided into five sectors, each named sectorX where X is
 * the sector number, with EDF ships being deployed in sectors one through
 * four. Your final assignment will be to provide a report for the Zrrk
 * commander on the current status of deployed EDF ships in all five sectors
 * of the solar system.
 *
 * Since no EDF ships are deployed to sector five, that part of the report
 * should always return zero.
 *
 */

module.exports = (Bacon, sector1Count, sector2Count, sector3Count, sector4Count) =>
    Bacon.combineTemplate({
        sector1: sector1Count,
        sector2: sector2Count,
        sector3: sector3Count,
        sector4: sector4Count,
        sector5: Bacon.constant(0)
    });
