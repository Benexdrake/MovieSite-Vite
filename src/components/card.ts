import { Anime } from "../types/anime";

export let cardBlock = async (anime:Anime) => 
{
    let card = document.createElement('div')
    card.className = 'card';
    card.style.backgroundImage = `url(${anime.imageUrl})`

    return card;
}