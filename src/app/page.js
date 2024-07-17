"use client"

import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";

import RepoList from "@/components/repolist";


export default function Home() {
  const octokit = new Octokit({
    auth: process.env.API_KEY,
  });


  const [repoList, setRepoList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUserRepos(username) {
      try {
        const resp = await octokit.request("GET /users/" + username + "/repos");
        setRepoList(resp.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getUserRepos("ramonmeza");
  }, []);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    );
  }

  return (
    <main>
      <RepoList repos={repoList} />
    </main>
  );
}
