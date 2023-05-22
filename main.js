const selectManager = document.querySelector('.select-manager');
const wSelectOfC = document.getElementById('wSelectOfC');
const selectManagerBlock = document.getElementById('selectManagerBlock');
wSelectOfC.addEventListener('change', (e)=>checkSubject(e.target))
selectManager.addEventListener('click', (e)=> clickManager(e.target))

function checkSubject(e) {
    selectManagerBlock.classList.remove('none');
    selectManager.innerHTML='';
    users.forEach(u =>{
        if(u.subject.includes(e.value)){
            renderManager(u)
        }
    })
}
function renderManager(user) {
    selectManager.insertAdjacentHTML('beforeend', `<img data-m="${user.id}" class="img-manager" src="${url}${user.photo_link}">`)
}

function clickManager(e) {
    const allImg = selectManager.querySelectorAll('.img-manager');
    const la= allImg.length;
    for (let i =0;i<la; i++){
        if(allImg[i].dataset.m === e.dataset.m){
            allImg[i].classList.add('selected');
        }else{allImg[i].classList.remove('selected');}
    }
    startCalTwoWeek()
}

// days
// const currentDate = new Date('2023/06/3');
// const getT = new Date('2023/06/3').getTime();

// const currentDate = new Date('2023/05/31');
// const getT = new Date('2023/05/31').getTime();

const currentDate = new Date();
const getT = new Date().getTime();
const weekStart = currentDate.getDate() - currentDate.getDay()+1;
let curr;
const weeksDates = new Array(14).fill(0).map((_, idx) => {
    const date = new Date(currentDate);
    date.setDate(weekStart + idx);
    curr = date.getTime();
    const d= date.getDay();
    return {day:date.getDate(),day_week:d, curr: curr};
});
console.log(weeksDates)
console.log("currentDate: " +currentDate)
const lw=weeksDates.length;
let inner = '';
// render days
const bodyCal = document.getElementById('calBody');
const checkW = new Date(getT).getDay();
const selectTime = document.getElementById('selectTime');
const wSelectDate = document.getElementById('wSelectDate');
const wSelectTime = document.getElementById('wSelectTime');


function startCalTwoWeek (){
    wSelectDate.classList.remove('none');
    for (let i=0;i<lw;i++){
        let t_day = 'work';
        if(weeksDates[i].day_week === 6 || weeksDates[i].day_week === 0){
            t_day="weekend";
        }else if(weeksDates[i].curr < getT){
            t_day="past";
        }
        inner+=`<span data-curr="${weeksDates[i].curr}" class="cal-body-box ${t_day}">${weeksDates[i].day}</span>`;
    }
    bodyCal.innerHTML = inner;
    setCurrentDate()
}

function setCurrentDate() {
    const all = document.querySelectorAll('.cal-body-box:not(.past)')

    const gt = getT.toString();
    const la= all.length;
    let addD;
    if (checkW === 6) {
        addD = 2;
    } else if (checkW === 0) {
        addD = 1;
    } else {
        addD = 0;
    }
    for (let i =0;i<la; i++){
        if(all[i].dataset.curr === gt){
            all[i+addD].classList.add('selected')
            all[i].classList.add('today')
        }
        if(all[i].dataset.curr === gt && addD === 0){
            renderTimeDay(all[i].dataset.curr)
        }
    }
}

document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('work')){
        clickDate(e.target);
    }
})

function clickDate(e) {
    const all = bodyCal.querySelectorAll('.work');
    const la= all.length;

    for (let i =0;i<la; i++){
        if(all[i].innerText === e.innerText){
            all[i].classList.add('selected');
            renderTimeDay(all[i].dataset.curr)
        }else{all[i].classList.remove('selected');}
    }
}




// time
// console.log(tasks[0].term_date)

function renderTimeDay(date) {
    wSelectTime.classList.remove('none');

    if(currentDate.getDay() === new Date(+date).getDay() && currentDate.getHours()<16){
        console.log('сегодня');
    }else{
        selectTime.innerHTML = '<p class="none-time">На выбранную дату нет свободного времени.<span>Попробуйте выбрать другого специалиста или дату.</span></p>';
    }
}


const now = new Date();
const end = now.setHours(16, 0, 0);

// console.log(new Date(end))

