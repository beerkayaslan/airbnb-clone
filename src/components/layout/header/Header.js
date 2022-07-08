import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

export default function Header() {

    return (
        <header>
            <div className="container header-inner">
                <Logo />
                <Search />
                <User />
            </div>
        </header>
    )
}