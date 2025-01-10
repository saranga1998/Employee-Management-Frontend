import axios from "axios";

const baseUrl = "http://localhost:5278/";

export default {
    holiday(url = baseUrl + 'Holiday/') {
        return {
            fetchAll: () => axios.get(url + 'HolidayDetails'),
            AddHoliday: newDay => axios.post(url + 'AddHoliday', newDay, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            DeleteHoliday: (id) => axios.delete(`${url}DeleteHoliday/${id}`),
            FetchByID: (id) => axios.get(`${url}Edit/${id}`),
            EditHoliday: (id, edit) => axios.put(`${url}Edit/${id}`, edit),
        }
    }
}