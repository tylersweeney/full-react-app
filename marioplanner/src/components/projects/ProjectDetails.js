import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aliquid minus aut ipsam, voluptatem ex, distinctio recusandae minima repellendus dignissimos sed amet eius ab velit, illum eveniet eaque odit atque?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Tyler Sweeney</div>
                    <div>8 December, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails