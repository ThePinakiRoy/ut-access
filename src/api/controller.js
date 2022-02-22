import { data } from './data'


export const search = async (searchTerm) => {
    console.log(searchTerm)
    return await data.filter(term => term.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0)
}