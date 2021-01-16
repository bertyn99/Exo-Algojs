let top = 5;
let bot = 8;

console.log('Valeur de top: ', top);
console.log('Valeur de bot: ', bot);
/**
 * Echange les nombre de 2 variable  entre eux
 * @param {number} a Some number
 * @param {number} b Some number
 */
top = top + bot;
bot = top - bot;
top = top - bot;


console.log('apres le swap: ');
console.log('Valeur de top: ', top);
console.log('Valeur de bot: ', bot);