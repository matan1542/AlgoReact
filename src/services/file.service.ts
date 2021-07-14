import { apiService } from './api.service'
import {storageService} from './async-storage.service'
const entityType = 'files'
export const fileService = {
    query
}
async function query() {
    const files:any = await storageService.query(entityType)
    if(files?.length) return files[0]
    const res = await apiService.getFiles()
    storageService.post(entityType, res)
    return res
}