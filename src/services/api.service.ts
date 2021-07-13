import axios from 'axios';
export const apiService = {
    getFiles
}
async function getFiles(): Promise<object[]> {
    const res = await axios.get('https://mighty-sierra-05836.herokuapp.com/files')
    return res.data.files
}