import SearchBar from '../SearchBar/SearchBar.js';

function Header(props) {

    const search = props.search;

    return(
        <>
            <header>
                <h1>Emoji Search</h1>
                <SearchBar />
            </header>
        </>
    );
}

export default Header;