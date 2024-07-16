import Repo from "./repo";

function RepoList({ repos }) {
    // repos is an array of repo data
    // each element should contain id, html_url, name, and description attributes

    const r = repos.map(repo =>
        <Repo key={repo.id} url={repo.html_url} name={repo.name} description={repo.description} />
    );

    return (r);
}

export default RepoList;