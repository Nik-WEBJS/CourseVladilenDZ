const hero = {
   name: 'Batman',
   health: 100,
};
 
const enemy = {
   name: 'Joker',
   health: 100,
};

startGame(hero, enemy);

function startGame(heroPlayer, enemyPlayer) {
    
    while(heroPlayer.health > 0 && enemyPlayer.health > 0) {
        let randomNumber = getRandomNumberInRange(0, 1);

        if(randomNumber === 0) {
            heatEnemy(enemyPlayer);
        } else if(randomNumber === 1) {
            heatHero(heroPlayer);
        }
    }
        if(heroPlayer.health > 0) {
            alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
        } else if(enemyPlayer.health > 0) {
            alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
        }
}

function heatEnemy(enemy) {
    enemy.health = enemy.health - 10;
    return enemy.health;
}

function heatHero(hero) {
    hero.health = hero.health - 10;
    return hero.health;
}

function getRandomNumberInRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}