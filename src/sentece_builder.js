import React from 'react';

export default class SentenceBuilder extends React.Component {

    constructor() {
        super()
        this.state = {
            adjective: null,
            noun: null
        }
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/hugsy/8910dc78d208e40de42deb29e62df913/raw/eec99c5597a73f6a9240cab26965a8609fa0f6ea/english-nouns.txt')
            .then((response) => response.text())
            .then((data) => {
                let split_data = data.split("\n")
                console.log(split_data)
                this.setState({ noun: split_data[Math.floor(Math.random() * split_data.length)] })
            })

        fetch('https://gist.githubusercontent.com/hugsy/8910dc78d208e40de42deb29e62df913/raw/eec99c5597a73f6a9240cab26965a8609fa0f6ea/english-adjectives.txt')
            .then((response) => response.text())
            .then((data) => {
                let split_data = data.split("\n")
                this.setState({ adjective: split_data[Math.floor(Math.random() * split_data.length)] })
            })
    }

    render() {
        return (
            <div>
                <a href="https://github.com/ramonmeza">
                    <img class='profile_pic' src="images/profile_pic.jpg" alt="It's a-me" />
                </a>
                <p>
                    Ramon is {(this.state.adjective && this.state.adjective.match('^[aieouAIEOU].*')) ? 'an' : 'a'} <span class="adjective">{this.state.adjective}</span> <span class="noun">{this.state.noun}</span>.
                </p >
            </div>
        )
    }
}
