export const getData = (key) => {
  const res = JSON.parse(localStorage.getItem(key))
  
  return res ? res: []
}

export const setData = (key, arr) => {
  try {
    localStorage.setItem(key, JSON.stringify(arr))
    console.log('item añadido')
  } catch (error) {
    console.log(error)
  }
  
}