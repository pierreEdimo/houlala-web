import axios from "axios"
import type { LocalModel } from "../models/local.model"

const fetchLocals = async (url: string) => {
    return await axios.get<LocalModel[]>(url)
}

const fetchLocalById = async (id: number) => {
    return await axios.get<LocalModel>('${id}')
}

export {fetchLocals, fetchLocalById}