function Repo({ url, name, description }) {
    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <a href={url}>  
                <div className="text-xl font-medium text-black">{name}</div>
                <p className="mt-2 text-gray-500">{description}</p>
            </a>
        </div>
    );
}

export default Repo;