
//not-found page is a special page which is used to show the 404 page of the application.
//by the term special page i meant it's name is already predefined in nextjs just like page.jsx and route.js
//not-found.js components do not accept any props.
import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link href="/">Return Home</Link>

        </div>
    )
}