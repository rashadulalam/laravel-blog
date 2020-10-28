import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import BlogPost from '../pages/BlogPost';
import Home from '../pages/Home';

class AppRoute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog-post" component={BlogPost} />
                    <Route exact path="/about-me" component={AboutMe} />
                </Switch>
            </>
        );
    }
}

export default AppRoute;