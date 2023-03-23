export interface IContactRequest {
    name: string
    email: string
    phone: string
    sector: string
    photo: string
    linkedin: string
}


export interface IContactResponse {
    id: string
    name: string
    email: string
    phone: string
    sector: string
    photo: string
    createdAt: Date
    linkedin: string
}


export interface IContactUpdate {
    name?: string
    email?: string
    phone?: string
    sector?: string
    photo?: string
    linkedin?: string

}