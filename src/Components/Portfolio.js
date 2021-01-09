
// ========= Portfolio.js =========

import React, { Component } from 'react';

class Portfolio extends Component {

  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                </div>
              </div>
            </div><br></br>
            <h5>{projects.title}</h5>
            <p>{projects.category}</p>
            <a href={projects.url} target='_blank'>VIEW THIS APPLICATION</a><br></br>
            <a href={projects.github} target='_blank'>GITHUB REPOSITORY</a>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check out some of my projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
