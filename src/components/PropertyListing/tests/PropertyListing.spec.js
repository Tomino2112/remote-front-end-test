import React from 'react';
import {shallow, mount} from 'enzyme';
import { act } from 'react-dom/test-utils';
import PropertyListing from '../PropertyListing';

jest.mock("../../../modules/api/connectors", () => {
    const DUMMY_PROPERTY = {
        id: 73864112,
        bedrooms: 3,
        summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
        displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
        propertyType: 'Flat',
        price: 1950000,
        branchName: 'M2 Property, London',
        propertyUrl: '/property-for-sale/property-73864112.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
        propertyTitle: '3 bedroom flat for sale',
        mainImage: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg'
    };

    return {
        getProperties: jest.fn().mockImplementation(() => {
            return Promise.resolve(Array(5).fill(DUMMY_PROPERTY));
        }),
    };
});

describe('PropertyListing', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('.PropertyListing')).toHaveLength(1);
    });

    it('should render five property cards', async () => {    
        const wrapper = mount(<PropertyListing/>);         
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
            wrapper.update();
        });
        expect(wrapper.find('PropertyCard')).toHaveLength(5);
    });
});
