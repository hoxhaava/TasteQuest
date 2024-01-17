import axios from 'axios'

export default axios.create({
    baseURL: process.env.YELP_API,
    headers: {
        Authorization: process.env.TOKEN
    }
})

