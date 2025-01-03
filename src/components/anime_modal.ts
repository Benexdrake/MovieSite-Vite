import { Anime } from "../types/anime";

export let animeModal = (anime: Anime) => {
    let modal = document.getElementById('anime-modal') as HTMLDivElement

    if (!modal) return;

    modal.style.display = 'block';

    modal.innerHTML = `
        <div>
            <h1>${anime.title}</h1>
        </div>
        <div style="display: inline;">
            <img src="${anime.imageUrl}"
                alt="">
        </div>
        <div style="display: inline;">
        </div>
        <div id="anime-modal-footer">
        ${anime.tags}
        </div>
    `

}