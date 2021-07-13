import React from 'react'
import DynamicCmp from './DynamicCmp'
type FileProps = {
    files: object[],
    handleOpen: (file:object) => void,
    open: boolean
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
