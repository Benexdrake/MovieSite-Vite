export let task = async (callback:any) => {
    await new Promise(() => setTimeout(callback,0))
}