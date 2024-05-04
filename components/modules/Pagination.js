import React, { useEffect, useState } from 'react'

const Pagination = ({ clients, setShownClients }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const clientsPerPage = 4;
    const pageCount = Math.ceil(clients.length / clientsPerPage);

    useEffect(() => {
        const endIndex = currentPage * clientsPerPage;
        const startIndex = endIndex - clientsPerPage;
        const slicedClients = clients.slice(startIndex, endIndex);
        setShownClients(slicedClients)
    }, [currentPage])

    return (
        <div className='w-full flex justify-center items-center flex-row gap-1'>
            {
                new Array(pageCount).fill(0).map((item, index) => (
                    <span className={`${currentPage == index + 1 ? "bg-primary" : "bg-secondary"} px-3 py-1 rounded-sm text-white cursor-pointer hover:bg-primary transition-colors`} onClick={() => setCurrentPage(index + 1)}>{index + 1}</span>
                ))
            }
        </div>
    )
}

export default Pagination