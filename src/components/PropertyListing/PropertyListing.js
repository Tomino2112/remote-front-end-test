import React, { useEffect, useState } from 'react';
import { getProperties } from '../../modules/api/connectors';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getProperties().then(setProperties);
    }, []);

    return (
        <div className="PropertyListing">
            {
                properties
                    .map((property, index) => <PropertyCard key={index} {...property}/>)
            }
        </div>
    )
};

export default PropertyListing;
