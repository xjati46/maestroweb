import { useEffect } from "react";
import logo from './mswim.png';
import card1 from './card1.png';
import card2 from './card2.png';
import card3 from './card3.png';
import header1 from './header1.jpg';
import header2 from './header2.jpg';
import header3 from './header3.jpg';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container">
          <img width="80" src={logo} alt="logo"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Program
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#privat">Private Swim Training</a></li>
                  <li><a className="dropdown-item" href="#terapi">Aqua Therapy</a></li>
                  <li><a className="dropdown-item" href="#baby">Baby Swim</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lokasi Latihan
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="https://goo.gl/maps/hfjCZXDKmwsazSgd8" target="_blank" rel="noreferrer">Kota Bandung - Kolam Renang Oasis/Siliwangi</a></li>
                  <li><a className="dropdown-item" href="https://goo.gl/maps/zi7BJb73CZazDN7c6" target="_blank" rel="noreferrer">Kab. Bekasi - Kolam Renang Olympic</a></li>
                  <li><a className="dropdown-item" href="#lainnya">Lainnya</a></li>
                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#qna">Q & A</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#kontak">Kontak Kami</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Login
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="https://maestro-admin-606c4.web.app/">Admin</a></li>
                  <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="https://maestro-coach.web.app/">Coach</a></li>
                  <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="#">Member</a></li>
                </ul>
              </li>


            </ul>
          </div>
        </div>
      </nav>



      <header>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="5000">
              <img src={header1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-interval="5000">
              <img src={header2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-interval="5000">
              <img src={header3} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>




      <div className="jumbotron">
        <div className='row'>
          <div className='col'>
            <h1 className="display-4">Professional Swim Coach!</h1>
          </div>
          <div className='col'>

            <p>
              <strong>MAESTRO SWIM</strong> adalah klub olahraga renang terkemuka di Kota Bandung dan wilayah Jabodetabek.
              <br/> Sejak berdiri tahun 2011, <strong>Maestro Swim</strong> telah melatih ribuan anak-anak dan orang dewasa dalam menguasai kemampuan berenang.
            </p>
          </div>
        </div>
      </div>


      <section id='privat'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid" src={card1} alt=""/>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Private Swim Training</h2>
                <p>Belajar renang lebih menyenangkan bersama Maestro Swim. Tinggal pilih mau privat 1 orang, 2 orang, atau lebih. Dari kemampuan dasar renang, hingga belajar berbagai gaya dalam renang bisa kamu pelajari disini. Para pelatih adalah profesional di bidangnya.</p>
                <a className="btn btn-success" href="https://wa.me/6285624382224" target="_blank" rel="noreferrer" role="button">Pesan Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='terapi'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <img className="img-fluid" src={card2} alt=""/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">Aqua Therapy</h2>
                <p>Bagi Anda yang memiliki riwayat penyakit seperti asma, cedera, atau kendala lainnya bisa mengikuti Program Aqua Therapy. Terbukti dengan berolahraga renang dapat membantu mengatasi berbagai kendala kesehatan. Konsultasikan terlebih dahulu dengan dokter Anda, dan Admin kami akan mencarikan pelatih yang tepat untuk jenis kendala kesehatan yang Anda alami.</p>
                <a className="btn btn-success" href="https://wa.me/6285624382224" target="_blank" rel="noreferrer" role="button">Pesan Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='baby'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="img-fluid" src={card3} alt=""/>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Baby Swim</h2>
                <p>Kemampuan motorik anak dilatih sejak dari bayi. Melalui Program Baby Swim, stimulus motorik anak berlaku untuk seluruh anggota badannya. Selain itu juga Bunda atau Papahnya bisa ikut berinteraksi langsung di dalam air pada program Baby Swim ini.</p>
                <a className="btn btn-success" href="https://wa.me/6285624382224" target="_blank" rel="noreferrer" role="button">Pesan Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <hr className="my-4"/>
      <br/>
      
      <div className="jumbotron jumbotron-fluid" id='qna'>
        <div className="container">
          <h1 className="display-4 text-center">Question & Answer (Q & A)</h1>
          <div className="card">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p><strong>Q: Mulai umur berapa dapat berlatih renang di Maestro Swim?</strong></p>
                <footer className="blockquote-footer">A: Untuk anak usia 4 bulan sampai 2 tahun masuk ke dalam program Baby Swim. Lebih dari 2 tahun bisa mengikuti program Private Swim Training.</footer>
              </blockquote>
              <br/>
              <blockquote className="blockquote mb-0">
                <p><strong>Q: Apa saja peralatan untuk mulai latihan renang?</strong></p>
                <footer className="blockquote-footer">A: Wajib memakai pakaian renang. Kami juga merekomendasikan pakai kacamata renang apabila ada. Pelampung dan alat bantu lainnya sudah disiapkan oleh Pelatih.</footer>
              </blockquote>
              <br/>
              <blockquote className="blockquote mb-0">
                <p><strong>Q: Saya risih jika dilatih oleh lawan jenis. Apa bisa memilih pelatihnya perempuan/laki-laki?</strong></p>
                <footer className="blockquote-footer">A: Bisa. Member dapat memilih pelatihnya laki-laki atau perempuan, agar latihan juga semakin nyaman.</footer>
              </blockquote>
              <br/>
              <blockquote className="blockquote mb-0" id='lainnya'>
                <p><strong>Q: Di kolam renang mana latihannya?</strong></p>
                <footer className="blockquote-footer">A: Anda bisa request untuk tempat latihan yang nyaman menurut Anda selama masuk ke dalam wilayah operasional kami (Kota Bandung dan Jabodetabek). Admin akan menghubungkan pelatih yang tersedia dalam radius terdekat kolam yang Anda minta. <br/><br/>Untuk wilayah Kota Bandung dan Kabupaten Bekasi Kami bekerjasama dengan <a href="https://goo.gl/maps/hfjCZXDKmwsazSgd8" target="_blank" rel="noreferrer">Kolam Renang Oasis/Siliwangi (Bandung)</a> dan <a href="https://goo.gl/maps/zi7BJb73CZazDN7c6" target="_blank" rel="noreferrer">Kolam Renang Olympic (Bekasi)</a> sehingga kegiatan latihan dapat berjalan lebih mudah dan nyaman.</footer>
              </blockquote>
              <br/>
              <blockquote className="blockquote mb-0">
                <p><strong>Q: Apakah biaya renang sudah termasuk tiket kolam?</strong></p>
                <footer className="blockquote-footer">A: Biaya latihan belum termasuk tiket kolam.</footer>
              </blockquote>
              <br/>
              <blockquote className="blockquote mb-0">
                <p><strong>Q: Biayanya berapa? Ada diskon atau promo?</strong></p>
                <footer className="blockquote-footer">A: Untuk price list lengkap bisa langsung ditanyakan ke Admin Kami di <a href="https://wa.me/6285624382224" target="_blank" rel="noreferrer">0856-2438-2224 (WhatsApp/Telp)</a>. Setiap bulannya Kami mengadakan promo spesial. Silakan pantau instagram kami di <a href="https://www.instagram.com/maestro_swim/" target="_blank" rel="noreferrer">@maestro_swim</a>.</footer>
              </blockquote>
              <br/>
              <blockquote className="blockquote mb-0">
                <p><strong>Q: Saya tertarik, bagaimana cara untuk mulai latihan?</strong></p>
                <footer className="blockquote-footer">A: Kontak Admin Kami di <a href="https://wa.me/6285624382224" target="_blank" rel="noreferrer">0856-2438-2224 (WhatsApp/Telp)</a>. Pilih program yang diinginkan beserta waktu dan tempat latihannya. Admin akan mengkonfirmasi pelatih yang tersedia dan informasi biayanya. Setelah melakukan pembayaran, Admin akan menginformasikan kontak pelatih, dan latihan bisa dimulai.</footer>
              </blockquote>
            </div>
          </div>
          
        </div>
      </div>

      <br/>


      <div id="kontak" className="mb-5">
        <div className="container">
          <h1 className="display-4">Informasi dan Kontak</h1>

          <p>
            <strong>CV MAESTRO BISA</strong>
            <br/>
            JL. CIBATU 14 NO. 3, Kel. Antapani Tengah, Kec. Antapani,
            Kota Bandung, Prop. Jawa Barat
          </p>

          <a href="https://wa.me/6285624382224" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg> <span className="align-middle">0856-2438-2224 (WhatsApp/Telp)</span>
          </a>
          <br/>

          <a href="https://www.instagram.com/maestro_swim/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg> <span className="align-middle">@maestro_swim (Instagram)</span>
          </a>
          <br/>

          <a href="https://www.facebook.com/maestroswim/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg> <span className="align-middle">@maestroswim (Facebook)</span>
          </a>
          

        </div>
      </div>

      <footer className="py-5 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">&copy; Maestro Swim 2021 | Created by UrbanStadia</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
