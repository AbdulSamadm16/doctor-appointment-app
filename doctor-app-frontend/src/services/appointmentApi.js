import API_BASE_URL from './apiBase'

const getAppointments = async () => {
  const res = await fetch(`${API_BASE_URL}/appointments`)
  const data = await res.json()
  return data
}

export default getAppointments
