import React, { useState } from 'react';
import CardView from './CardView';
import axios from 'axios';

function InfiniteScroll() {

    const [page, setPage] = React.useState(1);
    console.log('sdfsdf', page);
    const [isLoading, setIsLoading] = React.useState(false);
    const [responseList, setResponseList] = React.useState([]);


    React.useEffect(() => {
        fetchMoreData();
    }, [page]);

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        console.log('f', document.documentElement.offsetHeight);

        console.log('l', window.innerHeight + document.documentElement.scrollTop);
        if (
            Math.round(window.innerHeight + document.documentElement.scrollTop) ===
            document.documentElement.offsetHeight
        ) {
            console.log('Reached the bottom');
            setTimeout(() => {
            setPage((prevPage) => prevPage + 1);
            },100);
        }
    };

    const fetchMoreData = () => {
        if (isLoading) return;
        setIsLoading(true);
        console.log('{{{{{{',page)
        axios.get(`/app-api/v1/photo-gallery-feed-page/page/${page}`)
            .then((response) => {
                setResponseList(response?.data?.nodes)
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    };


    return (
        <div className="flex justify-content-center">
            <div className='card-outer'>
                <h3 className='text-center'>My Orkes application</h3>
            </div>
            {
                responseList?.map((item, index) => {
                    return (
                        <div key={index}>
                            <CardView cardList={item} />
                        </div>
                    )
                })
            }
            {isLoading && <div>Loading...</div>}
        </div>
    );
}

export default InfiniteScroll;
