import { Modal } from './Modal'
import React from 'react'
type propsTypes = {
    type: string,
    handleClose: () => void,
    open: boolean,
    file: any
}
export default function DynamicRender({ type, handleClose, open, file }: propsTypes): any {
    switch (type) {
        case 'mp4':
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                    <div className="modal-image-container">
                        <video src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} controls></video>
                        </div>
                </Modal>)
        case 'pdf':
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                    <div className="modal-image-container">
                        <iframe src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} width="100%" title={file.name}></iframe>
                    </div>
                </Modal>)
        case 'jpg':
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                    <div className="modal-image-container">
                        <img src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} alt="" />
                    </div>
                </Modal>)

    }

}
