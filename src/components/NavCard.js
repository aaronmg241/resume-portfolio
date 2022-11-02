import './NavMenu.css';

function NavCard({ label, onClick, img }) {
    return (
        <li className="menu-card">
            <div className="item-label"> {label} </div>
            <button className="card-image" onClick={onClick}>
                <img src={img} alt="" className="" />
            </button>
        </li>
    );
}

export default NavCard;
