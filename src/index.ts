import { getAnimeInfos} from "./anime_service";
import { showAllAnimes, showAnimesByTitle, showAnimesByGenre } from "./anime";
import { task } from "./libs/helper";
import { Info } from "./types/anime";


// let animesByTitle = await getAnimesByTitle('dragon');

let getInformation = async () =>
{
    let infos = await getAnimeInfos() as {publishers:string[], tags:Info[]};

    createGenres(infos.tags);
    createPublishers(infos.publishers)
}

let createGenres = async (genres:Info[]) =>
{
    let g = document.getElementById('genres');

    if(!g) return;

    let all_genre = document.getElementsByClassName('genre_list')[0];

    if(!all_genre)
        return;

    all_genre.addEventListener('click', async () => {
        await showAllAnimes()
    })
    
    await task(async() => {
        for(let genre of genres)
        {
            let genre_list = document.createElement('li');
            genre_list.className = 'genre_list';
            genre_list.innerHTML = `<p>${genre.tag}</p><p>${genre.count}</p>`
            
            genre_list.addEventListener('click', async () => {
                await showAnimesByGenre(genre.tag)
            })
            
            g.appendChild(genre_list);
        }
    })
}

let createPublishers = (publishers:string[]) =>
{
    let pl = document.getElementById('publisher_list')

    if(!pl) return;

    for(let p of publishers)
    {
        let publisher_list_item = document.createElement('option');
        publisher_list_item.className = 'publisher_list_item';
        publisher_list_item.value = p;
        publisher_list_item.innerText = p;

        publisher_list_item.addEventListener('click', () => {
            // console.log(publisher_list_item.value);
        })

        pl.appendChild(publisher_list_item);
    }
}

let animeSearchInput = async () =>
{
    let input = document.getElementById('input_text') as HTMLInputElement;
    
    if(!input) return;

    input.addEventListener('input', async () => {
        console.log(input.value)
        await showAnimesByTitle(input.value)
    })
}

animeSearchInput();
// showAllAnimes();
getInformation();