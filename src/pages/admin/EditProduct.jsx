import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productFromFile from "../../data/products.json"

function EditProduct() {
  const{productId} = useParams ();

  const found= productFromFile.find (product => product.id=== Number (productId));

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate ();
  const [idUnique, setIdunique] = useState (true);

  const edit =() => {
    const index = productFromFile.findIndex(product => product.id=== Number (productId));
    productFromFile[index] ={
        "id": Number (idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number (priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked
    };
    navigate ("/admin/maintain-product")

  }

  const checkIdUniqueness =() => {
    const result = productFromFile.filter(product => product.id === Number ( idRef.current.value));
    if (idRef.current.value === productId) {
      setIdunique(true);
      return;
    }

    } 
    else {
      setIdunique(false);

    }
  }

  if (found === undefined){
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      {idUnique === false && <div>Sisestatud id ei ole unikaalne</div>}
      <label>ID</label> <br />
      <input onChange={checkIdUniqueness} defaultValue= {found.id} ref={idRef} type ="number" /> <br />
      <label>Nimi</label> <br />
      <input defaultValue= {found.name} ref={nameRef} type ="text" /> <br />
      <label>Hind</label> <br />
      <input defaultValue= {found.price} ref={priceRef} type ="number" /> <br />
      <label>Pilt</label> <br />
      <input defaultValue= {found.image} ref={imageRef} type ="text" /> <br />
      <label>Kategooria</label> <br />
      <input defaultValue= {found.category} ref={categoryRef} type ="text" /> <br />
      <label>Kirjeldus</label> <br />
      <input defaultValue= {found.description} ref={descriptionRef} type ="text" /> <br />
      <label>Aktiivne</label> <br />
      <input defaultChecked= {found.active} ref={activeRef} type ="checkbox" /> <br />
      <button disabled={idUnique === false} onClick={edit}>Muuda</button>

    </div>
  )
}

export default EditProduct