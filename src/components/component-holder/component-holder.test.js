import ComponentHolder from './component-holder';
import React from 'react'
import { render, unmountComponentAtNode, unstable_renderSubtreeIntoContainer } from 'react-dom';
import { act } from 'react-dom/test-utils'

let container = null;
initialState = {
    imageSet: [{
        width: 1,
        height: 1,
        src: "src",
        active: true,
        id: new Date().valueOf()
    }]
}

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("Test remove photo layer: ", () => {
    act(() => { 
        
    });
    expect();
})