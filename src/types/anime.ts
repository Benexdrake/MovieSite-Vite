export type Anime =
{
    _id:string;
    title:string;
    description:string;
    rating:number;
    seasons:number;
    episodes:number;
    language:string;
    url:string;
    imageUrl:string;
    tags:string[]
}

export type Info =
{
    tag:string;
    count:number;
}