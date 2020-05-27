import React, {Component} from 'react'
import '../../assets/styles/Body.less';

class Body extends Component {
    render() {
        return (
            <section className="body-background">
                <div className="center">
                <p className="title">Hello I am <span className="name">Sandhya Srinivasan</span>,</p>
                <p className="title">a Full stack enthusiast!</p>
                </div>
                </section>
        )
    }
}

export default Body;