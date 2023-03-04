//function to show current time and date
function showTime() {
	//creating date obj
	var timeNow = new Date();

	//get current time
	var hour = timeNow.getHours();
	var min = timeNow.getMinutes();
	var sec = timeNow.getSeconds();
	var meridiem = 'AM';

	if (hour === 0) {
		hour = 12;
	} else {
		if (hour > 12) {
			hour = hour - 12;
			meridiem = 'PM';
		}
	}
	hour = hour < 10 ? '0' + hour : hour;
	min = min < 10 ? '0' + min : min;
	sec = sec < 10 ? '0' + sec : sec;

	var time = hour + ':' + min + ':' + sec +  " " + meridiem;

	document.getElementById('clockDisplay').innerHTML = time;

	//get current date and day
	var months = ['Jan','Feb','Mar','April','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
	var weekdays = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
	var day = weekdays[timeNow.getDay()];
	var today = timeNow.getDate();
	var month = months[timeNow.getMonth()];
	var year = timeNow.getFullYear();

	var dateToday = day + ', ' + today + ' ' + month + ' ' + year;
	document.getElementById('dateDisplay').innerHTML = dateToday;
	
	//execute showtime() every 1s
	setTimeout(showTime, 1000);
}
//generate random color code for background color
function colorCode() {
	var ch = '123456789ABCDEF'.split('');
	var code = '#';
	for (var i = 0; i < 6; i++) {
		code += ch[Math.floor(Math.random() * 15)];
	}
	return code;
}
//event listener to call function when user clicks on button
document.getElementById('btn').addEventListener('click', bgColor);

//change background color of webpage
function bgColor() {
	document.body.style.backgroundColor = colorCode();
}
showTime();
bgColor();
