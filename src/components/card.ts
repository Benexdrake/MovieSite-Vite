import { Anime } from "../types/anime";
import { animeModal } from "./anime_modal";

export let cardBlock = async (anime:Anime) => 
{
    let card = document.createElement('div')
    card.className = 'card';
    card.style.backgroundImage = `url(${anime.imageUrl})`

    card.addEventListener('click', () => {animeModal(anime)})

    return card;
}