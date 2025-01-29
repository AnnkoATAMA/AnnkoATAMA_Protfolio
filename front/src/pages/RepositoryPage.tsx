import Loading from "../components/layout/Loading.tsx";
import {Suspense} from "react";
import RepoList from "../components/RepoList.tsx";

const RepositoryPage = () => {

    return (
        <div>
            <h1>Repository Page</h1>
            <Suspense fallback={<Loading/>}>
                <RepoList />
            </Suspense>
        </div>
    );
};

export default RepositoryPage;
