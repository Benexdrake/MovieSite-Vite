export let cardBlock = async (anime:any) => 
{
    let card = document.createElement('div')
    card.className = 'card';
    card.style.backgroundImage = `url(${anime.imageUrl})`

    return card;
}