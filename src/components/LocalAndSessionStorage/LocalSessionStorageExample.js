import React from 'react'

const LocalSessionStorageExample = () => {
    localStorage.setItem('name',"shiri");
    sessionStorage.setItem('name',"shiva")
  return (
    <div>
        {
            <>
            <h1>LocalStorage:{localStorage.getItem('name')}</h1>
            <h1>SessionStorage:{sessionStorage.getItem('name')}</h1>
            </>
        }
    </div>
  )
}

export default LocalSessionStorageExample