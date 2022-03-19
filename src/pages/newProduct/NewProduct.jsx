import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { storage } from "../../firebase";
import "./newProduct.css";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
  // getDownloadURL,
// } from "firebase/storage";
// import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFiles = (e) => {
    const newFile = e.target.files[0];
    newFile["id"] = Math.random();
    setFiles((prev) => [...prev, newFile ]);
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  }; 

  const handleUpload = () => {
    const promises = [];
    // eslint-disable-next-line
    files.map((book) => {
      // const bookName = new Date().getTime() + book.name;
      // const storage = getStorage(app);
      // const storageRef = ref(storage, `Books/${bookName}`);
      // const uploadTask = uploadBytesResumable(storageRef, book);

        const uploadTask = storage.ref(`Books/${book.name}`).put(book);
        promises.push(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          async () => {
	          await storage
            .ref("Books")
            .child(book.name)
            .getDownloadURL()
            .then((links) => {
              console.log("url links", links);
              setUrls((prev) => [...prev, links]);
            });
          }
        );
      });
  
      Promise.all(promises)
        .then(() => {
          toast("Article added successfully", { type: "success" });
        })
        .catch((err) => console.log(err));
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleUpload();

    // const pdfName = new Date().getTime() + pdf.name;

    // const storage = getStorage(app);
    // const storageRef = ref(storage, `/images/${fileName}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progressPercent = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setProgressFile(progressPercent);
    //     console.log("Upload is " + progressPercent + "% done");
    //     switch (snapshot.state) {
    //       case "paused":
    //         console.log("Upload is paused");
    //         break;
    //       case "running":
    //         console.log("Upload is running");
    //         break;
    //       default:
    //     }
    //   },
    //   (error) => {
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //         setFileUrl(downloadURL);
    //     });
    //   }
    // );
  };

  if(urls.length === 2){
    const product = { ...inputs, img: urls[0], pdf: urls[1], categories: cat };
    addProduct(product, dispatch);
    toast("Article added successfully", { type: "success" });
    setUrls([]);
    setFiles([]);
    history.push("/");
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={handleFiles}
          />
          {progress > 0 && (<progress value={progress} max="100" />)}
          
        </div>
        <div className="addProductItem">
          <label>Pdf</label>
          <input
            type="file"
            id="file"
            onChange={handleFiles}
          />
          {progress > 0 && (<progress value={progress} max="100" />)}
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Python for Beginner"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Programming, Linux" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
