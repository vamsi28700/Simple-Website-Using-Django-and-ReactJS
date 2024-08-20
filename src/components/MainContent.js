import React, { useState, useEffect } from 'react';

const MainContent = () => {
    const [data, setData] = useState(null);
    const [moreData, setMoreData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/get-data/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));

        fetch('http://127.0.0.1:8000/api/get-more-data/')
            .then(response => response.json())
            .then(data => setMoreData(data))
            .catch(error => console.error('Error fetching more data:', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <main>
            {loading ? <p>Loading...</p> : (
                <div>
                    <p>{data?.message}</p>
                    <p>{moreData?.info}</p>
                </div>
            )}
        </main>
    );
}

export default MainContent;