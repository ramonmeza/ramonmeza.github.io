export default function Repositories({ repos }) {
    const repoCards = repos.map((repo) => {
        return (
            <a href="#" key={repo.id} className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div className="flex items-center">
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">{repo.name}</h3>
                </div>
                <p className="text-slate-500 group-hover:text-white text-sm">{repo.description}</p>
            </a>
        );
    });

    return (
        <div className="mb-4">
            <div className="py-4 text-3xl font-medium text-gray-700">Repositories</div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {repoCards}
            </div>
        </div>
    );
};