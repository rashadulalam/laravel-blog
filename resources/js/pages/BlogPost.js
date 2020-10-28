import React, { Component } from 'react';
import AppRoute from '../AppRoute/AppRoute';
import Sidebar from '../components/Sidebar';

class BlogPost extends Component {
    render() {
        return (
            <>
                <Sidebar>
                    Blog post
                </Sidebar>
            </>
        );
    }
}

export default BlogPost;