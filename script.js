const mediaItems =
document.querySelectorAll(".media-item");

const nextBtn =
document.getElementById("nextMedia");

const prevBtn =
document.getElementById("prevMedia");

let current = 0;
let auto;

/* SHOW */

function showSlide(index){

    mediaItems.forEach(item => {

        item.classList.remove("active");

        const video =
        item.querySelector("video");

        if(video){
            video.pause();
        }

    });

    current = index;

    mediaItems[current]
    .classList.add("active");

    const activeVideo =
    mediaItems[current]
    .querySelector("video");

    if(activeVideo){
        activeVideo.play();
    }

}

/* NEXT */

function nextSlide(){

    current =
    (current + 1)
    % mediaItems.length;

    showSlide(current);
}

/* PREV */

function prevSlide(){

    current =
    (current - 1 + mediaItems.length)
    % mediaItems.length;

    showSlide(current);
}

/* AUTO */

function startAuto(){

    auto =
    setInterval(nextSlide, 4500);

}

function resetAuto(){

    clearInterval(auto);

    startAuto();
}

/* EVENTS */

nextBtn.addEventListener("click", () => {

    nextSlide();

    resetAuto();

});

prevBtn.addEventListener("click", () => {

    prevSlide();

    resetAuto();

});

/* START */

startAuto();