import React from 'react'
import AdminTablePanel from './AdminTablePanel'

const AdminPanel = () => {
    return (
        <div className="admin-panel-body">
            <h1>Admin Panel</h1>
            <h4>Users Data</h4>
            <AdminTablePanel/>
        </div>
    )
}

export default AdminPanel
