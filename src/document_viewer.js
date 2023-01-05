import { Component } from "react";

class DocumentViewer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            path: props.path,
            data: null
        }
    }

    componentDidMount() {
        fetch(this.state.path)
            .then((response) => response.text())
            .then((data) => {
                this.setState({ data: data })
            })
    }

    render() {
        return (
            <div class='dv'>
                <p>
                    {this.state.data}
                </p >
            </div>
        )
    }
}

export default DocumentViewer
