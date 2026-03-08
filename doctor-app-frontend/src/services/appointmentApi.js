
const getAppointments = async () => {
       const res = await fetch("http://localhost:5000/appointments")
        const data = await res.json()
        return data
    }

export default getAppointments
