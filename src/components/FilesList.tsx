import React from 'react'
import DynamicCmp from './DynamicCmp'


export default function FilesList({files,handleOpen}) {
    return (
        <div className="files-list">
          {files.map((file,idx) => {
              return <DynamicCmp key={idx} handleOpen={handleOpen} file={file}/>
          })}  
        </div>
    )
}
