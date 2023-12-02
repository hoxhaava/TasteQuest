import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UlNAGuqe2XM1PQBfQfGbvioN7EBS1EHDknNhmIxgw5ocgibzNpRYngiX9Ezz0j5Suy_ZLJytYZSomTqOh-s6khrRlqhcyeeFz1GZJVX8_l-fHkBrkNG_O2pVQAynY3Yx'
    }
})

