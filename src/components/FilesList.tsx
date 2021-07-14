import React from 'react'
import { File } from '../interfaces/File'
import DynamicCmp from './DynamicCmp'
type FileProps = {
    files: File[],
    handleOpen: (file?:File) => void,
  }

export default function FilesList({files,handleOpen}:FileProps) {
    return (
        <div className="files-list">
          {files.map((file,idx) => {
              return <DynamicCmp key={idx} handleOpen={handleOpen} file={file}/>
          })}  
        </div>
    )
}
