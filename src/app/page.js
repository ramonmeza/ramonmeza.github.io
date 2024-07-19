"use client";

import React, { useEffect, useState } from "react";

// custom components
import Banner from "./components/banner";
import Collapsible from "./components/collapsible";
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
    const [bytesOfCode, setBytesOfCode] = useState(null);
    const [artwork, setArtWork] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                // load data
                let repoData = await fetch('data/repos.json').then(r => r.json());
                setRepos(repoData);

                let bytesOfCodeData = await fetch('data/bytes_of_code.json').then(r => r.json());
                setBytesOfCode(bytesOfCodeData);

                let artworkData = await fetch('data/artwork.json').then(r => r.json());
                setArtWork(artworkData.data)
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

    const artworkCards = artwork.map((art) => {
        return (
            <div className="relative" key={art.id}>
                <a href={art.permalink} target="_blank">
                    <img src={art.cover.thumb_url} alt="" className="block w-full h-auto" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-t from-gray-900/50 to-gray-900/25 overflow-scroll">
                        <div className="p-4 text-white">
                            <div className="text-xl mb-4">
                                {art.title}
                            </div>
                            <div>
                                {art.description}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    });

    return (
        <>
            <div className="bg-gray-100">
                <header>
                    <div className="container mx-auto pt-4 px-4 md:px-0">
                        <Banner avatar="img/avatar.jpg" alt="A picture of myself" title="Ramon Meza" subtitle="Computer Scientist, Musician, Artist" />
                    </div>
                </header>
                <main>
                    <div className="container mx-auto pt-4 px-4 md:px-0">
                        <Collapsible title="Song Releases">
                            <div className="flex flex-col space-y-4">
                                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1848690021&color=%23363634&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                                <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1826944014&color=%23363634&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1827043041&color=%23363634&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                            </div>
                        </Collapsible>
                        <Collapsible open title="Artwork">
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {artworkCards}
                            </div>
                        </Collapsible>
                        <Collapsible title="Repository Statistics">
                            <RepoStats bytesOfCode={bytesOfCode} repos={repos} />
                        </Collapsible>
                        <Collapsible title="All Repositories">
                            <Repositories repos={repos} />
                        </Collapsible>
                    </div>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};