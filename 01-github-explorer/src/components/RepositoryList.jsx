import { useEffect, useState } from "react"

export function RepositoryList(){
    const [repositories,setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])
    return(
        <section className = "repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                <li>
                    <strong>unform</strong>
                    <p>Form React</p>

                    <a href="">Acessar repoistorio</a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Form React</p>

                    <a href="">Acessar repoistorio</a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Form React</p>

                    <a href="">Acessar repoistorio</a>
                </li>
            </ul>
        </section>
    )
}