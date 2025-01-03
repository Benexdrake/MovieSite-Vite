import { getAnimes, getAnimesByTitle, getAnimesByPublisher, getAnimesByRating, getAnimesByGenre } from "./anime_service";
import { task } from "./libs/helper";
import { cardBlock } from "./components/card";

export let showAllAnimes = async () => 
{
    let grid = document.getElementById('grid')
    if(!grid) return;

    grid.innerHTML = '';

    await task(async () => {
        let animes = await getAnimes();

        for(let anime of animes.slice(0,27))
        {
            let card = await cardBlock(anime);
            grid.appendChild(card)
        }
    })
}

export let showAnimesByTitle = async (title:string) => {
    let grid = document.getElementById('grid')
    if(!grid) return;

    grid.innerHTML = '';

    await task(async () => {
        let animes = await getAnimesByTitle(title)

        for(let anime of animes.slice(0,27))
        {
            let card = await cardBlock(anime);
            grid.appendChild(card)
        }
    })
}

export let showAnimesByPublisher = async (publisher:string) => {
    let grid = document.getElementById('grid')
    if(!grid) return;

    grid.innerHTML = '';

    await task(async () => {
        let animes = await getAnimesByPublisher(publisher)

        for(let anime of animes.slice(0,27))
        {
            let card = await cardBlock(anime);
            grid.appendChild(card)
        }
    })
}

export let showAnimesByRating = async (rating:string) => {
    let grid = document.getElementById('grid')
    if(!grid) return;

    grid.innerHTML = '';

    await task(async () => {
        let animes = await getAnimesByRating(rating)

        for(let anime of animes.slice(0,27))
        {
            let card = await cardBlock(anime);
            grid.appendChild(card)
        }
    })
}

export let showAnimesByGenre = async (genre:string) => {
    let grid = document.getElementById('grid')
    if(!grid) return;

    grid.innerHTML = '';

    await task(async () => {
        let animes = await getAnimesByGenre(genre)

        for(let anime of animes.slice(0,27))
        {
            let card = await cardBlock(anime);
            grid.appendChild(card)
        }
    })
}