// COMPONENTS
function Header() {
    return(
        <header>
            <nav>
                <h3>Dev Royale</h3>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return(
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