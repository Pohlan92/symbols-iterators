import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Team from '../Team';

test('тестирование класса Team', () => {
  const player1 = new Daemon('Lena');
  const player2 = new Bowman('Ivan');
  const myTeam = new Team(player1, player2);

  const iterator = myTeam[Symbol.iterator]();
  for (let i = 0; i <= myTeam.players.length; i += 1) {
    expect(iterator.next().value).toEqual(myTeam.players[i]);
  }
});
