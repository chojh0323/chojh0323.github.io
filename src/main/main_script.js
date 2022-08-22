// 레이아웃 랜덤
const layoutSetting = document.querySelector("#mainLayout");
let randNum = Math.floor(Math.random()*1000)%3+1;
switch(randNum) {
    case 1:
        layoutSetting.innerHTML = `@import url("./src/main/main_a.css")`;
        break;
    case 2:
        layoutSetting.innerHTML = `@import url("./src/main/main_b.css")`;
        break;
    case 3:
        layoutSetting.innerHTML = `@import url("./src/main/main_c.css")`;
        break;
}

// msgbox 마우스 따라다니기
const msgbox = document.getElementById("mouse"); // 메시지박스
document.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let positionX = window.scrollX;
    let positionY = window.scrollY;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    if(mouseX + msgbox.clientWidth + 14 > winWidth ){ // 윈도우 오른쪽과 충돌방지 한 x 좌표
        msgbox.style.left = winWidth - msgbox.clientWidth - 14;
    } else {
        msgbox.style.left = mouseX + positionX + 'px';
    }
    msgbox.style.top = mouseY + positionY + 30 + 'px';
});


// comment 셀에 마우스 올리면 msgbox 보이기 / msgbox에 data-comment 넣어주기
const gridWrapper = document.querySelector('.gridWrapper'); // 이벤트 버블링으로 이벤트 식별
gridWrapper.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('comment')){
        msgbox.style.opacity = 1;
        msgbox.innerHTML = `${e.target.dataset.comment}<br><span>/ ${e.target.dataset.author}</span>`;
    }
});
gridWrapper.addEventListener('mouseout', (e) => {
    if(e.target.classList.contains('comment')){
        msgbox.style.opacity = 0;
    }
});
