// Reinforced Wall
const reinforcedWall = extendContent(SurgeWall, "reinforced-wall", {
  update(tile) {
    const mendPower = tile.entity.maxHealth() / 15;
    const mendTimer = 90
    if (tile.entity.health() < tile.entity.maxHealth() & tile.entity.timer.get(0, mendTimer)) {
      tile.entity.healBy(mendPower);
      Effects.effect(Fx.healBlockFull, Tmp.c1.set(Color.valueOf("efefff")), tile.drawx(), tile.drawy(), tile.block().size);
    }
  }
});

// Large Reinforced Wall
const reinforcedWallLarge = extendContent(SurgeWall, "reinforced-wall-large", {
  update(tile){
    const mendPower = tile.entity.maxHealth() / 15;
    const mendTimer = 90;
    if (tile.entity.health() < tile.entity.maxHealth() & tile.entity.timer.get(0, mendTimer)) {
      tile.entity.healBy(mendPower);
      Effects.effect(Fx.healBlockFull, Tmp.c1.set(Color.valueOf("efefff")), tile.drawx(), tile.drawy(), tile.block().size);
    }
  }
});
