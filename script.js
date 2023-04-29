const quotes = [
	"When you eat, use your mouth - Haris",
	"when you sleep, close your eyes - Another Haris",
	"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
	"The way to get started is to quit talking and begin doing. - Walt Disney",
	"If life were predictable, it would cease to be life, and be without flavor. - Eleanor Roosevelt",
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
	"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
	"Life is what happens when you're busy making other plans. - John Lennon"
]

const images = [
"https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
"https://static.vecteezy.com/system/resources/previews/002/002/427/original/man-avatar-character-isolated-icon-free-vector.jpg",
"https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
"https://static.vecteezy.com/system/resources/previews/002/002/300/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg",
"https://static.vecteezy.com/system/resources/previews/001/993/889/original/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
"https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg",
"https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg",
"https://static.vecteezy.com/system/resources/previews/006/735/770/original/beautiful-woman-avatar-profile-icon-vector.jpg"
]

function setQuote() {
	const quote = document.getElementById('quote');
	const author = document.getElementById('author');
	
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];
	const randomImage = images[randomIndex];

	document.getElementById("image").src = randomImage;
	const quoteParts = randomQuote.split(' - ');
	console.log(quoteParts);
	quote.innerHTML = quoteParts[0];
	author.innerHTML = `- ${quoteParts[1]}`;
}