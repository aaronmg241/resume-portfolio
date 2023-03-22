function Project({ img, label, description, onClick }) {
    return (
        <button className="project" onClick={onClick}>
            <div className="white-text item-label"> {label} </div>
            <img src={img} alt="" style={{ borderRadius: 5 }} />
            <div className="project-description"> {description} </div>
        </button>
    );
}

export default Project;
