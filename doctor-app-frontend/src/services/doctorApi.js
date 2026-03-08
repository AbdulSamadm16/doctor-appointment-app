import API_BASE_URL from './apiBase'

const doctorApi = async () => {
  const res = await fetch(`${API_BASE_URL}/doctors`)
  const data = await res.json()
  return data
}

export default doctorApi
