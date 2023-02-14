import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Footer } from './components/common/Footer';
import { Topbar } from './components/common/Topbar';
import { Header } from './components/common/header/Header';
import { Home } from './components/common/Home';
import { About } from './components/common/About';
import { Categories } from './components/categories/Categories';
import { Catalogue } from './components/catalogue/Catalogue';
import { ArticleDetails } from './components/catalogue/article-details/ArticleDetails';
import { ArticleCreate } from './components/catalogue/article-create/ArticleCreate';
import { Register } from './components/common/Register';
import { Login } from './components/common/Login';
import { ProfileCreate } from './components/common/profile/ProfileCreate';
import { ProfileEdit } from './components/common/profile/ProfileEdit';
import { ProfileDetails } from './components/common/profile/ProfileDetails';
import { MyCatalogue } from './components/catalogue/MyCatalogue';

import { AuthProvider } from './contexts/AuthContext';
import { ProfileProvider } from './contexts/ProfileContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ProfileProvider>
          <Topbar />
          <Header />
        </ProfileProvider>
        <main className="main">
          <Routes>
            <Route path='/' element={
              <section id='home'>
                <Home />
              </section>
            } />
            <Route path='/about' element={
              <section id='about'>
                <About />
              </section>
            } />
            <Route path='/categories' element={
              <section id='categories'>
                <Categories />
              </section>
            } />
            <Route path='/catalogue/:catalogueTitle/:catalogueId' element={
              <section id='catalogue'>
                <Catalogue />
              </section>
            } />
            <Route path='/catalogue/:catalogueTitle/:catalogueId/:articleId' element={
              <section id='articleDetails'>
                <ArticleDetails />
              </section>
            } />
            <Route path='/article/create' element={
              <section id='articleCreate'>
                <ArticleCreate />
              </section>
            } />
            <Route path='/profile/create' element={
              <section id='profileCreate'>
                <ProfileCreate />
              </section>
            } />
            <Route path='/profile/details/:profileId' element={
              <section id='profileDetails'>
                <ProfileProvider>
                  <ProfileDetails/>
                </ProfileProvider>
              </section>
            }/>
            <Route path='/profile/edit/:userId' element={
              <section id='profileEdit'>
                <ProfileProvider>
                  <ProfileEdit/>
                </ProfileProvider>
              </section>
            }/>
            <Route path='/login' element={
              <section id='login'>
                <Login />
              </section>
            } />
            <Route path='/register' element={
              <section id='register'>
                <Register />
              </section>
            } />
            <Route path='/mycatalogue' element={
              <section id='myCatalogue'>
                <MyCatalogue />
              </section>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
    
  );
}

export default App;
