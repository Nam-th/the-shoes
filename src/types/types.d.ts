
type Product = {
    id: string,
    name?: string,
    slug?: string,
    price?: number,
    description?: string,
    quantity?: number,
    sold?: number,
    discount?: string,
    brand_id?: string,
    images?: string[],
    sizes?: string[],
    ratings?: [],
    totalRatings?: number,
    numberOfReview?: number,
}

type UserLogin = {
    username: string,
    password: string,
}