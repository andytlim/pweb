/**
 * CodePen: http://codepen.io/lloydwheeler/pen/iuCGF
 */
class DesktopImage extends React.Component {
  render() {
    return (
      <div className="device">
        <div className="desktop">
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