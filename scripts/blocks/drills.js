// Chemical Drill
const chemicalDrill = extendContent(Drill, "chemical-drill", {
  load(){
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.liquidRegion = Core.atlas.find(this.name + "-liquid");
    this.region = Core.atlas.find(this.name + "-bottom");
    this.rimRegion = Core.atlas.find(this.name + "-rim");
    this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  generateIcons: function(){
    return [
      Core.atlas.find(this.name + "-base"),
      Core.atlas.find(this.name + "-bottom"),
      Core.atlas.find(this.name + "-rotator"),
      Core.atlas.find(this.name + "-top")
    ];
  },
  draw(tile){
    Draw.rect(this.baseRegion, tile.drawx(), tile.drawy());
    Draw.color(tile.entity.liquids.current().color);
    Draw.alpha(tile.entity.liquids.total() / this.liquidCapacity);
    Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
    Draw.color();
    this.super$draw(tile);
  },
});

Vars.content.blocks().each(boolf(b => b instanceof Drill), cons(b => {
  
});
