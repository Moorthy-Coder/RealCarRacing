class Player {
  constructor() {
    this.name = null;
    this.index = 0;
    this.y = 300;
    this.x = 350;
    this.rank = 0;
  }

  getCount() {
    var playerCountRef = database.ref('PlayerCount');
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      PlayerCount: count
    });
  }

  getPlayerinfo() {
    database.ref('players').on("value", (data) => {
      AllPlayers = data.val();
    })
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      index: this.index,
      y: this.y,
      x: this.x,
      rank: this.rank
    });
  }

  getRank() {
    database.ref('Ranking').on("value", (data) => {
      Ranker = data.val();
    })
  }

  updateRank(value) {
    database.ref('/').update({
      Ranking: value
    })
  }
}


