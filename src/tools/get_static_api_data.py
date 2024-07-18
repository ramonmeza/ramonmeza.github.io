import json
import requests

API_TOKEN = "Bearer "


def get_all_repos_by_username(username: str):
    return requests.get(
        f"https://api.github.com/users/{username}/repos",
        headers={"Authentication": API_TOKEN},
    ).json()


def get_bytes_of_code(username: str, repos: dict):
    print("Gathering language data...")
    bytecounts: dict = {}
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

        json: dict = resp.json()

        # combine language data
        for key, val in json.items():
            if key in bytecounts.keys():
                bytecounts[key] += val
            else:
                bytecounts[key] = val

    # format into the correct format for charts.js
    data: dict = {
        "datasets": [{"label": "bytes of code", "data": list(bytecounts.values())}],
        "labels": list(bytecounts.keys()),
    }

    print("complete")
    return data


if __name__ == "__main__":
    # uncomment to create repos.json
    # with open("../../public/data/repos.json", "w") as fp:
    #     repos = get_all_repos_by_username("ramonmeza")
    #     json.dump(repos, fp, indent=4)

    # uncomment to load repo data
    with open("../../public/data/repos.json", "r") as fp:
        repos = json.load(fp)

    # uncomment to create bytes_of_code.json
    # with open("../../public/data/bytes_of_code.json", "w") as fp:
    #     bytes_of_code = get_bytes_of_code("ramonmeza", repos)
    #     json.dump(bytes_of_code, fp, indent=4)
