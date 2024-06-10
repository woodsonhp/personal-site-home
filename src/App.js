
import './App.css';

import linkedInLogo from './assets/LI-In-Bug.png';
import githubLogo from './assets/github-mark-white.png';
import leetcodeLogo from './assets/leetcode_icon.png';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome </h1>
        <p> I'm Woodson, and this is my website.
          Updates coming soon!
        </p>
        <div class="logo-link-container">
          <a href="https://www.linkedin.com/in/woodson-parker/" className="logo-link"><img src={linkedInLogo} alt="My LinkedIn Profile"/></a>
          <a href="https://github.com/woodsonhp" className="logo-link"><img src={githubLogo} alt="My GitHub Profile"/></a>
          <a href="https://leetcode.com/u/woodsonhp/" className="logo-link"><img src={leetcodeLogo} alt="My Leetcode Profile"/></a>
        </div>
      </header>
    </div>
  );
}

export default App;
