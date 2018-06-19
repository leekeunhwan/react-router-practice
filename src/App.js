import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
            <Link to="/page3">Page 3</Link>
          </div>
          <Switch>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => <div>Home</div>;

const Page1 = () => (
  <div>
    Page1
    {/* {alert("로그인을 해주셔야합니다.")} - 이런식으로 활용가능 */}
    <Redirect to="/page2" />
  </div>
);

const Page2 = () => <div>Page2</div>;

const Page3 = () => <div>Page3</div>;

export default App;
