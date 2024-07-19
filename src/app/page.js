"use client";

import React, { useEffect, useState } from "react";

// custom components
import ArtworkCard from "./components/artworkCard";
import Banner from "./components/banner";
import Collapsible from "./components/collapsible";
import Error from "./components/error";
import Footer from "./components/footer";
import Grid from "./components/grid";
import Loading from "./components/loading";
import RepoCard from "./components/repoCard";
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
            <ArtworkCard key={art.id} href={art.permalink} imgSrc={art.cover.thumb_url} title={art.title} description={art.description} />
        );
    });

    const repoCards = repos.map((repo) => {
        return (
            <RepoCard key={repo.id} href={repo.html_url} title={repo.name} description={repo.description} />
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
                            <Grid>
                                {artworkCards}
                            </Grid>
                        </Collapsible>
                        <Collapsible title="Repository Statistics">
                            <RepoStats bytesOfCode={bytesOfCode} repos={repos} />
                        </Collapsible>
                        <Collapsible title="All Repositories">
                            <Grid>
                                {repoCards}
                            </Grid>
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