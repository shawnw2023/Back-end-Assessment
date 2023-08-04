const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById('fortuneButton')
const colorBtn = document.getElementById('colorButton')
const animalBtn = document.getElementById('animalButton')
const quoteBtn = document.getElementById('quoteButton')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const getAnimal = () => {
    axios.get("http://localhost:4000/api/animal/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};
const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}



complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

colorBtn.addEventListener('click', getColor)

animalBtn.addEventListener('click', getAnimal)

quoteBtn.addEventListener('click', getQuote)