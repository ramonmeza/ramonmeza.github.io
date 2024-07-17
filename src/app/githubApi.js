import { Octokit } from "octokit";

const githubApi = new Octokit({
    auth: process.env.API_KEY,
});

export async function getReposByUsername(username) {
    const response = await githubApi.request('GET /users/' + username + '/repos');
    return response;
};
