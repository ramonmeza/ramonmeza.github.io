function Repo({ url, name, description }) {
    return (
        <a href={url}>
            <div class="my-6 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
                <div class="text-xl font-medium text-black">{name}</div>
                <p class="mt-2 text-gray-500">{description}</p>
            </div>
        </a>
    );
}

export default Repo;