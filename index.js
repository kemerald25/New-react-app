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

function AllApp () {
    return(
        <div>
        <h1>My Awesome React App</h1>
        <h3>Why choose React</h3>
        <ol>
            <li>It is fun to work with</li>
            <li>Its makes work easier</li>
            <li>Coding feels alive</li>
        </ol>
    </div>
    )
}

ReactDOM.render(<AllApp />, document.getElementById("root"))