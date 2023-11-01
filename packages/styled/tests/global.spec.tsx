import {render} from "./helper";
import {createGlobalStyle} from "@qinetik/emotion";

const MyGlobalStyles = createGlobalStyle`

    .red {
        color: red;
    }

    .blue {
        color: blue;
    }
    
    .red.blue{
        color : yellow;
    }

    #white {
        color: white;
    }

`

function ele(syntax: string): HTMLElement {
    let ele: HTMLElement | null = null
    let lastAction: string | null = null
    let collect: string = ""
    const commit = () => {
        if (ele == null) {
            ele = document.createElement(collect)
            collect = ""
        } else {
            if (lastAction == '.') {
                ele.classList.add(collect)
                collect = ""
            } else if (lastAction == '#') {
                ele.id = collect
                collect = ""
            }
        }
    }
    for (let i = 0; i < syntax.length; i++) {
        if (syntax[i] == '.') {
            commit()
            lastAction = '.'
        } else if (syntax[i] == '#') {
            commit()
            lastAction = '#'
        } else {
            collect += syntax[i]
        }
    }
    commit()
    return ele!
}

describe('styled', () => {
    it('works with single style property', () => {
        render(() => <MyGlobalStyles/>, {});
        expect(window.getComputedStyle(ele("p.red"))['color']).toEqual('red');
        expect(window.getComputedStyle(ele("p.blue"))['color']).toEqual('blue');
        expect(window.getComputedStyle(ele("p.red.blue"))['color']).toEqual('yellow');
        expect(window.getComputedStyle(ele("p#white"))['color']).toEqual('white');
    });
})