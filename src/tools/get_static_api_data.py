import json
import requests

API_TOKEN = "Bearer "


def get_all_repos_by_username(username: str):
    return requests.get(
        f"https://api.github.com/users/{username}/repos",
        headers={"Authentication": API_TOKEN},
    ).json()


def get_all_repo_language_data_by_username(username: str, repos: dict = None):
    # get repo data via api if its not provided
    if repos is None:
        repos = get_all_repos_by_username(username)

    print("Gathering language data...")
    combined_language_data = {}
    for i in range(len(repos)):
        repo = repos[i]

        print(f"...{i + 1}/{len(repos)} {repo['name']}", end="")

        # get language data via api
        url = repo["languages_url"]
        resp = requests.get(
            url,
            headers={"Authentication": API_TOKEN},
        )

        if not resp.ok:
            print("X Failed")
            continue
        print()

        data: dict = resp.json()

        # combine language data
        for key, val in data.items():
            if key in combined_language_data.keys():
                combined_language_data[key] += val
            else:
                combined_language_data[key] = val

    # format into the correct format for charts.js
    data = {
        "datasets": [
            {"label": "lines of code", "data": list(combined_language_data.values())}
        ],
        "labels": list(combined_language_data.keys()),
    }

    print("complete")
    return data


if __name__ == "__main__":
    with open("../../public/data/repos.json", "w") as fp:
        repos = get_all_repos_by_username("ramonmeza")
        json.dump(repos, fp, indent=4)

    with open("../../public/data/repos.json", "r") as fp:
        repos = json.load(fp)

    with open("../../public/data/repo_language_data.json", "w") as fp:
        repo_language_data = get_all_repo_language_data_by_username("ramonmeza", repos)
        json.dump(repo_language_data, fp, indent=4)
