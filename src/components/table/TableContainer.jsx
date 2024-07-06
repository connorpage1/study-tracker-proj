import { Outlet } from "react-router-dom"
import Table from "./Table"

const TableContainer = () => {
    return (
        <div id="table-container">
            <Outlet />
        </div>
        
    )
}

export default TableContainer