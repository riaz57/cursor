const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const output = document.querySelector('#output .text');
let season = '';

const arrMonth = ['বৈশাখ','জ্যৈষ্ঠ','আষাঢ','শ্রাবণ','ভাদ্র','আশ্বিন','কার্তিক','অগ্রহায়ণ','পৌষ','মাঘ','ফাল্গুন','চৈত্র'];
const arrNum = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
const afterDate = {la:'লা', ra:'রা', tha:'ঠা', i:'ই', she:'শে'};
const seasonArray = ['গ্রীষ্মকাল', 'বর্ষাকাল', 'শরৎকাল', 'হেমন্তকাল', 'শীতকাল', 'বসন্তকাল'];

const convert = (date)=> {

    const EnYear = parseInt(date.slice(0, 4));
    const EnMonth = date.slice(5, 7);
    const EnDay = parseInt(date.slice(8, 10));

    const zeroRemover = parseInt(EnMonth
        .split('')
        .filter( (item) => {return item!=0;})
        .join(''));

    const bnYear = (EnDay, zeroRemover, EnYear)=> {
        if(EnDay <= 13 && zeroRemover <=4) {
            return EnYear = EnYear - 594;
        } else {
            return EnYear = EnYear - 593;
        }
    }

    const dateMonth = (month, date, year)=> {
        switch (true) {
            case month == 1 && date > 14:
                month = 10;
                date = date - 14;
                season = 4;
                break;
            case month == 1 && date <= 14:
                month = 9;
                date = date + 16;
                season = 4;
                break;
            case month == 2 && date > 13:
                month = 11;
                date = date - 13;
                season = 5;
                break;  
            case month == 2 && date <= 13:
                month = 10;
                date = date + 17;
                season = 4;
                break;
            case month == 3 && date > 14 && (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) == true:
                month = 12;
                date = date - 14;
                season = 5;
                break;
            case month == 3 && date > 14:
                month = 12;
                date = date - 14;
                season = 5;
                break;
            case month == 3 && date <= 14 && (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)):
                month = 11;
                date = date + 16;
                season = 5;
                break;
            case month == 3 && date <= 14:
                month = 11;
                date = date + 15;
                season = 5;
                break;
            case month == 4 && date > 13:
                month = 1;
                date = date - 13;
                season = 0;
                break;
            case month == 4 && date <= 13:
                month = 12;
                date = date + 17;
                season = 5;
                break;
            case month == 5 && date > 14:
                month = 2;
                date = date - 14;
                season = 0;
                break;
            case month == 5 && date <= 14:
                month = 1;
                date = date + 16;
                season = 0;
                break;
            case month == 6 && date > 14:
                month = 3;
                date = date - 14;
                season = 1;
                break;
            case month == 6 && date <= 14:
                month = 2;
                date = date + 16;
                season = 0;
                break;
            case month == 7 && date > 14:
                month = 4;
                date = date - 14;
                season = 1;
                break;
            case month == 7 && date <= 14:
                month = 3;
                date = date + 16;
                season = 1;
                break;
            case month == 8 && date > 15:
                month = 5;
                date = date - 15;
                season = 2;
                break;
            case month == 8 && date <= 15:
                month = 4;
                date = date + 15;
                season = 1;
                break;
            case month == 9 && date > 15:
                month = 6;
                date = date - 15;
                season = 2;
                break;
            case month == 9 && date <= 15:
                month = 5;
                date = date + 15;
                season = 2;
                break;
            case month == 10 && date > 15:
                month = 7;
                date = date - 15;
                break;
            case month == 10 && date <= 15:
                month = 6;
                date = date + 15;
                season = 2;
                break;
            case month == 11 && date > 15:
                month = 8;
                date = date - 15;
                season = 3;
                break;
            case month == 11 && date <= 15:
                month = 7;
                date = date + 15;
                season = 3;
                break;
            case month == 12 && date > 15:
                month = 9;
                date = date - 15;
                season = 4;
                break;
            case month == 12 && date <= 15:
                month = 8;
                date = date + 15;
                season = 4;
                break;
            default:
                month = false;
                date = false;
                season = false;
                break;
        }

        return {
            month: month - 1,
            date: date,
            season: season
        }
    }

    const resultDateMonth = dateMonth(zeroRemover, EnDay, EnYear);
    const resultDate = resultDateMonth.date.toString().split('').map( (item) => arrNum[item]).join('');
    const resultMonth = resultDateMonth.month.toString();
    const resultYear = bnYear(EnDay, zeroRemover, EnYear).toString().split('').map( (item) => arrNum[item]).join('');
    const resultSeason = resultDateMonth.season.toString();

    const bnAfterDate = (num)=> {
        if(num == '১' ) {
            return afterDate.la;
        }
        if(num == '২' || num == '৩') {
            return afterDate.ra;
        }
        if(num == '৪') {
            return afterDate.tha;
        }
        if(num >= '৫' || num <= '১৮') {
            return afterDate.i;
        }
        if(num >= '১৯' || num <= '৩১') {
            return afterDate.she;
        }
    }

    output.innerHTML = `${resultDate}${bnAfterDate(resultDate)} ${arrMonth[resultMonth]}, ${resultYear} বঙ্গাব্দ, ${seasonArray[resultSeason]} `;

}

input.addEventListener('change', ()=> {
    const date = input.value;
    convert(date);
});
// submit.addEventListener('click', function () {
    
// });