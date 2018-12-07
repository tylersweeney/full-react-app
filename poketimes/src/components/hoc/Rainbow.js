import React from 'react'

const Rainbow = (WrappedComponnent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'yellow', 'green'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text'

    return(props) => {
        return (
            <div className={className}>
                <WrappedComponnent {...props} />
            </div>
        )
    }
    
}

export default Rainbow