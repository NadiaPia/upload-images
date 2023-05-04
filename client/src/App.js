import './App.css';
import axios from "axios";
import { useState } from "react";

function App() {

  const [imageSelected, setImageSelected] = useState()

  const uploadImage = (files) => {    
    //console.log("files[0]", files[0]) //FileList {0: File, length: 1}
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kysjntpy");

    axios.post("https://api.cloudinary.com/v1_1/dhq7myqzj/image/upload", formData).then((response) => {
      console.log("response", response)
    })
  };

  return (
    <div>
      <input
        lang="en"
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0])
        }}
      />
      <button onClick={uploadImage}> Upload Image </button>
    </div>
  );
}

export default App;
