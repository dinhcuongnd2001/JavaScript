var date = 2;

switch(date){
    case 2:
        console.log('hom nay la thu 2');
        break;
    case 3:
        console.log('hom nay la thu 3');
        break;
    case 4:
        console.log('hom nay la thu 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;
    default :
        console.log('Vay hom nau la thu may');
}

// Toan tu 3 ngoi: terany operator

var course = {
    name:"JavaScript",
    coin: 0
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi'
console.log(result)
