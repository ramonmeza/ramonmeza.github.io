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
      <div className="min-h-screen bg-gray-100">
        <div className="flex h-screen">
          <div className="m-auto">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 20 20"></svg>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="flex h-screen">
          <div className="m-auto items-center">
            <div className="text-red-500 text-xl font-medium text-black">Error</div>
            <div className="mt-2 text-gray-500">{error.message}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <section>
          <div>
            <div class="text-xl font-medium text-black">Programming Projects</div>
            <RepoList className="m" repos={repoList} />
          </div>
        </section>
      </main>
    </div>
  );
}
