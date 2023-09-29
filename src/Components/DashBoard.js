import React, { useState } from "react"
import Base from "../Base/Base"
import FileList from "../FileList/FileList"
import FileUpload from "../FileUpload/FileUpload"
import DropFileInput from "./drop-file-input/DropFileInput"


const Dashboard = () => {
  
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  const onFileChange = (files) => {
    console.log(files);
  }

  return (
    <Base>
      <div className="title">Upload file</div>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
      <p>Or</p>
      <div className="box">
        <h2 className="header">
          React drop files input
        </h2>
        <DropFileInput
          onFileChange={(files) => onFileChange(files)}
        />
      </div>
    </Base>
  )
}

export default Dashboard