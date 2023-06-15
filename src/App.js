import { Routes , Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
const App = ()=> {
 return (
  <Routes>
    <Route path='/' element={ <Navigation/>}>
      <Route index element={<Home />}/> {/* matching path is /home */}
      <Route path='shop' element={<Shop />}/> {/* matching path is /shop */}
      <Route path='auth' element={<Authentication />}/>
    </Route>
  </Routes>
 );
 
};

export default App;
