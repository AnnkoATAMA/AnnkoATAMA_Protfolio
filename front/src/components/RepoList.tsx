import { use } from "../utils/use";

type Repo = {
    id: string;
    name: string;
    html_url: string;
}

const cache = new Map();

export const gitUrl = "https://ungh.cc/users/AnnkoATAMA/repos";

function fetchRepos(): Promise<Repo[]> {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            const repos: Repo[] = Array.from({ length: 10 }, (_, index) => ({
                id: (index + 1).toString(),
                name: `Repo ${index + 1}`,
                html_url: `${gitUrl}/repo${index + 1}`,
            }));
            resolve(repos);
        }, 1000);
    });

    if (!cache.has(gitUrl)) {
        cache.set(gitUrl, promise);
    }
    return cache.get(gitUrl);
}

const RepoList =() => {
    const repos = use<Awaited<ReturnType<typeof fetchRepos>>>(fetchRepos());

    if (!repos || repos.length === 0) {
        return <div>No repositories found.</div>;
    }

    return (
        <ul>
            {repos.map((repo) => (
                <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default RepoList;
