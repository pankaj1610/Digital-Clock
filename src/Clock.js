import { useState } from "react";

const pad = (time) => (time.toString().length <= 1 ? "0" + time : time);

const getCurrentTime = () => {
	const curerntTime = new Date();
	const hours = curerntTime.getHours();
	const minutes = curerntTime.getMinutes();
	const seconds = curerntTime.getSeconds();

	return [hours, pad(minutes), pad(seconds)];
};

const Clock = () => {
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();

	setInterval(() => {
		const [hours, minutes, seconds] = getCurrentTime();
		setHours(hours);
		setMinutes(minutes);
		setSeconds(seconds);
	}, 1000);

	return hours && minutes && seconds ? (
		<div className="clock-container">
			<div className="hrs-container clock-com">{pad(hours % 12)}:</div>
			<div className="min-container clock-com">{minutes}:</div>
			<div className="sec-container clock-com">{seconds}</div>
			<span className="text-cont">{hours >= 12 ? "PM" : "AM"}</span>
		</div>
	) : (
		""
	);
};

export default Clock;
