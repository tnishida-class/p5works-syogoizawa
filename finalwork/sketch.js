// 最終課題を制作しよう

let player = {
  x: 200,
  y: 300,
  vx: 0,
  vy: 0
};

let block = {
  x: 900,
  y: 300,
  vx: -2,
  vy: 0
};

let blocks;

function setup(){
  createCanvas(800, 600);
  rectMode(CENTER);


  blocks = [];
}

function draw() {
  if (frameCount % 120 === 1) addBlockPair(blocks);

  player.x += player.vx;
  player.y += player.vy;
  block.x += block.vx;
  block.y += block.vy;

  for (let block of blocks) {
    block.x += block.vx
    block.y += block.vy
  };

  player.vy += 0.15;

  background(0);

  square(player.x, player.y, 40);
  for (let block of blocks) {
    rect(block.x, block.y, 80, 400);
  };
}

function mousePressed(){
  player.vy = -5;
}

function addBlockPair() {
  let y = random(-100, 100);
  blocks.push({
    x: 900,
    y: y,
    vx: -2,
    vy: 0
  }); // 上のブロック
  blocks.push({
    x: 900,
    y: y + 600,
    vx: -2,
    vy: 0
  }); // 下のブロック
}
