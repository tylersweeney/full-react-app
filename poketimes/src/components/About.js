import React from 'react'
import Rainbow from './hoc/Rainbow'

const About = () => {
return (
    <div className="container">
        <h4 className="center">About</h4>
        <p>
            Here is a little paragraph just for fun
        </p>
    </div>
)
}

export default Rainbow(About)