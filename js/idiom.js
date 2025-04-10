const audios = {
    pt: new Audio("./assets/audio/pt.mp3"),
    en: new Audio("./assets/audio/en.mp3"),
    es: new Audio("./assets/audio/es.mp3")
};

function abrirPopover(id) {
    const popover = document.getElementById(`popover-${id}`);
    const all = document.querySelectorAll(".popover-text");
    all.forEach(p => {
        if(p.id !== `popover-${id}`) p.style.display = "none";
    });
    popover.style.display = popover.style.display === "block" ? "none" : "block";
}

function listen(id) {
    // Pausar todos os áudios antes de tocar
    Object.values(audios).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  
    audios[id].play();
  }