module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);

    },

    getFortune: (req, res) => {
        const fortunes = ["Do it scared", "You didnt come this far. to only come this far.", "Look how far you've come.", "Little by little, one travels far.", "what good are wings without the courage to fly."];

        let randomI = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomI];

        res.status(200).send(randomFortune);
    },

    getColor: (req, res) => {
        const colors = ["Black", "Green", "Blue", "Red", "Purple", "Orange", "Yellow", "White", "Brown"];

        let randomI = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomI];

        res.status(200).send(randomColor);

    },
    getAnimal: (req, res) => {
        const animals = ["Grizzly Bear", "Bald Eagle", "Honey Badger", "Raccoon", "Guinea Pig", "Mountain Lion"];

        let randomI = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomI];

        res.status(200).send(randomAnimal);

    },
    getQuote: (req, res) => {
        const quotes = ["every moment is a fresh beginning.", "never regret anything that made you smile.","all limitations are self imposed.", "life is like riding a bicycle.", "dream as if you'll live forever, live as if you'll die today."];

        let randomI = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomI];

        res.status(200).send(randomQuote);
    }
}