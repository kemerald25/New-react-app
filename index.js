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

function AllApp() {
    return (
        <header>
            <nav>
                <h3>Dev Royale</h3>
            </nav>
            <div>
                <h3>Why choose React</h3>
                <ol>
                    <li>It is fun to work with</li>
                    <li>Its makes work easier</li>
                    <li>Coding feels alive</li>
                </ol>
            </div>
            <footer><p>@ 2023 Dev Royale All Right Reserved</p></footer>
        </header>

    )
}

ReactDOM.render(<AllApp />, document.getElementById("root"))