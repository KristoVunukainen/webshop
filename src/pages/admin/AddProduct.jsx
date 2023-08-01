import React, { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";




function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const {t} = useTranslation();
  const toastMessageSuccess = t("product-added");
  const toastMessageFail = t("product-not-added");
  const [idUnique, setIdunique] = useState (true);

  

  const addNew = () => {
    if (nameRef.current.value === "" || priceRef.current.value < 0) {
      toast.error(toastMessageFail);
    } else {
      productsFromFile.push({
        id: Number(idRef.current.value),
        image: imageRef.current.value,
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
        active: activeRef.current.checked,
      });
      toast.success(toastMessageSuccess);
      
    }
    const checkIdUniqueness =() => {
      const result = productFromFile.filter(product => product.id === Number ( idRef.current.value));
      if (result.length === 0){
        setIdunique(true)
  
      } else {
        setIdunique(false)
  
      }
    }

  };

  return (
    <div>
       {idUnique === false && <div>Sisestatud id ei ole unikaalne</div>}
       <input onChange={checkIdUniqueness} defaultValue= {found.id} ref={idRef} type ="number" /> <br />
      <br />
      <label>{t("id")}</label> <br />
      <input ref={idRef} type="number" /> <br /> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef} type="text" /> <br /> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef} type="number" /> <br /> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef} type="text" /> <br /><br />
      <label>{t("category")}</label> <br />
      <input ref={categoryRef} type="text" /> <br /> <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef} type="text" /> <br /><br />
      <label>{t("active")}</label> 
      <input ref={activeRef} type="checkbox" /> <br /><br />
      <button disabled={idUnique === false} onClick={edit}>Muuda</button>
      
      <Button onClick={addNew} variant="success">{t("add")} </Button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default AddProduct;