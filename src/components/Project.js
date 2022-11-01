function Project( { img, label, description }) {

    return (
        <div className="project">
            <div className='white-text item-label'> {label} </div>
            <img src={img} alt=""/> 
            <div className="project-description"> {description} </div>
        </div>      
    )

}

export default Project