export let task = async (callback:any) => {
    await new Promise((x:any) => setTimeout(callback,0))
}