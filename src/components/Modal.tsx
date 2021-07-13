import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogTitle } from '@material-ui/core';
type DialogProp = {
    handleClose: () => void,
    open: boolean,
    file: any
}
export const Modal: React.FC<DialogProp> = ({ handleClose, open, children, file }) => {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle className="dialog-title">
                    <div className="modal-header">
                        <h2>{file.name}</h2>
                        <i className="far fa-window-close" onClick={handleClose}></i>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className="modal-image-container">
                        {children}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}