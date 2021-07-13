import React, { useEffect, useState } from 'react';
import './style/style.scss';
import FilesList from './cmps/FilesList'
import { apiService } from './services/api.service'
import DynamicRender from './cmps/DynamicRender'
import { Header } from './cmps/Header';
let inital: object[]
function App() {
  const [files, setFiles] = useState(inital)
  const [isMounted, setMounted] = useState(false)
  const [open, setOpen] = useState({ file: null, open: false });
  useEffect(() => {
    if (!isMounted) {
      query()
      setMounted(true)
    }
    async function query() {
      const files: any = await apiService.getFiles()
      setFiles(files)
    }
  })
  const handleClose = () => {
    setOpen((prevState) => ({
      ...prevState,
      open: false
    }));
  };
  const handleOpen = (file) => {
    setOpen((prevState) => ({
      ...prevState,
      open: true,
      file
    }));
  }
  if (!files) return <div>loading...</div>
  return (

    <div className="App">
      {(open.file && open.open) && <DynamicRender type={open.file.type} file={open.file} handleClose={handleClose} open={open.open} />}
      <Header/>
      <main>
        <FilesList files={files} handleOpen={handleOpen} open={open.open} />
      </main>
    </div>
  );
}

export default App;
