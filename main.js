const selectManager = document.querySelector('.select-manager');
const wSelectOfC = document.getElementById('wSelectOfC');
const selectManagerBlock = document.getElementById('selectManagerBlock');
wSelectOfC.addEventListener('change', (e)=>checkSubject(e.target))
selectManager.addEventListener('click', (e)=>renderTime(e.target))

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
function renderTime(e) {
    console.log(e)
}
