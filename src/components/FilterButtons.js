import React, {useEffect} from 'react'

export default function FilterButtons({setFiltered, items, activeFilter, setActiveFilter}) {

    useEffect(() => {
        if(activeFilter === 'All') {
            setFiltered(items);
            return;
        }
        const filteredItem = items.filter((item) => item.filterItem.includes(activeFilter));
        setFiltered(filteredItem);

    },[activeFilter])

  return (
    <div className='filter-container my-4 text-center'>
        <button className={activeFilter === 'All' ? "active" : ""} onClick={() => setActiveFilter('All')}>All</button>
        <button className={activeFilter === 'App' ? "active" : ""} onClick={() => setActiveFilter('App')}>App</button>
        <button className={activeFilter === 'Cards' ? "active" : ""} onClick={() => setActiveFilter('Cards')}>Cards</button>
        <button className={activeFilter === 'Web' ? "active" : ""} onClick={() => setActiveFilter('Web')}>Web</button>

    </div>
  )
}
