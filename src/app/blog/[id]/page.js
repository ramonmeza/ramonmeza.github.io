export default function Page({ params }) {
    return <h1>Post ({params.id})</h1>
}

export async function generateStaticParams() {
    return posts
}
