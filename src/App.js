import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./Pages/Main";
import { useState, useRef } from "react";

import { storage } from "./firebase";
import { getDownloadURL } from "firebase/storage";

function App() {
  // const [progress, setProgress] = useState(0);

  // const uploadFiles = (file) => {
  //   if (!file) return;
  //   const storageRef = ref(storage, `/files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(prog);
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
  //     }
  //   );
  // };

  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
