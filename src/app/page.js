"use client";

import React, { useEffect, useState } from "react";

// custom components
import Banner from "./components/banner";
import Error from "./components/error";
import Footer from "./components/footer";
import Loading from "./components/loading";
import Repositories from "./components/respositories";
import RepoStats from "./components/repoStats";


// page
export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [repos, setRepos] = useState(null);
    const [repoLanguageData, setRepoLanguageData] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                // load data
                let repoData = await fetch('data/repos.json').then(r => r.json());
                setRepos(repoData);

                let repoLanguageData = await fetch('data/repo_language_data.json').then(r => r.json());
                setRepoLanguageData(repoLanguageData);
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

    return (
        <div>
            <header>
                <div className="container mx-auto pt-4 px-4 md:px-0">
                    <Banner avatar="img/avatar.jpg" alt="A picture of myself" title="Ramon Meza" subtitle="Computer Scientist, Musician, Artist" />
                </div>
            </header>
            <main>
                <div className="container mx-auto pt-4 px-4 md:px-0">
                    <RepoStats repoLanguageData={repoLanguageData} />
                    <Repositories repos={repos} />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
};