export interface IClientRequest {
    name: string
    email: string
    phone: string
    sector: string
    photo: string
}


export interface IClientResponse {
    id: string
    name: string
    email: string
    phone: string
    sector: string
    photo: string
    createdAt: Date
}


export interface IClientUpdate {
    name?: string
    email?: string
    phone?: string
    sector?: string
    photo?: string

}