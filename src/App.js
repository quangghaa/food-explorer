import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import AccountDetail from './pages/AccountDetail';
import TransactionDetail from './pages/TransactionDetail';
import Block from './pages/Block';
import Transaction from './pages/Transaction';
import Demo from './pages/Demo';
import BlockDetail from './pages/BlockDetail';
import TestChart from './pages/TestChart';
import Diary from './pages/Diary';
import DiaryDetail from './pages/DiaryDetail';
import Certificate from './pages/Certificate';
import CertificateDetail from './pages/CertificateDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/accounts' element={<Account />} />
          <Route path='/account/:id' element={<AccountDetail />} />
          <Route path='/blocks' element={<Block />} />
          <Route path='/block/:id' element={<BlockDetail />} />
          <Route path='/transactions' element={<Transaction />} /> 
          <Route path='/transaction/:id' element={<TransactionDetail />} />
          <Route path='/diaries' element={<Diary />} /> 
          <Route path='/diary/:id' element={<DiaryDetail />} />
          <Route path='/certificates' element={<Certificate />} /> 
          <Route path='/certificate/:id' element={<CertificateDetail />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/test' element={<TestChart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
