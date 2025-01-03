import { Anime} from "./types/anime";

const url = 'https://scraped-api.vercel.app/api/animes';

const options = {method:'GET', headers: { 'Content-Type': 'application/json' }}

export let getAnimes = async () =>
{
    return await fetch(url, options).then(x => {return x.json()}) as Anime[]
}

export let getAnimeInfos = async () =>
{
    return await fetch(url+'?info=true', options).then(x => {return x.json()})
}

export let getAnimesByRating = async (rating:string) =>
{
    return await fetch(url+'?rating='+rating, options).then(x => {return x.json()}) as Anime[]
}

export let getAnimesByPublisher = async (publisher:string) =>
{
    return await fetch(url+'?publisher='+publisher, options).then(x => {return x.json()}) as Anime[]
}

export let getAnimesByGenre = async (genre:string) =>
{
    return await fetch(url+'?genre='+genre, options).then(x => {return x.json()}) as Anime[]
}

export let getAnimesByTitle = async (title:string) =>
{
    return await fetch(`${url}?title=${title}`, options).then(x => {return x.json()}) as Anime[]
}