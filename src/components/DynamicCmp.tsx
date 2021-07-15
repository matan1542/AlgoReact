import React from 'react'
import FilePreview from './FilePreview'
import {fileType} from '../enums/enum'
//Switch case by type of the file


export default function DynamicCmp({ file,handleOpen }) {
    
    const type = file.name.substring(file.name.length - 3, file.name.length)
    switch (type) {
        case fileType.MP4:
            file = {
                ...file,
                type,
                size: file.size,
                iconSrc:'fas fa-video',
                typeData: `${file.length} seconds`
            }
            break;
        case fileType.PDF:
            file = {
                ...file,
                type,
                size: file.size,
                iconSrc:'fas fa-file-pdf',
                typeData: `${file.pages} pages`

            }
            break;
        case fileType.JPG: file = {
            ...file,
            type,
            iconSrc:'fas fa-image',
            typeData: `${file.width}X${file.height}px`
        }
        break;
    }
  return <FilePreview file={file} handleOpen={handleOpen}/>

}
