
let nom1 = "Bertyn";
let nom2 = "Alexis"

console.log('Valeur de nom1: ', nom1);
console.log('Valeur de nom2: ', nom2);
/**
 * Echange les nombre de 2 variable  entre eux
 * @param {string} a Some string
 * @param {string} b Some string
 */

let tmp = nom1
nom1 = nom2;
nom2 = tmp;


console.log('apres le swap: ');
console.log('Valeur de nom1: ', nom1);
console.log('Valeur de nom2: ', nom2);