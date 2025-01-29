import Loading from "../components/layout/Loading.tsx";
import {Suspense} from "react";
import RepoList from "../components/RepoList.tsx";
import "./css/repository.css"
const RepositoryPage = () => {

    return (
        <div className="repository-container">
            <h1>Repository Page</h1>
            <Suspense fallback={<Loading/>}>
                <RepoList />
            </Suspense>
        </div>
    );
};

export default RepositoryPage;
