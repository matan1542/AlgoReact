import { Modal } from './Modal'
import React from 'react'
type propsTypes = {
    type: string,
    handleClose: () => void,
    open: boolean,
    file: any
}
export default function DynamicRender({ type, handleClose, open, file }: propsTypes): any {
    const types = {
        MP4: "mp4",
        JPG: "jpg",
        PDF: "pdf",
    }
    switch (type) {
        case types.MP4:
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                        <video src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} controls></video>
                </Modal>)
        case types.PDF:
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                        <iframe src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} width="100%" title={file.name}></iframe>
                </Modal>)
        case types.JPG:
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                        <img src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} alt="" />
                </Modal>)

    }

}
