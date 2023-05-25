export default class Team {
  constructor(...players) {
    this.players = players;
  }

  [Symbol.iterator]() {
    let index = 0;
    const teamPlayers = this.players;
    return {
      next() {
        index += 1;
        if (index > teamPlayers.length) {
          return {
            done: true,
          };
        }
        return {
          done: false,
          value: teamPlayers[index - 1],
        };
      },
    };
  }
}
