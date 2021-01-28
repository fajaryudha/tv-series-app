import React from 'react';

const Intro = props => {

    const app_intro = <p className="App-intro">
        {props.massage}
    </p>
    return app_intro;
}

export default Intro;