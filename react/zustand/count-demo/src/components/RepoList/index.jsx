import {
    useRepoStore
} from '@/store/repos'
import { useEffect } from 'react'


const RepoList = () => {
    const {
        repos,
        loading,
        error,
        fetchRepos
    } = useRepoStore()
    useEffect(()=> {
        fetchRepos()
    },[fetchRepos])
    if(loading) {
        return <div>loading</div>
    }
    if(error) {
        return <div>error</div>
    }
    return (
        <div>
            <h2>Repo List</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RepoList