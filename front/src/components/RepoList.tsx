import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {use} from "../utils/use";

type Repo = {
    repo: string;
    id: string;
    name: string;
    html_url: string;
    description: string | null;
}

const cache = new Map();

export const gitUrl = "https://ungh.cc/users/AnnkoATAMA/repos";

function fetchRepos(): Promise<Repo[]> {
    return new Promise((resolve) => {
        fetch(gitUrl)
            .then((response) => response.json())
            .then((data) => {
                const repos = data.repos.map((repo: any) => ({
                    id: repo.id.toString(),
                    name: repo.name,
                    repo: repo.repo,
                    html_url: `https://github.com/${repo.repo}`,
                    description: repo.description || "",
                }));
                resolve(repos);
            });
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
            {repos.map((repo: { id: Key | null | undefined; html_url: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
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
