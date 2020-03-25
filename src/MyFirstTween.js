import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

class MyFirstTween extends Component {
    constructor(props) {
        super(props);

        this.logoContainer = null;
        this.logoTween = null;
        this.devLogo = null;
        this.devContainer = null;
    }

    componentDidMount() {
        this.logoTween = new TimelineLite({ paused: true })
            .to(this.logoContainer, 2, { x: 500 })
            .to(this.logoContainer, 1, { rotation: 180, ease: "elastic.out(1, 0.3)", y: -100 });

        this.devLogo = new TimelineLite({ paused: true })
            .to(this.devContainer, 1, { x: 400 })
            .to(this.devContainer, 1, { rotation: 360, ease: "slow(0.7, 0.7, false)", y: 0 });
    }

    render() {
        return (
            <div>
                <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                    alt=""
                    className="img-fluid logo"
                    ref={(img) => (this.logoContainer = img)}
                />
                <button onClick={() => this.logoTween.play()}>Play</button>
                <button onClick={() => this.logoTween.pause()}>Pause</button>
                <button onClick={() => this.logoTween.reverse()}>Reverse</button>
                <button onClick={() => this.logoTween.restart()}>Restart</button>

                <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                    alt=""
                    className="img-fluid logo"
                    ref={(img) => (this.devContainer = img)}
                />
                <button onClick={() => this.devLogo.play()}>Play</button>
                <button onClick={() => this.devLogo.pause()}>Pause</button>
                <button onClick={() => this.devLogo.reverse()}>Reverse</button>
                <button onClick={() => this.devLogo.restart()}>Restart</button>
            </div>
        );
    }
}

export default MyFirstTween;
