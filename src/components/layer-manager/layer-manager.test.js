import LayerManager from './layer-manager';
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'


let container = null;
let props2 = [{
    width: 1,
    height: 1,
    src: "src",
    active: false,
    id: "00"
},
{
    width: 1,
    height: 1,
    src: "src",
    active: false,
    id: "00"
}
]

let props0 = []

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("Test layer manager", () => {
    act(() => {
        render(<LayerManager newImageSrc={props2} />, container)
    });
    expect(container.querySelectorAll('img').length).toBe(2);

})

it("Test layer manager", () => {
    
    act(() => {
        render(<LayerManager newImageSrc={props0} />, container)
    });
    expect(container.querySelectorAll('img').length).toBe(0);

})

