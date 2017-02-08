import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ContainerNav from './ContainerNav.jsx';
import DesktopImage from './DesktopImage.jsx';
import OverwatchLogo from './OverwatchLogo.jsx';
import TypeItOut from './TypeItOut.jsx';
import Timeline from './Timeline.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className='section-me'>
          <div className='selfie'></div>
          <div className='text'>
            <div className='location'>Seattle, WA</div>
            <p>Hi, I am [A]ndy.</p>
            <p>Software engineer, entrepreneur.</p>
            <p>I develop productivity tools and scaleable platforms. Drop me <a href="mailto:andytlim@gmail.com?subject=Notice me senpai!" target="_blank">a line</a> if you want to chat, I would love to talk!</p>
          </div>
          <ContainerNav 
            className='container-nav' 
            links={[
                {'url': 'https://ca.linkedin.com/in/andytlim', 'cls': 'linkedin'},
                {'url': 'https://github.com/andytlim', 'cls': 'github'}      
            ]} 
          />
        </section>
        <section className='alt-section-1'>
          <DesktopImage />
          <TypeItOut />
          <div className='blurb'>I have 5-6+ years expierence in software engineering. I specialize in full stack and back-end services. I currently have one tool on the market for purchase called Ramune. I am actively looking for investment opportunities and can offer technical mentorship and consulting.</div>
        </section>
        <section className='alt-section-1'>
          <div className='blurb'>TODO: Add more about me :)</div>
        </section>
        <section className='alt-section-2'>
          <OverwatchLogo />
        </section>
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.body);