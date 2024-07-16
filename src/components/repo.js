function Repo({ url, name, description }) {
    return (
        <div class="repo">
            <h2><a href={url}>{name}</a></h2>
            <p>{description}</p>
        </div>
    );
}

export default Repo;