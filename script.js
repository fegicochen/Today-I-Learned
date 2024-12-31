const initialFacts = [
	{
		id: 1,
		text: "React is being developed by Meta (formerly facebook)",
		source: "https://opensource.fb.com/",
		category: "technology",
		votesInteresting: 24,
		votesMindblowing: 9,
		votesFalse: 4,
		createdIn: 2021,
	},
	{
		id: 2,
		text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
		source:
			"https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
		category: "society",
		votesInteresting: 11,
		votesMindblowing: 2,
		votesFalse: 0,
		createdIn: 2019,
	},
	{
		id: 3,
		text: "Lisbon is the capital of Portugal",
		source: "https://en.wikipedia.org/wiki/Lisbon",
		category: "society",
		votesInteresting: 8,
		votesMindblowing: 3,
		votesFalse: 1,
		createdIn: 2015,
	},
];

const CATEGORIES = [
	{ name: "technology", color: "#3b82f6" },
	{ name: "science", color: "#16a34a" },
	{ name: "finance", color: "#ef4444" },
	{ name: "society", color: "#eab308" },
	{ name: "entertainment", color: "#db2777" },
	{ name: "health", color: "#14b8a6" },
	{ name: "history", color: "#f97316" },
	{ name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

createFactsList(initialFacts);

function createFactsList(dataArray) {
	const htmlArray = dataArray.map(
		(fact) => `<li class="fact">
	 <p>${fact.text}
      <a class="source" href="${fact.source}" target="_blank">(Source)</a>
        </p>
       <span class="tag" style="background-color: #3b82f6">${fact.category}</span>
	
	</li>`
	);
	console.log(htmlArray);
	const html = htmlArray.join("");

	factsList.insertAdjacentHTML("afterbegin", html);
}

// factsList.insertAdjacentHTML("afterbegin", "<li>Fegico</li>");
// factsList.insertAdjacentHTML("afterbegin", "<li>Chen</li>");

// Toggle form visibility
btn.addEventListener("click", function () {
	if (form.classList.contains("hidden")) {
		form.classList.remove("hidden");
		btn.textContent = "Close";
	} else {
		form.classList.add("hidden");
		btn.textContent = "Share a fact";
	}
});

/*
const text = "Libson is the capital of Portugal";
votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("upvotes", totalUpvotes);
console.log(text);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
*/
// function calcFactAge(year) {
// 	const currentYear = new Date().getFullYear();
// 	const age = currentYear - year;

// 	if (age >= 0) {
// 		return age;
// 	} else {
// 		return `Impossible year. Year needs to be less than or equal to ${currentYear}`;
// 	}
// }

// const age1 = calcFactAge(2014);
// console.log(age1);
// console.log(calcFactAge(2020));
// console.log(calcFactAge(2037));

// const calcFactAge2 = (year) =>
// 	year <= new Date().getFullYear()
// 		? new Date().getFullYear() - year
// 		: `Impossible year. Year needs to be less than or equal to ${new Date().getFullYear()}`;
// console.log(calcFactAge2(2014));
// console.log(calcFactAge2(2037));

/*
let votesInteresting = 20;
let votesMindblowing = 2;

if (votesInteresting === votesMindblowing) {
	alert("This fact is equally interesting and mindblowing!");
} else if (votesInteresting > votesMindblowing) {
	console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
	console.log("Mindblowing fact!");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message = totalUpvotes > votesFalse ? "fact true" : "maybe fact false";

// alert(message);

const text = "Libson is the capital of Portugal";

const str = `The current fact is "${text}". It is ${calcFactAge(2015)} years old. It is probably ${totalUpvotes > votesFalse ? "correct" : "not true"}.`;
console.log(str);
*/

/*
const fact = ["Libson is the capital of Portugal", 2015, true, "something"];
console.log("this is the fact", fact);
console.log(fact[0], fact[1], fact[2], fact[3]);
console.log(fact.length);
console.log(fact[fact.length - 1]);



const [text, createdIn] = fact;
console.log(text);
console.log(createdIn);

const newFact = [...fact, "society"];
console.log(newFact);

const newFact2 = fact.concat("society");
console.log(newFact2);

const factObj = {
	text: "Libson is the capital of Portugal",
	category: "society",
	createdIn: 2015,
	isCorrect: true,
	createSummary: function () {
		return `The fact ${this.text} is from the category ${this.category.toUpperCase()}`;
	},
};
console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);

console.log(factObj.createSummary());

arr = [2, 4, 6, 8];

// arr.forEach(function (el) {
// 	console.log(el, "hi");
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
// 	return el * 10;
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);

console.log(times10);

const CATEGORIES = [
	{ name: "technology", color: "#3b82f6" },
	{ name: "science", color: "#16a34a" },
	{ name: "finance", color: "#ef4444" },
	{ name: "society", color: "#eab308" },
	{ name: "entertainment", color: "#db2777" },
	{ name: "health", color: "#14b8a6" },
	{ name: "history", color: "#f97316" },
	{ name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((obj) => obj.name);
console.log(allCategories);

const initialFacts = [
	{
		id: 1,
		text: "React is being developed by Meta (formerly facebook)",
		source: "https://opensource.fb.com/",
		category: "technology",
		votesInteresting: 24,
		votesMindblowing: 9,
		votesFalse: 4,
		createdIn: 2021,
	},
	{
		id: 2,
		text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
		source:
			"https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
		category: "society",
		votesInteresting: 11,
		votesMindblowing: 2,
		votesFalse: 0,
		createdIn: 2019,
	},
	{
		id: 3,
		text: "Lisbon is the capital of Portugal",
		source: "https://en.wikipedia.org/wiki/Lisbon",
		category: "society",
		votesInteresting: 8,
		votesMindblowing: 3,
		votesFalse: 1,
		createdIn: 2015,
	},
];

const factAges = initialFacts.map((obj) => calcFactAge(obj.createdIn));
console.log(factAges);
console.log(factAges.join("-"));
*/