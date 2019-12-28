import React from 'react';
import Header from '../component/Header.js';
import { create} from 'react-test-renderer';

describe('Snapshot component',() => {
    test('testing header component' ,() => {
        let tree = create(<Header/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })
});