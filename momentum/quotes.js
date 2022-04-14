const quotes = [
    {
        quote: "잠은 인생의 낭비다.",
        author: "이영재",
    },
    {
        quote: "근성장 그것은 나의 인생 최대목표",
        author: "김준범",
    },
    {
        quote:"아 졸려",
        author:"이영재",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;