import React, {Component} from 'react';
import Appbar from 'muicss/lib/react/appbar';
import ReactGridLayout from 'react-grid-layout';

class App extends Component {
  render() {

    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
      <div>
        <Appbar><h1>cborg face</h1></Appbar>
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key={'a'}><div style={{backgroundColor:'blue', height: "100%"}}>a</div></div>
          <div key={'b'}><div style={{backgroundColor:'yellow', height: "100%"}}>b</div></div>
          <div key={'c'}><div style={{backgroundColor:'red', height: "100%"}}>c</div></div>
        </ReactGridLayout>
      </div>

    );
  }
}

export default App;
