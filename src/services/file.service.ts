import { apiService } from './api.service'
export const fileService = {
    query
}
async function query() {
    return await apiService.getFiles()
}