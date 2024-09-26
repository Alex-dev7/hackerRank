// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    // Write your code here

    const time = s.split(':')
    time[2] = time[2].slice(0, -2)


    if(s.includes("PM")){
        time[0] == '12' ? time[0] == '00' : time[0] = 12 + parseInt(time[0]) 

    } 
    else {
        if(time[0] === '12') {
            time[0] = '00'
        }
       
    }
    return time.join(':')
}

console.log(timeConversion('12:05:45PM')) // output: 19:05:45
