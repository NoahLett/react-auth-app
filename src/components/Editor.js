import { Link } from "react-router-dom";

const Editor = () => {
    return (
        <section>
            <h1>Editor's Page</h1>
            <br/>
            <p>You must have an editor role to be here.</p>
            <div>
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Editor;