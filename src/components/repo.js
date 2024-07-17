function Repo({ url, name, description }) {
    return (
        <a href={url}>
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div class="text-xl font-medium text-black">{name}</div>
                <p class="text-gray-500">{description}</p>
            </div>
        </a>
    );
}

export default Repo;