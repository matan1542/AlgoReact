import React from 'react'
import {File} from '../interfaces/File'
type previewProps = {
    file:File,
    handleOpen?: (file:File) => void,
}
export default function FilePreview({ file,handleOpen }: previewProps) {
    //  console.log(file)   
    return (
        <>
            <div className="file-preview" onClick={() => handleOpen(file)}>
                <div className="img-container">
                    <i className={`${file.iconSrc} fa-fw`}></i>
                </div>
                <div className="details-container">
                    <div className="middle-container">
                        <h2>{file.name}</h2>
                        <h3 className="file-type">{file.typeData}</h3>
                    </div>
                    <div className="file-size">
                        <h3>{`${file.size}KB`}</h3>
                    </div>
                </div>
            </div>
            
           </>
    )
}
