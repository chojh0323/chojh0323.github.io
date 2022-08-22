/*
<!-- 갤러리 UI 템플릿 -->

<div class="imageGallery" id="gallery1" data-page="0">                                                                                <!-- gallery id 설정 -->
    <h1>전시 아카이브 (이미지 선별 필요)</h1>                                                                                  <!-- 제목 추가 (자유) -->
    <div class="galleryWrapper">
        <img src="./src/introduce/icon_prev.svg" class="controller" onclick="galleryPrev('gallery1')">              <!-- galleryPrev('갤러리 id') 설정 -->
        <div class="images">
            <div class="center"><div style="background-image: url('./src/introduce/img_00001.jpg');"></div></div>
            <!-- 이미지 추가 ... -->
        </div>
        <img src="./src/introduce/icon_next.svg" class="controller" onclick="galleryNext('gallery1')">              <!-- galleryNext('갤러리 id') 설정 -->
    </div>
    <p class="pageNum"></p>
</div>

*/


// 갤러리 페이지 넘버링 초기화
let gallery = document.querySelectorAll(".imageGallery");
for (i = 0; i < gallery.length; i++) {
    galleryEnd = gallery[i].querySelectorAll(`.images > div`).length;
    console.log(galleryEnd);
    gallery[i].querySelector(".pageNum").innerHTML = `1 / ${galleryEnd}`;
}

// 갤러리 이전, 다음
function galleryPrev(galleryId) {
    let galleryImgs = document.querySelectorAll(`#${galleryId} .images > div`);
    let galleryPageDisplay = document.querySelector(`#${galleryId} .pageNum`);

    let galleryPage = document.getElementById(galleryId).dataset.page;
    let galleryEnd = galleryImgs.length;
    
    if ( galleryPage == 0 ) {
        galleryImgs[0].classList.remove("center");
        galleryImgs[0].classList.add("left");
        for (i = 1; i < galleryEnd-1; i++){
            galleryImgs[i].classList.remove("right");
            galleryImgs[i].classList.add("left");
        }
        galleryImgs[galleryEnd-1].classList.remove("right");
        galleryImgs[galleryEnd-1].classList.add("center");
        document.getElementById(galleryId).dataset.page = galleryEnd-1;
    } else {
        galleryImgs[galleryPage].classList.remove("center");
        galleryImgs[galleryPage].classList.add("right");
        galleryImgs[galleryPage-1].classList.remove("left");
        galleryImgs[galleryPage-1].classList.add("center");
        document.getElementById(galleryId).dataset.page--;
    }

    galleryPageDisplay.innerHTML = `${Number(document.getElementById(galleryId).dataset.page)+1} / ${galleryEnd}`;
}

function galleryNext(galleryId) {
    let galleryImgs = document.querySelectorAll(`#${galleryId} .images > div`);
    let galleryPageDisplay = document.querySelector(`#${galleryId} .pageNum`);

    let galleryPage = Number(document.getElementById(galleryId).dataset.page);
    let galleryEnd = galleryImgs.length;

    if ( galleryPage == galleryEnd-1 ) {
        galleryImgs[galleryEnd-1].classList.remove("center");
        galleryImgs[galleryEnd-1].classList.add("right");
        for (i = 1; i < galleryEnd-2; i++){
            galleryImgs[i].classList.remove("left");
            galleryImgs[i].classList.add("right");
        }
        galleryImgs[0].classList.remove("left");
        galleryImgs[0].classList.add("center");
        document.getElementById(galleryId).dataset.page = 0;
    } else {
        galleryImgs[galleryPage].classList.remove("center");
        galleryImgs[galleryPage].classList.add("left");
        galleryImgs[galleryPage+1].classList.remove("right");
        galleryImgs[galleryPage+1].classList.add("center");
        document.getElementById(galleryId).dataset.page++;
    }
    
    galleryPageDisplay.innerHTML = `${Number(document.getElementById(galleryId).dataset.page)+1} / ${galleryEnd}`;
}
