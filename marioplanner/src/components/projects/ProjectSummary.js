import React from 'react'

const ProjectSummary = () => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                    <p>Posted by Tyler Sweeney</p>
                    <p className="grey-text">8th December, 1:30PM</p>
            </div>
        </div>
    )
}

export default ProjectSummary