import React from "react";
import './search-panel.css'
import ItemStatusFilter from "./item-status-filter";
const SearchPanel = () => {
    return (
        <div>
            <input type="text" placeholder={'anus'}/>
                <ItemStatusFilter/>
        </div>
    )
};
export default SearchPanel;
