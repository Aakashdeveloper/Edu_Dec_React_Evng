import React from 'react';
import Header from '../component/Header';
import {create} from 'react-test-renderer';

describe('Header Snapshot', () => {
    test("Header",() => {
        let tree = create(<Header/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
