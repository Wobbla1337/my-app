export async function getEverything(data) {
    return await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=2d1df031223c4f5db9c820cc2f5f5aa9')
}
