import { Key } from "react";
import {use} from "../utils/use";

type Repo = {
    id: string;
    name: string;
    html_url: string;
    description: string | null;
}

const cache = new Map();

export const gitUrl = "https://ungh.cc/users/AnnkoATAMA/repos";

function fetchRepos(): Promise<Repo[]> {
    return new Promise((resolve) => {
        const delay = new Promise((res) => setTimeout(res, 1500));
        const fetchPromise = fetch(gitUrl)
            .then((response) => response.json())
            .then((data) => {
                const repos = data.repos.map((repo: any) => ({
                    id: repo.id.toString(),
                    name: repo.name,
                    html_url: `https://github.com/${repo.repo}`,
                    description: repo.description || "",
                }));
                return repos;
            });

        Promise.all([fetchPromise, delay]).then(([repos]) => resolve(repos));
    });
}


function getRepos() {
    if (!cache.has(gitUrl)) {
        const promise = fetchRepos();
        cache.set(gitUrl, promise);
    }
    return cache.get(gitUrl);
}

const RepoList = () => {
    const repos = use<Awaited<ReturnType<typeof getRepos>>>(getRepos());

    return (
        <ul>
            {repos.map((repo: { id: Key | null | undefined; html_url: string | undefined; name: string | undefined; description: string | null | undefined}) => (
                <div key={repo.id} className="container-content">
                    <h3 className="github-title">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </h3>
                    <p className="github-description">{repo.description}</p>
                </div>
            ))}
        </ul>
    );
}

export default RepoList;
