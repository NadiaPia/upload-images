import './App.css';

function App() {

  const uploadImage = (files) => {    
    console.log("files[0]", files[0]) //FileList {0: File, length: 1}
  }
  return (
    <div>
      <input
        lang="en"
        type="file"
        onChange={(event) => {
          uploadImage(event.target.files)
        }}
      />
    </div>
  );
}

export default App;
