// 스크롤 내리면 Opacity 1로 변하는 애니메이션
document.addEventListener('scroll', (e) => {
    let position = document.documentElement.scrollTop + window.innerHeight;
    let credit = document.querySelectorAll(".anim-opacity");
    let i = 0;
    
    for (i = 0; i < credit.length; i++) {
        if (credit[i].offsetTop+100 < position) {
            credit[i].classList.remove("anim-opacity");
            credit[i].classList.add("anim-opacity-vis");
        }
    }
});
