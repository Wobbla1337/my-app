const apiUrl = 'https://newsapi.org'
// async funckija rabotaet s Promise/obeshanijem
// Promise eto object kotoryj izmenitca v budushem
// U promise est' 3 sostojanija:
// 1) Pending - iznachalnoe sostojanie
// 2) Fulfilled - esli vse udachno proshlo
// 3) Rejected - esli proizoshla oshibka 
// Promisy nam nuzny dlja to, 4toby nashe prilozenie moglo dalshe rabotat' ne dozidajas otveta
// kluchevoe slovo await mozet ispozlovatca tolko v async funkcijah
// async funkcija vqpolznaetca ne v zavisimosti ot vsego ostalnogo koda
// await priobrazaet object Promise v otvet ot zaprosa
export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,
    })
    return await fetch(`${apiUrl}/v2/everything?${params}`)
}
