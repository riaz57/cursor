const div = document.querySelector('#window h2');

const fullDate = new Date();
const date = fullDate.getDate();
const month = fullDate.getMonth() + 1;
const year = fullDate.getFullYear();

const arrMonth = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const arrNum = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
const afterDate = {la:'লা', ra:'রা', tha:'ঠা', i:'ই', she:'শে'};

const bnDate = (num)=> num.toString().split('').map( (n)=> arrNum[n]).join('');
const bnMonth = arrMonth[month];
const bnYear = (num)=> num.toString().split('').map( (n)=> arrNum[n]).join('');

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

div.textContent = `আজ ${bnDate(date)}${bnAfterDate(bnDate(date))} ${bnMonth}, ${bnYear(year)}`;


console.log();





