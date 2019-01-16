import React, { Component } from 'react';
import './App.css';
import FeedList from './components/feed_list';
const POSTS = [
  { 
    id: 1, category: 'Gaming, Entertainment, Film', title: 'EA has reportedly cancelled its story-driven Star Wars game', content: 'Now, according to Kotaku’s Jason Schreier, EA has officially cancelled the game, despite the studio responsible, EA Vancouver, having largely restarted from scratch with what it inherited from Visceral back in October 2017. EA was not immediately available for comment.The news is a sad end for a project that many fans hoped would carry the flame for narrative Star Wars games.he franchise has historically been home to some of the most formative role-playing titles in the industry, when LucasArts' 
  },
  {
    id: 2, category: 'Tech, YouTube, Culture', title: 'YouTube’s guidelines now address dangerous pranks following Bird Box, Tide Pod challenges', content: 'YouTube is home to many beloved viral challenges and pranks, but we need to make sure what’s funny doesn’t cross the line into also being harmful or dangerous. We’ve made it clear that our policies prohibiting harmful and dangerous content also extend to pranks with a perceived danger of serious physical injury. We don’t allow pranks that make victims believe they’re in serious physical danger — for example, a home invasion prank or a drive-by shooting prank.' 
  },
  {
    id: 3, category: 'Web, Tech, Twitter', title: 'Twitter brings the reverse-chronological feed to Android', content: 'Twitter brought its traditional reverse-chronological timeline back to iOS last month, and now the optional feature is available to Android users in a new update. It’s a welcome choice that brings back some stability to the Twitter feed. Twitter switched to an algorithm-based timeline four years ago during a time when social networks like Facebook and Instagram were experimenting with how best to display feeds to users.' 
  },
  { 
    id: 4, category: 'Microsoft, Gaming, Policy & Law', title: 'Forza Horizon 4 removes dance emotes at the center of ongoing Fortnite copyright lawsuits', content: 'Microsoft-owned Turn 10 Studios, which develops the Forza series of racing games for Xbox and PC, today announced it would be removing two controversial dance emotes from its latest entry, Forza Horizon 4. The news, spotted by Polygon and announced on Forza’s website as part of the most recent update release notes, marks the first instance of a game developer backing away from asserting its right to copy and include a virtual version of a dance move popularized in real life. The news follows numerous lawsuits against Fortnite creator Epic Games for doing the same in its massively popular battle royale game.'
  },
  { 
    id: 5, category: 'Science', title: 'CERN wants to build the biggest, baddest particle collider ever', content: 'The design for the Future Collision Collider lays out a few different potential aspects of the facility. There’s the huge tunnel, which will let the thin beams of particles travel without having to navigate curves that are quite as tight (relatively) as the LHC’s. Then there’s a collider called a lepton collider which would, well, smash particles called leptons together. It could potentially give researchers more accurate measurements of the Higgs and other particles that scientists are just starting to understand. There’s also another larger hadron collider that would be able to smash particles together at even higher energies.' 
  }
];
const postsPerPage = 3;
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    const { currentPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = POSTS.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(POSTS.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      const selected = currentPage == number ? '': 'unselected';
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={selected}
        >
          {number}
        </li>
      );
    });
    return (
      <div className="container center-container">
        <FeedList posts={currentPosts}/>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default App;
