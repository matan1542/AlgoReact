import { Modal } from './Modal'
import React from 'react'
import {fileType} from '../enums/enum'

type propsTypes = {
    type: string,
    handleClose: () => void,
    open: boolean,
    file: any
}
export default function DynamicRender({ type, handleClose, open, file }: propsTypes): any {
    switch (type) {
        case fileType.MP4:
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                        <video src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} controls></video>
                </Modal>)
        case fileType.PDF:
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                        <iframe src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} width="100%" title={file.name}></iframe>
                </Modal>)
        case fileType.JPG:
            return (
                <Modal handleClose={handleClose} open={open} file={file}>
                        <img src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} alt="" />
                </Modal>)

    }

}
