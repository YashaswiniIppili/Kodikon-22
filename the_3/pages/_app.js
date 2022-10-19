import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <head>
  <meta name="viewport" content="width=device-width"initial-scale="1.0" />
  <title>MyEd</title>
  <link rel="stylesheet" href="style.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css"/>
</head>
<body>
  <section class="header">
      <nav>
          <a href="index.html"><img src="logo.jpg"/></a>
          <div class="nav-links" id="navlinks">
              <i class="fa fa-times" aria-hidden="true" onclick="hidemenu()"></i>
              <ul>
                  <li><a href="">HOME</a></li>
                  <li><a href="">ACADEMICS</a></li>
                  <li><a href="">RESEARCH</a></li>
                  <li><a href="">LEND-A-HAND</a></li>
                  <li><a href="">ABOUT</a></li>
              </ul>
          </div>
          <i class="fa fa-bars" aria-hidden="true" onclick="showmenu()"></i>
      </nav>

  <div class="text-box">
      <h1>Learn The Efficient Way</h1>
      <p>learning <br/> collaberating for research<br/> and <br/>gathering info were never this easier</p>
  </div>

  </section>

  <section class="academics">
      <h1>ACADEMICS</h1>
      <p>this section has all the things you just need</p>

      <div class="row">
          <div class="academics-col">
              <h3>Video Resources</h3>
              <p>the section where you can find every video solution you need on the internet and make you understand better</p>
          </div>
          <div class="academics-col">
              <h3>e-Books</h3>
              <p>find pdf of almost every book there is on the internet for free and convinient learning at your fingertips</p>
          </div>
          <div class="academics-col">
              <h3>Ask-A-Doubt</h3>
              <p>ask 100's of teachers and professors your doubts and get them clarified</p>
          </div>
      </div>

  </section>

  <section class="research">
      <h1>RESEARCH</h1>
      <p>collab with professors who are into research and start your research journey  </p>

      <div class="row">
          <div class="research-col">
              <h3>Join The Experts</h3>
              <p>find the right domain for you to do research in and find the best professors to collab with</p>
          </div>
      </div>

  </section>
</body>
</>
  )
}

export default MyApp
