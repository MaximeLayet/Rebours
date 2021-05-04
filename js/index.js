const text = document.querySelector("h2");

function getChrono() {
	const now = new Date().getTime();
	const countDownDate = new Date("July 23, 2021").getTime();

	const distanceBase = countDownDate - now;

	const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

	text.innerText = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";
	if (seconds < 10) {
		return days + "j " + hours + "h " + minutes + "m " + "0" + seconds + "s";
	}
}

const countDownInterval = setInterval(() => {
	getChrono();
}, 1000);
