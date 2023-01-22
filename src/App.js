import './App.css';
import { Footer } from './components/common/Footer';
import { Topbar } from './components/common/Topbar';
import { Header} from './components/common/Header';
import { Home } from './components/common/Home';
import { About } from './components/common/About';
import { Categories } from './components/categories/Categories';
import { Catalogue } from './components/catalogue/Catalogue';
import { ArticleDetails } from './components/catalogue/article-details/ArticleDetails';
import { Register } from './components/common/Register';
import { Login } from './components/common/Login';
import { ProfileCreate } from './components/common/Profile/ProfileCreate';
import { ProfileDetails } from './components/common/Profile/ProfileDetails';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Home/>
      <About/>
      <Categories/>
      <Catalogue/>
      <ArticleDetails/>
      <Register/>
      <Login/>
      <ProfileCreate/>
      <ProfileDetails/>
      <Footer/>
    </div>   
  );
}

export default App;
