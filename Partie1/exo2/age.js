let yearOfbirth = 1999


function calculate_age(year) {
    return new Date().getFullYear() - year;
}

console.log(` Si vous êtes née en ${yearOfbirth} vous avez donc en ${new Date().getFullYear()}: ${calculate_age(yearOfbirth)} ans`)