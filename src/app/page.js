"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// custom components
import Error from "./components/error";
import Loading from "./components/loading";
import Banner from "./components/banner";

// page
export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [repos, setRepos] = useState(null);
    const [languageStats, setLanguageStats] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                // load data
                let repoData = await fetch('data/repos.json').then(r => r.json());
                setRepos(repoData);

                let languageStatsData = await fetch('data/language_stats.json').then(r => r.json());
                setLanguageStats(languageStatsData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        load()
    }, []);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <Error error={error} />
        )
    }

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
        <div className="container mx-auto">
            <header>
                <Banner avatar="img/avatar.jpg" alt="A picture of myself" title="Ramon Meza" subtitle="Computer Scientist, Musician, Artist" />
            </header>
            <main>
                <div>
                    <div className="mb-4 text-3xl font-medium text-gray-700">Repositories</div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {repoCards}
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    &copy;2024 Ramon Meza
                </div>
            </footer>
        </div>
    )
};