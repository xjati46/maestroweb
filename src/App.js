// import logo from './logo.svg';
import logo from './mswim.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website under construction!
        </p>
        <a
          className="App-link"
          href="https://wa.me/6285624382224"
          target="_blank"
          rel="noreferrer"
        >
          Hubungi Kami
        </a>
        <a
          className="App-link"
          href="https://maestro-admin-606c4.web.app/"
        >
          Admin
        </a>
        <a
          className="App-link"
          href="https://maestro-coach.web.app/"
        >
          Pelatih
        </a>
        <a
          className="App-link"
          href="#"
        >
          Siswa
        </a>
      </header>
    </div>
  );
}

export default App;
