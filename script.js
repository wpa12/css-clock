function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	const hoursDegrees = ((hours / 12) * 360) + 90;
	const secondsDegrees = ((seconds / 60) * 360) + 90;


	//console.log(hours);
	

	const secondHand = document.querySelector('.secs');
	const minuteHand = document.querySelector('.mins');
	const hourHand = document.querySelector('.hours');


	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;	
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;	

	//console.log(seconds);

}

setInterval(setDate, 1000);