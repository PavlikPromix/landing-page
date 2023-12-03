new Typed(".hello", {
	strings: ["Привет!", "Hello!", "Bonjour!", "Hallo!", "¡Hola!", "Hello!"],
	typeSpeed: 30,
	backSpeed: 30,
	cursorChar: "",
});

const nav = document.querySelector(".navbar");
window.onscroll = function () {
	if (
		document.body.scrollTop >= 10 ||
		document.documentElement.scrollTop >= 10
	) {
		nav.classList.add("nav-show");
		nav.classList.remove("nav-hide");
	} else {
		nav.classList.add("nav-hide");
		nav.classList.remove("nav-show");
	}
};

// Page 2
const observer = new IntersectionObserver((e) => {
	e.forEach((entry) => {
		if (entry.isIntersecting) {
			if (
				entry.target.classList.contains("icon") ||
				entry.target.classList.contains("gallerylogo")
			) {
				entry.target.classList.add("fadein");
			} else if (entry.target.classList.contains("abouttext")) {
				entry.target.classList.add("showleft");
				downarrow.classList.add("fadeout");
				new Typed(".functionalword", {
					strings: ["functional"],
					typeSpeed: 70,
					backSpeed: 30,
					cursorChar: "",
					startDelay: 2000,
				});
			} else if (entry.target.classList.contains("gallery")) {
				entry.target.classList.add("fromdown");
			} else if (entry.target.classList.contains("link")) {
				entry.target.classList.add("iconshow");
			}
		}
	});
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

let skills = [
	"C#",
	"C++",
	"JavaScript",
	"Python",
	"графический дизайн",
	"верстку",
	"веб-дизайн",
	"PostgreSQL",
	"Adobe Illustrator",
	"Adobe Photoshop",
	"Adobe After Effects",
	"React",
	"Tailwind",
	"Cmake",
	"SFML",
	"SDL",
	".NET MAUI",
	"Prisma ORM",
	"PocketBase",
	"Entity Framework",
	"структуры данных",
];

mail.onclick = () => {
	navigator.clipboard.writeText("3raflipper@gmail.com");
	let alertelem = document.createElement("div");
	alertelem.className = "alert";
	alertelem.textContent = "Copied!";
	document.body.appendChild(alertelem);
	setTimeout(() => {
		alertelem.remove();
	}, 3000);
};
