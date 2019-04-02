//export to index.js
module.exports = {
fortunes : [
    "I couldn't figure out how the seat belt worked. Then it just clicked.",
    "Just read a few facts about frogs. They were ribbiting.",
    "Where do sheep go to get their hair cut? The baa-baa shop.",
    "Whoever invented the knock-knock joke should get a no bell prize.",
    "If you’re struggling to think of what to get someone for Christmas. Get them a fridge and watch their face light up when they open it.",
    "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."
],

// create function to randomly choose fortune

randomJoke: function (jokeArray) {
    let joke = jokeArray[Math.floor(Math.random()*jokeArray.length)];
    return joke;
}
}
// console.log(randomJoke(fortunes));
