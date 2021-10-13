import React, {useState,useEffect} from 'react'
import AdminTablePanel from './AdminTablePanel'
import './AdminPanel.css'

const AdminPanel = () => {
    
    return (
        <div className="admin-panel-body">
            <h1>אדמין פאנל</h1>
            <h4>משתמשים ממתינים לאישור</h4>
            <AdminTablePanel />
            <h4>משתמשים לא מאושרים</h4>
            <AdminTablePanel notApproved={true} />
        </div>
    )
}

export default AdminPanel
