import Sportigo from './index';

describe('Sportigo', () => {
  let sportigo: Sportigo;

  beforeEach(() => {
    sportigo = new Sportigo();
  });

  test('should add a player', () => {
    sportigo.addPlayer('John Doe');
    expect(sportigo.getPlayers()).toContain('John Doe');
  });

  test('should not add empty player name', () => {
    expect(() => sportigo.addPlayer('')).toThrow('Player name cannot be empty');
  });

  test('should remove a player', () => {
    sportigo.addPlayer('Jane Doe');
    const removed = sportigo.removePlayer('Jane Doe');
    expect(removed).toBe(true);
    expect(sportigo.getPlayers()).not.toContain('Jane Doe');
  });

  test('should return false when removing non-existent player', () => {
    const removed = sportigo.removePlayer('Non-existent');
    expect(removed).toBe(false);
  });
});
