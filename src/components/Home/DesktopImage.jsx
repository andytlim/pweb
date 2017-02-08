/**
 * CodePen: http://codepen.io/lloydwheeler/pen/iuCGF
 */
class DesktopImage extends React.Component {
  constructor() {
    super();
    this.getView = this.getView.bind(this);
    this.updateView = this.updateView.bind(this);
    this.state = {
      view: this.getView()
    };
    window.addEventListener('resize', this.updateView);
  }
    
  updateView() {
    this.setState({view: this.getView()});
  }
  
  getView() {
    if (window.innerWidth < 600)
      return 'phone';
    else if (window.innerWidth < 1000)
      return 'tablet';    
    else 
      return 'desktop';
  }
  
  render() {
    return (
      <div className="device">
        <div className={this.state.view}>
          <div className="camera"></div>
          <div className="close"></div>
          <div className="minimise"></div>
          <div className="maximise"></div>
          <div className="speaker"></div>
          <div className="screen">
            <div className="scrollbar"></div>
            <header>
              <div className="menu">
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
              </div>
            </header>
            <div className="image"></div>
            <div className="container">
              <div className="main">
                <div className="faux-text"></div>
                <div className="faux-text"></div>
                <div className="faux-text"></div>
                <div className="faux-text"></div>
                <div className="faux-text"></div>
              </div>
              <div className="sidebar">
                <div className="faux-text"></div>
                <div className="faux-text"></div>
                <div className="faux-text"></div>
              </div>
            </div>
          </div>
          <div className="button">
            <div className="inner-button"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopImage;