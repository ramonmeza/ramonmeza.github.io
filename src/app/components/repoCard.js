export default function RepoCard({ href, title, description }) {
    return (
        <a href={href} className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500" target="_blank">
            <div className="flex items-center">
                <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">{title}</h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">{description}</p>
        </a>
    );
};
