import React from 'react';
import '../App.css';

import { Redirect } from 'react-router-dom';


class NotExist extends React.Component {
    state = {
        redirect: false,
    }


    render() {
        setTimeout(() => {
            this.setState({
                redirect: true,
            })
        }, 5000)
        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }

        return (
            <div className="NotExist">
                <h1><b>Error 404: Not found.</b> Redirecting to "/" in five seconds</h1>
            </div>
        )
    }
}
export default NotExist;