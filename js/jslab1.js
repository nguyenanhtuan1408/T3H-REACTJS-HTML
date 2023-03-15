const random = () => {
    const ArrJackpot = [];
    do {
        const a = parseInt(String(Math.random() * 54+1));
        ArrJackpot.push(a);
    } while (ArrJackpot.length < 6);
    return ArrJackpot;
};
const nhapso = () => {
    const ArrNhapso = [];
    do {
        let b = prompt("Nhập số may mắn của bạn từ 1->55:");
        b = parseInt(b);
        if (b < 0 || b > 55) {
            b = NaN;
        }
        while (isNaN(b)) {
            let b = prompt("Nhập số may mắn của bạn từ 1->55:");
            b = parseInt(b);
            if (b < 0 || b > 55) {
                b = NaN;
            }
        }
        ArrNhapso.push(b);
    }while (ArrNhapso.length < 6);
    return ArrNhapso;
};
const isTrue = (arrNhapso, arrRandom, sumCheckDone) => {
    if (arrNhapso.length === arrNhapso.length) {
        for (let i = 0; i < arrRandom.length; i++) {
            if (arrRandom[i] === arrRandom[i]) {
                return sumCheckDone++;
            }
        }
        return sumCheckDone;
    }
};
const checkJp = (random, nhapso) => {
    let msg = '';
    let sumCheckDone = 0;
    const arrRandom = random.sort((a,b)=>a-b);
    const arrNhapso = nhapso.sort((a,b)=>a-b);
    const sum = isTrue(arrNhapso, arrRandom, sumCheckDone);
    switch (sum) {
        case 1:
            msg = 'Rất tiếc, bạn chưa trúng thưởng ';
            break;
        case 2:
            msg = 'Rất tiếc, bạn chưa trúng thưởng';
            break;
        case 3:
            msg = 'Chúc mừng bạn đã trúng giải 3 số với trị giá 200.000';
            break;
        case 4:
            msg = 'Chúc mừng bạn đã trúng giải 4 số với trị giá 1.700.000';
            break;
        case 5:
            msg = 'Chúc mừng bạn đã trúng giải 5 số với trị giá 82.500.000';
            break;
        case 6:
            msg = 'Chúc mừng bạn đã trúng giải 6 số Jackpot với trị giá 30.000.000.000';
            break;
    }
    return msg;
};
// console.log(random());
// console.log(nhapso());
console.log(checkJp(random(), nhapso()));

