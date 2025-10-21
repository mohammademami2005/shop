export default async function FechData(url:string) {
    const data = await fetch(url)
    if(!data) throw new Error("filed to fech data")
    return data.json()
}