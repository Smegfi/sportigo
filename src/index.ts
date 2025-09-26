// Sportigo - místo kde se potkávají spoluhráči
export class Sportigo {
  private players: string[] = [];

  addPlayer(name: string): void {
    if (!name.trim()) {
      throw new Error('Player name cannot be empty');
    }
    this.players.push(name);
  }

  getPlayers(): string[] {
    return [...this.players];
  }

  removePlayer(name: string): boolean {
    const index = this.players.indexOf(name);
    if (index > -1) {
      this.players.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default Sportigo;
