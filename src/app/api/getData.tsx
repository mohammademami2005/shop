
export interface Categories {
  name: string,
  img: string
  id: number
}

export async function getCategory(): Promise<{ category: Categories[] | null, error: null | unknown }> {
  try {
    const res = await fetch("https://68fa4adfef8b2e621e7f86c5.mockapi.io/shopify/category-list")
    if (!res.ok) throw new Error("filed to fetch" + res.status)
    const category: Categories[] = await res.json()
    return { category, error: null }
  } catch (err) {
    return { category: null, error: err }
  }
}

export interface AllData {
  name: string
  price: number
  img: string[]
  bestSells: boolean
  category: string
  description: string
  id: number
}

export async function getData(url: string): Promise<{ data: AllData[] | AllData | null, dataError: null | unknown }> {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error("filed to fetch")
    const data: AllData[] = await res.json()
    return { data, dataError: null }
  } catch (err) {
    return { data: null, dataError: err }
  }
}
