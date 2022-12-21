import { useRouteError, userRoutError } from 'react-router-dom'


export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

