//I made a dummy of an RPG, I created a base Character class that has the name and initial level of the character and to its prototype.
//I added methods for greeting, basic attack, drinking potions and leveling up depending on the growth values of each job.
//I added this things to the prototype so that every time a character is created, it doesn’t have a copy of the functions,
//instead when called it will go up the prototype chain for these methods.
//Then I extended the character class to create jobs (warrior, black mage and cleric), these have their own base stats and different growth,
//also they have different skills that use their own stats. At the end, there is a simulation of a skirmish.

class Character {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

class Warrior extends Character {
  constructor(name, level) {
    super(name, level);
    this.class = "warrior";
    this.stats = { hp: 75, atk: 10, def: 15, mind: 3, int: 2, dex: 5 };
    this.onLevelUp = { hp: 15, atk: 3, def: 2, mind: 1, int: 1, dex: 1 };
  }
  axeSwing(enemyDefense) {
    const multiplier = 1.5;
    let damage = Math.floor(multiplier * this.stats.atk * (100 / (100 + enemyDefense)));
    return `Did ${damage} damage`;
  }
}

class BlackMage extends Character {
  constructor(name, level) {
    super(name, level);
    this.class = "black mage";
    this.stats = { hp: 32, atk: 4, def: 10, mind: 6, int: 17, dex: 8 };
    this.onLevelUp = { hp: 6, atk: 1, def: 2, mind: 2, int: 4, dex: 1 };
  }
  fireBolt(enemyMind) {
    const multiplier = 1.7;
    let damage = Math.floor(multiplier * this.stats.int * (100 / (100 + enemyMind)));
    return `Did ${damage} damage`;
  }
}

class Cleric extends Character {
  constructor(name, level) {
    super(name, level);
    this.class = "cleric";
    this.stats = { hp: 46, atk: 5, def: 8, mind: 18, int: 9, dex: 7 };
    this.onLevelUp = { hp: 8, atk: 2, def: 3, mind: 6, int: 2, dex: 1 };
  }
  heal(ally) {
    const multiplier = 0.6;
    let heal = Math.floor(multiplier * (this.stats.int + this.stats.mind));
    ally.stats.hp += heal;
    return `Healed ${heal} points to ${ally.name}`;
  }
}

Character.prototype.levelUp = function () {
  this.level++;
  this.stats.hp += this.onLevelUp.hp;
  this.stats.atk += this.onLevelUp.atk;
  this.stats.def += this.onLevelUp.def;
  this.stats.mind += this.onLevelUp.mind;
  this.stats.int += this.onLevelUp.int;
  this.stats.dex += this.onLevelUp.dex;
};

Character.prototype.greet = function () {
  return `Well met. I'm ${this.name}. I'm a level ${this.level} ${this.class}`;
};

Character.prototype.attack = function (enemyDefense) {
  const multiplier = 1;
  let damage = Math.floor(multiplier * this.stats.atk * (100 / (100 + enemyDefense)));
  return `Did ${damage} damage`;
};
Character.prototype.drinkPotion = function (potionType) {
  switch (potionType) {
    case "normal":
      this.stats.hp += 10;
      break;
    case "good":
      this.stats.hp += 20;
      break;
    case "supreme":
      this.stats.hp += 30;
      break;
    default:
      break;
  }
};

Character.prototype.getAttacked = function (enemyAttack) {
  const multiplier = 1;
  let damage = Math.floor(multiplier * enemyAttack * (100 / (100 + this.stats.def)));
  this.stats.hp -= damage;
  return `Did ${damage} damage, leaving ${this.name} with ${this.stats.hp} left`;
};

const char1 = new Warrior("Aragorn", 4);
console.log(char1.stats);
char1.levelUp();
console.log(char1.stats);
console.log(char1.greet());
console.log(char1.attack(34));
console.log(char1.axeSwing(34));
console.log(char1.getAttacked(22));
console.log(char1.stats.hp);
char1.drinkPotion("normal");
console.log(char1.stats.hp);

const char2 = new BlackMage("Rydia", 4);
console.log(char2.stats);
char2.levelUp();
char2.levelUp();
char2.levelUp();
console.log(char2.stats);
console.log(char2.greet());
console.log(char2.attack(34));
console.log(char2.fireBolt(3));
console.log(char2.getAttacked(40));

const char3 = new Cleric("Porom", 4);
console.log(char3.stats);
char3.levelUp();
char3.levelUp();
console.log(char3.stats);
console.log(char3.greet());
console.log(char3.attack(34));
console.log(char2.stats.hp);
console.log(char3.heal(char2));
console.log(char2.stats.hp);
