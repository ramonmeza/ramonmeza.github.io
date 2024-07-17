export default function RepoCard({ name, html_url, description }) {
    return (
        <a href={html_url} alt={"Visit " + name} className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
            <div className="flex items-center">
                <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">{name}</h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">{description}</p>
        </a>
    );
};