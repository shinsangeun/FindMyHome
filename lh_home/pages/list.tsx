import {useQuery} from "react-query";

const list = () => {
    const {isLoading, error, data} = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
            res.json()
        )
    )

    console.log("data:", data)

    if (isLoading) return 'Loading...'
    if (error) return 'Error'

    return(
        <div>
            {data.id}
        </div>
    )
}

export default list;