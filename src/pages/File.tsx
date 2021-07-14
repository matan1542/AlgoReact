import React, { useEffect, useState } from 'react';
import FilesList from '../components/FilesList'
import { loadFiles } from '../store/actions/file.actions'
import DynamicRender from '../components/DynamicRender';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import { useToasts } from 'react-toast-notifications';
import { File as FileInterface  } from '../interfaces/File';

export default function File() {

    const { files } = useAppSelector((state) => {
        return state.fileModule
    })
    const dispatch = useDispatch()
    const [isMounted, setMounted] = useState(false)
    const [open, setOpen] = useState({ file: null, open: false });
    const { addToast, removeToast } = useToasts();
    useEffect(() => {
        if (!isMounted) {
            query()
            setMounted(true)
        }
        async function query() {
            try {
                await dispatch(loadFiles())
                addToast('load succsess', { appearance: 'success', id: 'loading-success' })
               setTimeout(() =>{
                   removeToast('loading-success')
               },2000)
            }
            catch (err) {
                addToast(err, { appearance: 'error', id: 'loading-error' })
                setTimeout(() => {
                    removeToast('loading-error')

                }, 2000)
            }
            await dispatch(loadFiles())
        }
    })
    const handleClose = () => {
        setOpen((prevState) => ({
            ...prevState,
            open: false
        }));
    };
    const handleOpen = (file:FileInterface) => {
        setOpen((prevState) => ({
            ...prevState,
            open: true,
            file
        }));
    }
    if (!files) return <div>loading...</div>
    return (
        <div className="file-page">
            {(open.file && open.open) && <DynamicRender type={open.file.type} file={open.file} handleClose={handleClose} open={open.open} />}
            <FilesList files={files} handleOpen={handleOpen} />
        </div>
    );
}
