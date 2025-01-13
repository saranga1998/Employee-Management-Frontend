import axios from "axios";

const baseUrl = "http://localhost:5278/";

export default {
    holiday(url = baseUrl + 'Holiday/') {
        return {
            fetchDays: () => axios.get(url + 'HolidayDetails'),
            Adddate: newDay => axios.post(url + 'AddHoliday', newDay, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            DeleteHoliday: (id) => axios.delete(`${url}DeleteHoliday/${id}`),
            FetchByID: (id) => axios.get(`${url}EditHoliday/${id}`),
            EditHoliday: (id, edit) => axios.put(`${url}EditHoliday/${id}`,edit),
        }
    }
}