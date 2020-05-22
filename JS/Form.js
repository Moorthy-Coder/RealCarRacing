class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset')

  }

  display() {
    this.title.html("Car Racing Game");
    this.title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);
    this.reset.position(displayWidth / 4, 15);

    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      player.updateRank(1);
      database.ref('players').remove();
    })

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();


      player.name = this.input.value();

      playerCount += 1;
      if (playerCount == 1) {
        player.x = 370;
      }
      else if (playerCount == 2) {
        player.x = 570;
      }
      else if (playerCount == 3) {
        player.x = 770;
      }
      else if (playerCount == 4) {
        player.x = 970;
      }

      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting = createElement('h3');
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 160)
    });

  }

  hide() {
    this.greeting.hide();
    this.title.hide();
    this.button.hide();
  }
}
