export const vndConverter = (vnd) => {
    if (vnd != undefined) {
        return vnd.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        // return vnd.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    return vnd;
}

export const formatTime = (timestring) => {
    if (timestring != undefined) {
        var fullDate = new Date(timestring);
        var twoDigitMonth = fullDate.getMonth() + "";
        if (twoDigitMonth.length == 1)
            twoDigitMonth = "0" + (parseInt(twoDigitMonth) + 1);
        var twoDigitDate = fullDate.getDate() + "";
        if (twoDigitDate.length == 1)
            twoDigitDate = "0" + twoDigitDate;
        var twoDigitHour = fullDate.getUTCHours() + "";
        if(twoDigitHour.length == 1) 
            twoDigitHour = '0' + twoDigitHour;
        var twoDigitMinute = fullDate.getUTCMinutes() + "";
        if(twoDigitMinute.length == 1) 
            twoDigitMinute = '0' + twoDigitMinute;
        var  twoDigitSecond = fullDate.getUTCSeconds() + "";
        if(twoDigitSecond.length == 1) 
            twoDigitSecond = '0' + twoDigitSecond;
        var currentDate = twoDigitDate + "-" + twoDigitMonth + "-" + fullDate.getFullYear() + " " 
            + twoDigitHour + ':' + twoDigitMinute + ':' + twoDigitSecond;
        return currentDate;
    }
    return null;
}