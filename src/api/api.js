import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ab72e42d-b275-49cf-a980-92a86d9984fd"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(u) {
        return instance.post(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(u) {
        return instance.delete(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    }
}