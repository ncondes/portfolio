import { navbarData } from "../../data/navbarData";
import { NavItem } from "./NavItem";


export const Navbar = () => {

    return ( 
        <nav>
            <div className='navbar hidden lg:flex flex-col justify-center fixed inset-y-0 left-3 z-10'>
                {
                    navbarData.map( ( icon, i ) => (
                        <NavItem
                            key={ `${ icon.type}-${i}` }
                            icon={ icon.svg }
                            size={ 22 }
                            name={ icon.type }
                            url={ icon.url }
                        />
                    ))
                }
            </div>
        </nav>
    )
}
