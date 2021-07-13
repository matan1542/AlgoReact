import {fileService} from '../../services/file.service'
export function loadFiles() { // Action Creator
    return async dispatch => {
        try {
            const files = await fileService.query()
            const action = {
                type: 'SET_FILES',
                files
            }
            dispatch(action);
            return files
        } catch (err) {
            //@ts-ignore 
            throw new Error('Couldn\' load the files  :', err)
        }
    }
}
