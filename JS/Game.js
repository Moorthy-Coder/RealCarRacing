class Game {
  constructor() { }

  async getState() {
    var gameStateRef = await database.ref('State');
    await gameStateRef.on("value", (data) => {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref('/').update({
      State: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    Car1 = createSprite(displayWidth / 4, 200, 20, 20);
    Car1.addImage(carImage1);
    Car1.rotation = 90;
    Car1.scale = 0.08;
    Car2 = createSprite(displayWidth / 2.5, 200, 20, 20);
    Car2.addImage(carImage2);
    Car2.rotation = +90;
    Car2.scale = 0.14;
    Car3 = createSprite(displayWidth / 1.5, 200, 20, 20);
    Car3.addImage(carImage3);
    Car3.scale = 0.12;
    Car4 = createSprite(displayWidth / 0.5, 200, 20, 20);
    Car4.addImage(carImage4);
    Car4.scale = 0.12;
    Cars = [Car1, Car2, Car3, Car4];

  }

  
  play() {
    player.getPlayerinfo();
    player.getRank();
    var index = 0;
    background(255);
    image(backgroundImage, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
    var x = 350;
    for (var i in AllPlayers) {
      Cars[index].y = AllPlayers[i].y;
      Cars[index].x = AllPlayers[i].x;
      if (index + 1 == player.index) {
        camera.position.y = Cars[index].y;
        camera.position.x = Cars[index].x;
        var markerX = Cars[index].x;
        var markerY = Cars[index].y
        ellipseMode(RADIUS);
        noStroke();
        fill("red");
        ellipse(markerX, markerY, 50, 80);
      }
      index++;
      x += 200;
    }
    if (keyDown(UP_ARROW)) {
      player.y -= 7.5;
      player.update();
    }
    if (keyDown(DOWN_ARROW)) {
      player.y += 5;
      player.update();
    }
    if (keyDown(LEFT_ARROW)) {
      player.x -= 5;
      player.update();
    }
    if (keyDown(RIGHT_ARROW)) {
      player.x += 5;
      player.update();
    }

    // console.log(player.y);
    if (player.y < -2920) {
      player.rank = Ranker;
      player.update();
      Ranker += 1;
      player.updateRank(Ranker);
      gameState = 2;
    }
    drawSprites();
  }
}
