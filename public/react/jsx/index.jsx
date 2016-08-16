var ContainerNav = React.createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        {this.props.links.map(function(o, i) {
          return <a key={i} href={o.url} className={o.cls} target='_blank'></a>;
        })}
      </div>
    )
  }
});

var SectionMe = React.createClass({
  render: function() {
    return (
      <section className='section-me'>
        <div className='selfie'></div>
        <div className='text'>
          <div className='location'>Seattle, WA</div>
          <p>Hi, I'm [A]</p>
          <p>I'm a full stack developer, and entrepreneur.</p>
          <p>I create websites, from simple landing pages to full online platforms. Drop me <a href="mailto:andytlim@gmail.com?subject=Notice me senpai!" target="_blank">a line</a> if you want to chat, I'd love to talk!</p>
        </div>
        <ContainerNav 
          className='container-nav' 
          links={[
              {'url': 'https://ca.linkedin.com/in/andytlim', 'cls': 'linkedin'},
              {'url': 'https://github.com/andytlim', 'cls': 'github'}      
          ]} 
        />        
      </section>        
    )
  }
});

var pweb = <SectionMe />;