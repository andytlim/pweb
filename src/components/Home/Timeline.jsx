class Timeline extends React.Component {
  render() {
    return (
      <div id="timeline">	
        <svg id="Layer_1" viewBox="0 0 1170 324.77">		
        {/* main timeline */}
        <line className="cls-1 path"  y1="162.38" x2="1170" y2="162.38"/>
        {/* timeline going up */}
        <line className="cls-2 path2" x1="48.47" y1="159.51" x2="48.47" y2="108.8"/>
        {/* timeline going down */}
        <line className="cls-2 path3" x2="222.93" y2="213.1" x1="222.93" y1="162.38"/>
        {/* timeline going up */}
        <line className="cls-2 path4" x1="396.43" y1="160.51" x2="396.43" y2="109.8"/>
        {/* timeline going down */}
        <line className="cls-2 path5" x2="569.93" y2="213.97" x1="569.93" y1="163.26"/>
        {/* timeline going up */}
        <line className="cls-2 path6" x1="746.93" y1="160.51" x2="746.93" y2="109.8"/>
        {/* timeline going down */}
        <line className="cls-2 path7" x2="920.43" y2="213.97" x1="920.43" y1="163.26"/>
        <circle className="cls-3 circle1" cx="47.47" cy="44.34" r="43.84"/>
        <circle className="cls-3 circle2" cx="226.93" cy="275.41" r="43.84"/>
        <circle className="cls-3 circle3" cx="396.43" cy="44.34" r="43.84"/>
        <circle className="cls-3 circle4" cx="746.93" cy="44.34" r="43.84"/>
        <circle className="cls-3 circle5" cx="569.93" cy="280.43" r="43.84"/>
        <circle className="cls-3 circle6" cx="920.43" cy="280.43" r="43.84"/>
        <div className="textbox1">
           <h3 className="tbc">Before you arrive...</h3>
           <h4 >Your guide will catch fresh bait, <br />
              fuel up the boat and setup at the <br />
              docks.
           </h4>
        </div>
        <div className="textbox2">
           <h3 className="tbc">Meet your guide at <br />
              the launch point
           </h3>
           <h4 >Your guide will be waiting<br />
              for you at the boat,
              ready to <br />
              help you get situated.
           </h4>
        </div>
        <div className="textbox3">
           <h3 className="tbc">Find where the fish <br />
              are biting that day.
           </h3>
           <h4 >Your guide will catch fresh bait, <br />
              fuel up the boat and setup at the <br />
              docks.
           </h4>
        </div>
        <div className="textbox4">
           <h3 className="tbc">Your guide will teach <br />
              you how to cast.
           </h3>
           <h4 >Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
           </h4>
        </div>
        <div className="textbox5" >
           <h3 className="tbc">Dinner is served.</h3>
           <h4 >Call it a day and head back to the docks <br />
              where your guide will fillet your catches.
           </h4>
        </div>
        <div className="textbox6">
           <h3 className="tbc">Don't forget to tip!</h3>
           <h4 >Remember, your guide works hard and
              it’s polite to tip for a job well done!
           </h4>
        </div>
        </svg>
      </div>
    );
  }
}
           
export default Timeline;