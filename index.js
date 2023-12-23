// const app =(
//     <div>
//         <h1>My Awesome React App</h1>
//         <h3>Why choose React</h3>
//         <ol>
//             <li>It is fun to work with</li>
//             <li>Its makes work easier</li>
//             <li>Coding feels alive</li>
//         </ol>
//     </div>
// )
// ReactDOM.render(app, document.getElementById("root"))


// Use pascal case instad of carmel case for naming react functions
// import Header from './header'


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

function Footer() {
    return (
        <small>@ 2023 Dev Royale All Right Reserved</small>
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

function AllApp() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>

    )
}

ReactDOM.render(<AllApp />, document.getElementById("root"))