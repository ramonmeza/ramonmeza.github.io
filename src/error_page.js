import { useRouteError } from 'react-router-dom'

const denial_msgs = [
    'You shouldn\'t be snooping around.',
    'You aren\'t suppose to be here.',
    'Don\'t try that again',
    'What are you trying to find?',
    'You aren\'t going to understand.',
    'You don\'t belong here.',
    'You shouldn\'t be here.',
]

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div>
            <p>
                {denial_msgs[Math.floor(Math.random() * denial_msgs.length)]}
            </p>
        </div>
    )
}

