export default function Error({ error }) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-4">
                <h1 className="text-red-500 text-4xl text-center">Error</h1>
                <p className="text-gray-500 text-lg">{error.message}</p>
            </div>
        </div>
    )
};