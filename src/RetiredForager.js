var RetiredForagerBee = function() {
  Grub.call(this);
  ForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";

};

RetiredForagerBee.prototype.eat = Grub.prototype.eat;

RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);


};
