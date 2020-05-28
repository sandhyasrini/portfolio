import React, {Component} from 'react'
import '../../assets/styles/Body.less';

class Body extends Component {
    state = {
        left: 0,
        top: 0
    }
    componentDidMount() {
        let cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX, top: e.pageY});
        });
    }
    render() {
        return (
            <section className="body-background">
                <div style={{left: this.state.left, top: this.state.top}} className="cursor-pointer"></div>
                <div className="center">
                <p className="title">Hello I am <span className="name">Sandhya Srinivasan</span>,</p>
                <p className="title">a Full stack enthusiast!</p>
                </div>
                </section>
        )
    }
}

export default Body;