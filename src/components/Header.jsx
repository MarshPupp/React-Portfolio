import Navigation from './Navigation';

function Header({currentPage, handlePageChange}) {
    <header>
        <>
            <h1 className="name">Tabitha Buder</h1>
        </>
        <>
            <Navigation currentPage={currentPage} 
                    handlePageChange={handlePageChange} ></Navigation>
        </>
    </header>
}

export default Header