import React from 'react'

function FilterButton({ setFilter }) {
  return (
    <>
        <button onClick={() => setFilter('Semua')}>Semua</button>
        <button onClick={() => setFilter('Selesai')}>Selesai</button>
        <button onClick={() => setFilter('Belum Selesai')}>Belum Selesai</button>
    </>
  )
}

export default FilterButton