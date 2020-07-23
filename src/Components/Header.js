import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Hjem</a></li>
            <li><a className="smoothscroll" href="#about">Om meg</a></li>
	         <li><a className="smoothscroll" href="#resume">CV</a></li>
            <li><a className="smoothscroll" href="#portfolio">Prosjekt</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline"> {name}</h1>
            <h3>Jeg studerer <span>Datateknologi</span> på NTNU. Ved siden av studiene er jeg aktiv i verv, deriblant <span>nestleder for itDAGENE 2020 </span>.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
