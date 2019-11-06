"use strict";

export function currentDate(key)
{
    const date = new Date();

    return {
        day: date.getDay(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
}

export function addZeroToNumber(input)
{
    return input < 10 ? `0${ input }` : input;
}

export function maxDaysOfMonth(month, year)
{
    let days = 0;

    switch (month) {
        case 1:
            days = 31;
            break;
        case 2:
            if (year % 4)
            {
                days = 29;
            }
            else
            {
                days = 28;    
            }
            break;
        case 3:
            days = 31;
            break;
        case 4:
            days = 30;
            break;
        case 5:
            days = 31;
            break;
        case 6:
            days = 30;
            break;
        case 7:
            days = 31;
            break;
        case 8:
            days = 31;
            break;
        case 9:
            days = 30;
            break;
        case 10:
            days = 31;
            break;
        case 11:
            days = 30;
            break;
        case 12:
            days = 31;
            break;
    }

    return days;
}