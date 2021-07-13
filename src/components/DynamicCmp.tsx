import React from 'react'
import FilePreview from './FilePreview'
//Switch case by type of the file

export default function DynamicCmp({ file,handleOpen }: any):any {
    const types = {
        MP4: "mp4",
        JPG: "jpg",
        PDF: "pdf",
    }
    const type = file.name.substring(file.name.length - 3, file.name.length)
    switch (type) {
        case types.MP4:
            file = {
                ...file,
                type,
                size: file.size,
                iconSrc:'fas fa-video',
                typeData: `${file.length} seconds`
            }
            break;
        case types.PDF:
            file = {
                ...file,
                type,
                iconSrc:'fas fa-file-pdf',
                typeData: `${file.pages} pages`

            }
            break;
        case types.JPG: file = {
            ...file,
            type,
            iconSrc:'fas fa-image',
            typeData: `${file.width}X${file.height}px`
        }
        break;
    }
  return <FilePreview file={file} handleOpen={handleOpen}/>

}
