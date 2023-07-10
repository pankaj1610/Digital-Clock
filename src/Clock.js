import { useState } from "react";

const getCurrentTime = () => {
	const curerntTime = new Date();
	const hours = curerntTime.getHours();
	const minutes = curerntTime.getMinutes();
	const seconds = curerntTime.getSeconds();
	return [hours, minutes, seconds];
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

	return (
		<div className="clock-container">
			<div className="hrs-container clock-com">{hours % 12}:</div>
			<div className="min-container clock-com">{minutes}:</div>
			<div className="sec-container clock-com">{seconds}</div>
			<span className="text-cont">{hours >= 12 ? "PM" : "AM"}</span>
		</div>
	);
};

export default Clock;
