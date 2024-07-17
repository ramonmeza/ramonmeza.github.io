"use client"

import { useEffect, useState } from "react";
import RepoCard from "./components/repoCard";
import { getReposByUsername } from "./githubApi";

export default function Page() {
    const [repoList, setRepoList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function doWork() {
            try {
                const r = await getReposByUsername("ramonmeza");
                console.log(r.data);
                setRepoList(r.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        doWork();
    }, []);

    if (isLoading) {
        return <div>loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const repoCards = repoList.map(repo => {
        return repo.description ? <RepoCard key={repo.id} name={repo.name} html_url={repo.html_url} description={repo.description} /> : null;
    });

    return (
        <div className="container mx-auto">
            <div className="text-xl">
                Home
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
                {repoCards}
            </div>
        </div>);

};