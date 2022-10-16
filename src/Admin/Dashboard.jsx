import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
        <h1>Dashboard Page</h1>
        <hr/>
        <Link to={'/admin/users'}>Users</Link>
    </>
  )
}
