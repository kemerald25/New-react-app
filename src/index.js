// COMPONENTS
function Header() {
    return (
        <header>
            <nav>
                <div className="navbar">
                    <h3>Favor Bless Media</h3>
                    <ul className="list-items">
                        <a href="">Pricing</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Contact</a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h3>Why choose React</h3>
            <ol>
                <li>It is fun to work with</li>
                <li>Its makes work easier</li>
                <li>Coding feels alive</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <small>@ 2023 Dev Royale All Right Reserved</small>
    )
}
































function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>

    )
}
ReactDOM.render(<App />, document.getElementById("root"))