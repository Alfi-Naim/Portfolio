import Navigation from '../Navigation/Navigation';
import Social from '../Social/Social';
import './Menu.css';

function Menu({ menuOpen, setMenuOpen }) {

    return (
        <aside className={`menu ${menuOpen && 'menu_opened'}`}>
            <div className="menu__wrapper">
                <Navigation vertical={true} setMenuOpen={setMenuOpen}/>
                <Social vertical={false} setMenuOpen={setMenuOpen} />
            </div>
        </aside>
    );
}

export default Menu;
