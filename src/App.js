import logo from './logo.svg';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
     
    <nav>
      <a href="" class="logo"
        ><span class="material-symbols-outlined"> cruelty_free </span>Teddy
      </a>
      <ul>
        <li><a href="">Feeds</a></li>
        <li><a href="">Explore</a></li>
      </ul>
      <a href=""><button>Connect wallet</button></a>
    </nav>
    <section class="banner">
      <div class="text">
        <h1>World Largest NFT Market</h1>
        <p>
          Buy aggregated NFTs from 5 blockchains. Lock your $RARI — unlock 0%
          fees.
        </p>
        <div class="banner_btns">
          <a href=""><button>Explore</button></a>
          <a href=""><button>Buy</button></a>
        </div>
        <div class="search_bar_container">
          <div class="search_box">
            <span class="material-symbols-outlined"> search </span>
            <input type="text" placeholder="Search Web3" />
          </div>
        </div>
      </div>
      <img src="https://img.freepik.com/free-vector/gangster-dog-character-vector-illustration_43623-1272.jpg?w=740&t=st=1672932181~exp=1672932781~hmac=07d3694ee628bb96c1b5a03c72ca81a6f392ebf42a73da4fbbe2b7a468c57141" alt=""/>
    </section>

    <section class="ntf_card_container">
      <div class="ntf_container">
        <div class="card">
          <img src="https://img.freepik.com/premium-photo/3d-rendering-cyberpunk-gangster-man-character-wearing-futuristic-glasses_688350-121.jpg?w=826" alt=""/>
         <div class="text">
            <p>@KingJnr</p>
            <h3>3.80 ETH</h3>
         </div>
        </div>

        <div class="card">
          <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619508.jpg?w=740&t=st=1672931213~exp=1672931813~hmac=3717d0e03c0553858cba130c8d25f073d176e2371a8828acb4a814282e6361e5" alt=""/>
         <div class="text">
            <p>@Crown</p>
            <h3>6.10 ETH</h3>
         </div>
        </div>

        <div class="card">
          <img src="https://img.freepik.com/free-vector/hand-drawn-pop-art-technology-illustration_23-2149480714.jpg?size=338&ext=jpg" alt=""/>
         <div class="text">
            <p>@Mirza</p>
            <h3>3.00 ETH</h3>
         </div>
        </div>

        <div class="card">
          <img src="https://img.freepik.com/free-vector/hand-drawn-chinese-new-year-lucky-money-illustration_23-2149232638.jpg?size=338&ext=jpg" alt=""/>
         <div class="text">
            <p>@Roku</p>
            <h3>2.87 ETH</h3>
         </div>
        </div>
        <div class="card">
          <img src="https://img.freepik.com/free-vector/classic-retro-80s-style-tropical-sunset-with-palm-tree_1017-31136.jpg?w=900&t=st=1672932932~exp=1672933532~hmac=1a6367fc4412e76c4d78a4ab53182110f998ebef672e2976021b8ceab23a1cf3" alt=""/>
         <div class="text">
            <p>@Lour</p>
            <h3>7.61 ETH</h3>
         </div>
        </div>

        <div class="card">
          <img src="https://img.freepik.com/premium-vector/police-officer-warns-draws-attention-profession-smile-law_158415-75.jpg?size=338&ext=jpg" alt=""/>
         <div class="text">
            <p>@Jinks</p>
            <h3>6.00 ETH</h3>
         </div>
        </div>

        <div class="card">
          <img src="https://img.freepik.com/premium-vector/cute-fat-bo-commercial-use_54889-1107.jpg?size=338&ext=jpg" alt=""/>
         <div class="text">
            <p>@Booby</p>
            <h3>3.21 ETH</h3>
         </div>
        </div>

        <div class="card">
          <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149612179.jpg?w=740&t=st=1672931789~exp=1672932389~hmac=3e872449933157b62158d0122a468f7bd9a242548c7b1bf08a8807a688ba84a8" alt=""/>
         <div class="text">
            <p>@Chinonso</p>
            <h3>10.80 ETH</h3>
         </div>
        </div>
      </div>
    </section>

    <section class="ads">
        <h1>Explore the world of <span>NFT</span></h1>
        <div class="banner_btns">
          <a href=""><button>Explore</button></a>
          <a href=""><button>Buy</button></a>
        </div>
    </section>
    <footer>
      <div class="footer_content">
        <div class="first_section">
          <a href="" class="logo">
            <span class="material-symbols-outlined"> 
              cruelty_free 
            </span>
            Teddy
          </a>
         
        </div>

        <div class="second_section">
          <ul>
            <h3>Market place</h3>
            <li><a href="">Explore</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">How it work's</a></li> 
            <li><a href="">Jobs</a></li>
          </ul>
          <ul>
            <h3>Links</h3>
            <li><a href="">Teddy API</a></li>
            <li><a href="">TED token</a></li>
            <li><a href="">Bug bounty</a></li>
            <li><a href="">Become a partn</a></li>
            <li><a href="">Branding</a></li>
          </ul>
          <ul>
            <h3>Join us</h3>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Discord</a></li>
          </ul>
        </div>  
    </div>
    <p class="copyright">       
      <a href="">Terms & condition</a>
      &copy;Teddy Inc.     
      <a href="">Privacy</a>
    </p>

    </footer>
    </div>
  );
}

export default App;
