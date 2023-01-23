import {Routes, Route} from 'react-router-dom'

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
import { MyCatalogue } from './components/catalogue/MyCatalogue';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <main className="main">
        <Routes>
          <Route path='/' element={
            <section id='home'>
              <Home/>
            </section>
          }/>
          <Route path='/about' element={
            <section id='about'>
              <About/>
            </section>
          }/>
          <Route path='/categories' element={
            <section id='categories'>
              <Categories/>
            </section>
          }/>
          <Route path='/catalogue' element={
            <section id='catalogue'>
              <Catalogue/>
            </section>
          }/>
          <Route path='/catalogue/:articleId' element={
            <section id='articleDetails'>
              <ArticleDetails/>
            </section>
          }/>
          <Route path='/profile/details' element={
            <section id='profileDetails'>
              <ProfileDetails/>
            </section>
          }/>
          <Route path='/profile/create' element={
            <section id='profileCreate'>
              <ProfileCreate/>
            </section>
          }/>
          <Route path='/login' element={
            <section id='login'>
              <Login/>
            </section>
          }/>
          <Route path='/register' element={
            <section id='register'>
              <Register/>
            </section>
          }/>
          <Route path='/mycatalogue' element={
          <section id='myCatalogue'>
            <MyCatalogue/>
          </section>
          }/>
        </Routes>
        
      </main>
      
      <Footer/>
    </div>   
  );
}

export default App;
