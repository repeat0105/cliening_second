let maindiv = document.querySelector('.main > div');

    
fetch('./data.json')
.then((res) => res.json())
.then((data) => {

        let lecturetitleUp = localStorage.getItem('lecturetitleUp');
        
        $('.main > div').html('');
        let tag = ``;
        data.mainjson.forEach(function (a) {
        
            if(a.title === lecturetitleUp ) {
                tag += `
                <article class="mainTitle">
                    <div><span>${a.title}</span></div>
                    <div>
                        <p><a href="./board.html">게시판</a></p>
                        <p><a href="./suggestion.html">추천글</a></p>
                    </div>
                </article>
                <div>
                    <h1>${a.title}</h1>
                    <div>
                        
                        <p><a href="./index.html">HOME</a></p>
                        <p><a href=${a.url} target="_blank">해당 사이트 이동</a></p>
                        <p><a href="#">추천<span class="reviewcu">${a.suggestion}</span></a></p>
                    </div>
                    <p><img src=${a.imgUp} height="660px"></p>
                    <div>
                        <p>
                            ${a.contentDowon}
                        </p>
                    </div>
                    <div>
                        
                        <p><a href="./index.html">HOME</a></p>
                        <p><a href=${a.url} target="_blank">해당 사이트 이동</a></p>
                        <p><a href="#">추천<span class="reviewcutwo">${a.suggestion}</span></a></p>
                    </div>
                </div>
                `
            
            }
            
        })

        $('.main > div').append(tag)

        let reviewcu = document.querySelector('.reviewcu');
        let reviewcutwo = document.querySelector('.reviewcutwo');

        let reviewcua = reviewcu.parentElement;
        let j = 0;

        reviewcua.onclick = function (e) {
            e.preventDefault();
            reviewcu.innerHTML = ++j;
            reviewcutwo.innerHTML = ++jtwo;
        }

        let reviewcuatwo = reviewcutwo.parentElement;
        let jtwo = 0;

        reviewcuatwo.onclick = function (e) {
            e.preventDefault();
            reviewcu.innerHTML = ++j;
            reviewcutwo.innerHTML = ++jtwo;
        }
    }
)

let sidebarSpan = document.querySelectorAll('.side-bar a');  
let clienSideNum ;
sidebarSpan.forEach((a) => {
    a.onclick = function () {
        
        clienSideNum= localStorage.setItem('clienSideNum', a.textContent.trim().substring(0,4))
    }
});

asidetop.onclick = function () {
    window.scrollTo({
        top:100,
        left:0,
        behavior: 'smooth'
    })
}

let headerHam = document.querySelector('header >div:nth-of-type(1) > a')
let sidebaractive = document.querySelector('.side-bar');
headerHam.addEventListener('click', function () {
    sidebaractive.classList.toggle('active');
    
})