
import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import AdmiHome from './pages/admin/AdmiHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProduct from './pages/admin/MaintainProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShop from './pages/admin/MaintainShop';
import Homepages from './pages/global/HomePages';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NotFound from './pages/global/NotFound';

import { useTranslation } from 'react-i18next';


function App() {

  const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage("en")
    localStorage.setItem("language", "en")
  }
    const changeLangEe = () => {
      i18n.changeLanguage("ee");
      localStorage.setItem("language", "ee")



  
  }


  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Kristo Webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to= "/admin">{t("admin")}</Nav.Link>
              <Nav.Link as={Link} to= "/shops">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to= "/contact">{t("contact")}</Nav.Link>
            </Nav>
            <Nav>
              <img className='lang' src="/english.png" alt=""onClick={changeLangEn} />
              <img className='lang' src="/estonian.png" alt="" onClick={changeLangEe}/>         
               <Nav.Link href="#deets">{t("login")}</Nav.Link>
              <Nav.Link href="#deets">{t("Cart")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/admin' element= { <AdmiHome />} />
        <Route path='/admin/add-product' element= { <AddProduct />} />
        <Route path='/admin/edit-product' element= { <EditProduct />} />
        <Route path='/admin/maintain-product' element= { <MaintainProduct />} />
        <Route path='/admin/maintain-categories' element= { <MaintainCategories />} />
        <Route path='/admin/maintain-shops' element= { <MaintainShop />} />
        <Route path='/' element= { <Homepages />} />
        <Route path='/contact' element= { <ContactUs />} />
        <Route path='/shops' element= { <Shops />} />
        <Route path='/cart' element= { <Cart />} />
        <Route path='/product' element= { <SingleProduct />} />
        <Route path='/login' element= { <Login />} />
        <Route path='/signup' element= { <Signup />} />
        <Route path='*' element= { <NotFound />} />

      </Routes>
     
    </div>
  );
}

export default App;

//1. Homepage --> sorteerimise nupud
//2. MaintainProducts --> kustutamise nupp
// 3. Homepage --> lisamine ostukorvi faili
//cart --> failis ostukorvi toodete võtmine ja seejärel nuppudega lisamine
//, eemaldamine, tühjendamine, koguarvutus, dünaamika
//4. Lisada 3-4 s keel
//5. Favicon, Google Fonts uus kirjastiil
//6. React-toastify ---> Homepage-s kui lisatakse ostukorvi, 
// Maintainproducts kui kustutakse
// 7. Tõlkeid juurde lisada
//8. Lisada project firebase-i
//9. Addproduct --> eesti keelse järgi
//10. SingleProduct ---> eesti keelse järgi
