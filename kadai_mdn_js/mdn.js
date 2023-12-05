const dateObject = new Date(),
    year       = dateObject.getFullYear(),
    month      = dateObject.getMonth(),
    date       = dateObject.getDate();

console.log(year + '年' + (month + 1) + '月' + date + '日');
