/**
 * CodePen: http://codepen.io/iamscottcox/pen/xOovbK
 */
class OverwatchLogo extends React.Component {
  componentDidMount() {
    var svg = document.querySelector('svg');
    var goldDarkRing = svg.querySelector('.gold-dark-ring');
    var goldRing1 = svg.getElementById('gold-ring-1');
    var goldRing2 = svg.getElementById('gold-ring-2');
    var goldRing3 = svg.getElementById('gold-ring-3');

    var grayRing1 = svg.getElementById('gray-ring-1');
    var grayRing2 = svg.getElementById('gray-ring-2');
    var grayRing3 = svg.getElementById('gray-ring-3');
    var grayRing4 = svg.getElementById('gray-ring-4');

    function animate(obj) {

      // Variable for current element
      var el = obj.element;

      // Total durations for each animation type
      var svg_dur = 0,
        css_dur = 0;

      for (var i = 0; i < obj.svg.length; i++) {
        svg_dur += obj.svg[i].duration;
      }

      for (var i = 0; i < obj.css.length; i++) {
        css_dur += obj.css[i].duration; //
      }

      // Get radius of the circle
      var rad = el.getAttribute('r');
      // Get the necessary length for future equations
      var len = (2 * Math.PI * rad);

      var transObj = {
        svg: '',
        css: ''
      }

      window.requestAnimationFrame(function() {
        // SVG Animations
        setInterval(function() {

          var counter = 0;

          for (var i = 0; i < obj.svg.length; i++) {

            (function(counter, obj, index) {
              setTimeout(function() {

                var startVal = obj.svg[index].startVal,
                  endVal = obj.svg[index].endVal,
                  duration = obj.svg[index].duration,
                  easing = obj.svg[index].easing;

                // Sets the dash array
                el.style.strokeDasharray = len + ' ' + len;

                el.style.transition = el.style.WebkitTransition = transObj.svg + ', ' + transObj.css;

                // Sets the starting stroke-dashoffset
                el.style.strokeDashoffset = len * startVal;

                // Hack
                el.getBoundingClientRect();

                // Sets transition for stroke-dashoffset
                transObj.svg = 'stroke-dashoffset ' + duration + 's ' + easing;

                el.style.transition = el.style.WebkitTransition = transObj.svg + ', ' + transObj.css;

                // GO!
                el.style.strokeDashoffset = len * endVal;

              }, counter * 1000);
            })(counter, obj, i);

            counter += obj.svg[i].duration;

          }

        }, (svg_dur * 1000));

        // CSS Animations
        setInterval(function() {

          var counter = 0;

          for (var i = 0; i < obj.css.length; i++) {

            (function(counter, obj, index) {
              setTimeout(function() {

                var regex = /^-?\d*\.{0,1}\d+$/;

                var initial = obj.css[0].initial || undefined;

                var rotation = parseInt(el.style.transform.replace(/[^-^\d]/g, '')) || initial || 0;

                var duration = obj.css[index].duration,
                  deg = obj.css[index].deg + rotation,
                  easing = obj.css[index].easing

                transObj.css = 'transform ' + duration + 's ' + easing;

                el.style.transition = el.style.WebkitTransition = transObj.svg + ', ' + transObj.css;

                el.style.transform = 'rotate(' + deg + 'deg)';

              }, counter * 1000);
            })(counter, obj, i);

            counter += obj.css[i].duration;

          }

        }, (css_dur * 1000));
      });

    }
    // Dark Gold Ring
    animate({
      element: goldDarkRing,
      svg: [{
        startVal: 0.4,
        endVal: 0,
        duration: 1.5,
        easing: 'ease-in'
      }, {
        startVal: 0,
        endVal: 0.4,
        duration: 0.5,
        easing: 'ease-out'
      }],
      css: [{
        duration: 1.5,
        deg: 360,
        easing: 'linear',
      }, {
        duration: 0.5,
        deg: 720,
        easing: 'ease-out'
      }]
    });
    // // Gold Ring 1
    animate({
      element: goldRing1,
      svg: [{
        startVal: 0.975,
        endVal: 0.975,
        duration: 1,
        easing: 'linear'
      }],
      css: [{
        duration: 3,
        deg: -360,
        easing: 'linear'
      }]
    });
    // // Gold Ring 2
    animate({
      element: goldRing2,
      svg: [{
        duration: 1.5,
        startVal: 0.95,
        endVal: 0.7,
        easing: 'ease-in'
      }, {
        duration: 1.5,
        startVal: 0.7,
        endVal: 0.95,
        easing: 'ease-out'
      }],
      css: [{
        duration: 1.5,
        easing: 'ease-out',
        deg: 180
      }, {
        duration: 1.5,
        easing: 'ease-in',
        deg: 180
      }]
    });
    // Gold Ring 3
    animate({
      element: goldRing3,
      svg: [{
        duration: 1.5,
        startVal: 0.95,
        endVal: 0.7,
        easing: 'ease-in'
      }, {
        duration: 1.5,
        startVal: 0.7,
        endVal: 0.95,
        easing: 'ease-out'
      }],
      css: [{
        initial: 135,
        duration: 1.5,
        easing: 'ease-out',
        deg: 180
      }, {
        duration: 1.5,
        easing: 'ease-in',
        deg: 180
      }]
    });
    // Gray Ring 1
    animate({
      element: grayRing1,
      svg: [{
        startVal: 0.96,
        endVal: 0.96,
        duration: 1,
        easing: 'linear'
      }],
      css: [{
        initial: 45,
        duration: 1.5,
        deg: -180,
        easing: 'ease-out'
      }, {
        duration: 1.5,
        deg: -180,
        easing: 'ease-in'
      }]
    });
    // Gray Ring 2
    animate({
      element: grayRing2,
      svg: [{
        startVal: 0.985,
        endVal: 0.985,
        duration: 1,
        easing: 'linear'
      }],
      css: [{
        initial: -45,
        duration: 3,
        deg: -360,
        easing: 'linear'
      }, ]
    });
    // Gray Ring 3
    animate({
      element: grayRing3,
      svg: [{
        startVal: 0.9,
        endVal: 0.9,
        duration: 1,
        easing: 'linear'
      }],
      css: [{
        initial: -45,
        duration: 3,
        deg: 360,
        easing: 'linear'
      }, ]
    });
    // Gray Ring 4
    animate({
      element: grayRing4,
      svg: [{
        startVal: 0.9,
        endVal: 0.9,
        duration: 1,
        easing: 'linear'
      }],
      css: [{
        initial: 180,
        duration: 1.5,
        deg: 180,
        easing: 'ease-out'
      }, {
        duration: 1.5,
        deg: 180,
        easing: 'ease-in'
      }]
    });
  }
  
  render() {
    return (
      <a href="http://masteroverwatch.com/profile/pc/us/azle-11499" target="_blank">
        <svg width="200" height="200" viewPort="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g className="overwatch-logo" transform="translate(50, 50)">
            <path id="path3961" d="M49.5,0C38.3,0.1,27.3,4,18.7,11l9.4,11c8-6.3,18.7-8.9,28.7-6.9c5.5,1.1,10.7,3.5,15.1,6.9
            l9.4-11C72.4,3.8,61-0.2,49.5,0z"/>
            <path id="path4052" d="M15.6,13.7C5.7,23.1-0.2,36.6,0,50.4c0,14.2,6.5,28.2,17.3,37.4c10,8.7,23.5,13.2,36.7,12
            c14.3-1.1,27.9-8.7,36.3-20.4c8.2-11.1,11.4-25.6,8.7-39.1c-2-10.3-7.4-19.9-15.1-27.1l-9.4,11c7.6,7.2,11.8,17.8,11,28.2
            c-0.3,5.2-1.8,10.3-4.4,14.8L61.8,48.7l-9.7-20.9l0,31.7l19.4,18.8c-8.7,6.7-20.6,9-31.1,6c-4.3-1.2-8.4-3.2-11.9-5.9l19.6-18.9
            c0-10.3,0.1-21.4,0-31.7l-9.7,21L19,67.4c-5.9-10.3-6.1-23.7-0.4-34.2c1.8-3.3,4.1-6.4,6.9-9l-9.4-11C15.9,13.4,15.8,13.6,15.6,13.7
            z"/>
          </g>
          <circle className="gold-dark-ring spin-clockwise" fill="none" stroke="none" cx="100" cy="100" r="60" strokeWidth="5"></circle>
          <circle id="gold-ring-1" className="gold-ring" fill="none" stroke="none" cx="100" cy="100" r="60" strokeWidth="5"></circle>
          <circle id="gold-ring-2" className="gold-ring" fill="none" stroke="none" cx="100" cy="100" r="60" strokeWidth="5"></circle>
          <circle id="gold-ring-3" className="gold-ring" fill="none" stroke="none" cx="100" cy="100" r="60" strokeWidth="5"></circle> 
          <circle id="gray-ring-1" className="gray-ring" fill="none" stroke="none" cx="100" cy="100" r="75" strokeWidth="5"></circle>
          <circle id="gray-ring-2" className="gray-ring" fill="none" stroke="none" cx="100" cy="100" r="75" strokeWidth="5"></circle>
          <circle id="gray-ring-3" className="gray-ring" fill="none" stroke="none" cx="100" cy="100" r="75" strokeWidth="5"></circle>
          <circle id="gray-ring-4" className="gray-ring" fill="none" stroke="none" cx="100" cy="100" r="75" strokeWidth="5"></circle>
        </svg>
      </a>
    );
  }
}

export default OverwatchLogo;