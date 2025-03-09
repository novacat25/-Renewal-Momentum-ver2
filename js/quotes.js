const quoteMessage = document.getElementById("quote-message")
const quoteAuthor = document.getElementById("quote-author")

const quotes = [
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        quote: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "Albert Einstein"
    },
    {
        quote: "Logic will get you from A to Z; imagination will get you everywhere.",
        author: "Albert Einstein"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Books are a uniquely portable magic.",
        author: "Stephen King, On Writing: A Memoir of the Craft"
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    },
    {
        quote: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle"
    },
    {
        quote: "Experience is merely the name men gave to their mistakes.",
        author: "Oscar Wilde, The Picture of Dorian Gray"
    },
]

const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuoteItem = quotes[randomIndex]

    quoteMessage.innerText = randomQuoteItem.quote
    quoteAuthor.innerText = randomQuoteItem.author
}

window.addEventListener("load", displayRandomQuote)