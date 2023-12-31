import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'Boston'

                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong.')
        }
    }

    // Call searchApi when component is first rendered -> BAD CODE
    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}