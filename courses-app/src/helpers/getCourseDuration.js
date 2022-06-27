function GetCourseDuration(string) {
    var inputNum = parseInt(string);

    var hours = Math.floor(inputNum / 60);

    var minutes = inputNum - (hours * 60);

    var aboutHour = (hours < 11) ? '0' + hours : hours;

    var aboutMinutes = (minutes < 11) ? '0' + minutes : minutes;

    var aboutEndHour = (hours < 2) ? ' hour' : ' hours';

    return aboutHour + ':' + aboutMinutes + aboutEndHour;
}

export default GetCourseDuration;