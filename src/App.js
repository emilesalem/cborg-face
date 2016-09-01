import React, {Component} from 'react';
import ReactGridLayout from 'react-grid-layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {

    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Dashboarding"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div>
            <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
              <div key={'a'}>
                <div style={{backgroundColor: 'blue', height: "100%"}}>a</div>
              </div>
              <div key={'b'}>
                <div style={{backgroundColor: 'yellow', height: "100%"}}>b</div>
              </div>
              <div key={'c'}>
                <div style={{backgroundColor: 'red', height: "100%"}}>c</div>
              </div>
            </ReactGridLayout>
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
