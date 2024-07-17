import Repo from "./repo";

function RepoList({ repos }) {
    // repos is an array of repo data
    // each element should contain id, html_url, name, and description attributes

    const r = repos.map(repo =>
        <Repo key={repo.id} url={repo.html_url} name={repo.name} description={repo.description} />
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {r}
        </div>
    );
}

export default RepoList;