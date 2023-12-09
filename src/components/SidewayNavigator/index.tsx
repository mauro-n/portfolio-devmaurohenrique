import { Heading } from '../Heading';
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';

export type sidewayNavigatorConfig = {
    [name: string]: string
}

interface SidewayNavigator extends React.HTMLProps<HTMLDivElement> {
    config: sidewayNavigatorConfig
}

type pageState = {
    key?: string,
    value?: string,
    hasNext: boolean,
    hasPrevious: boolean,
    direction: 1 | -1 | 0
}

export const SidewayNavigator = ({ config }: SidewayNavigator) => {
    const [current, setCurrent] = useState<pageState>()
    const counter = useRef(0)
    const navigate = useNavigate()
    const lArrowRef = useRef<HTMLImageElement>(null)
    const rArrowRef = useRef<HTMLImageElement>(null)

    const makeIterator = (object: sidewayNavigatorConfig) => {
        const entries = Object.entries(object);

        return {
            next: () => {
                if (counter.current + 1 >= entries.length) {
                    let nextkey = entries[counter.current][0];
                    let nextValue = entries[counter.current][1];
                    return { key: nextkey, value: nextValue, hasNext: false, direction: 1 } as pageState;
                }

                counter.current += 1;
                const hasNxt = counter.current + 1 < entries.length;
                const hasPrev = counter.current - 1 >= 0;
                let nextkey = entries[counter.current][0];
                let nextValue = entries[counter.current][1];

                return {
                    key: nextkey,
                    value: nextValue,
                    hasNext: hasNxt,
                    hasPrevious: hasPrev,
                    direction: 1
                } as pageState
            },
            previous: () => {
                if (counter.current >= entries.length) {
                    counter.current = entries.length - 1
                }

                if (counter.current - 1 < 0) {
                    let nextkey = entries[counter.current][0];
                    let nextValue = entries[counter.current][1];
                    return { key: nextkey, value: nextValue, hasPrevious: false, direction: -1 } as pageState
                }

                counter.current -= 1;
                const hasNxt = counter.current + 1 < entries.length;
                const hasPrev = counter.current - 1 >= 0;
                let nextkey = entries[counter.current][0];
                let nextValue = entries[counter.current][1];

                return {
                    key: nextkey,
                    value: nextValue,
                    hasPrevious: hasPrev,
                    hasNext: hasNxt,
                    direction: -1
                } as pageState
            },
            current: () => {
                let nextkey = entries[counter.current][0];
                let nextValue = entries[counter.current][1];
                const hasNxt = counter.current + 1 < entries.length;
                const hasPrev = counter.current - 1 >= 0;

                return {
                    key: nextkey,
                    value: nextValue,
                    hasNext: hasNxt,
                    hasPrevious: hasPrev,
                    direction: 0
                } as pageState
            }
        }
    }

    const nextPage = () => {
        const state = configIterator.next()
        setCurrent(state)
    }

    const previousPage = () => {
        const state = configIterator.previous()
        setCurrent(state)
    }

    const configIterator = makeIterator(config)

    useEffect(() => {
        setCurrent(configIterator.current())
    }, []);

    useEffect(() => {
        if (current?.value) navigate(current.value, { state: current?.direction });
    }, [current])

    return (
        <div
            className="d-flex mb-4 mt-5 mt-lg-1 justify-content-center align-items-center"
        >
            <div
                onClick={previousPage}
                className={`
                    ${current?.hasPrevious ? '' : style['disabled']}  
                    ${style['clickable-area']}                   
                    d-flex
                `}
            >
                <img
                    ref={lArrowRef}
                    className={`
                    ${current?.hasPrevious ? '' : style['disabled']} 
                    ${style['arrow']}
                    mx-4
                `}
                    src={leftArrow}
                    alt="seta para a esquerda"
                />
            </div>
            <Heading as="h2" variant='overline' size={3}>
                {current?.key || 'Carregando'}
            </Heading>
            <div
                onClick={nextPage}
                className={`
                    ${current?.hasNext ? '' : style['disabled']}  
                    ${style['clickable-area']}                   
                    d-flex
                `}
            >
                <img
                    ref={rArrowRef}
                    className={`
                    ${current?.hasNext ? '' : style['disabled']} 
                    ${style['arrow']}
                    mx-4
                `}
                    src={rightArrow}
                    alt="seta para a direita"
                />
            </div>
        </div>
    )
}
