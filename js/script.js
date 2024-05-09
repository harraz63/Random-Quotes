var ArrOfQuotes = [
  {
    author: "--Moamen Eldeeb",
    quote: `“Be yourself; everyone else is already taken.”`,
  },
  { author: "--Frank Zappa", quote: `“So many books, so little time.”` },
  {
    author: "--Marcus Tullius Cicero",
    quote: `“A room without books is like a body without a soul.”`,
  },
  {
    author: "--Ahmed Nour Eldin",
    quote: `“You only live once, but if you do it right, once is enough.”`,
  },
  {
    author: "--NoBody",
    quote: `“Be the change that you wish to see in the world.”`,
  },
  {
    author: "--Mark Twain",
    quote: `“If you tell the truth, you don't have to remember anything.”`,
  },
  {
    author: "--Stephen Chbosky",
    quote: `“We accept the love we think we deserve.”`,
  },
  {
    author: "--Ahmed Harraz",
    quote: `“Without Umm Kulthum, life would be a mistake.”`,
  },
  {
    author: "--Andre Gide",
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
  },
  {
    author: "--Saleh Selim",
    quote: `“Al-Ahly is above all”`,
  },
];

var lastRandom;

function getRandomQuotes() {
  var random;

  // Repeat Generating Process While lastRandom === random
  do {
    random = Math.floor(Math.random() * ArrOfQuotes.length);
  } while (lastRandom === random);

  lastRandom = random;

  document.getElementById("quote-caption").innerHTML =
    ArrOfQuotes[random].quote;
  document.getElementById("quote-author").innerHTML =
    ArrOfQuotes[random].author;
}
