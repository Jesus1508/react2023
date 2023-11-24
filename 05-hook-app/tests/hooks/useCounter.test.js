/* eslint-disable no-undef */
import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Pruebas sobre useCounter', () => {
    
    test('debe de retornar los valor por defecto', () => {
        
        const { result } = renderHook( () => useCounter() )
        const { counter, decrement, increment, reset } = result.current

        expect( counter ).toBe(10)
        expect( decrement ).toEqual(( expect.any( Function )))
        expect( increment ).toEqual(( expect.any( Function )))
        expect( reset ).toEqual(( expect.any( Function )))
    });

    test('debe de generar el counter con el valor de 100', () => {
        const value         = 100
        const { result }    = renderHook( () => useCounter(value) )
        const { counter }   = result.current

        expect( counter ).toBe(value)
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook( () => useCounter() )
        const { increment} = result.current
        
        act( () => {
            increment()
            increment(2)
        })

        expect( result.current.counter ).toBe(13)
    });

    test('debe de decrementar el contador', () => {
        const { result } = renderHook( () => useCounter() )
        const { decrement} = result.current
        
        act( () => {
            decrement()
            decrement(2)
        })

        expect( result.current.counter ).toBe(7)
    });

    test('debe de reiniciar el valor de counter', () => {
        const { result } = renderHook( () => useCounter() )
        const { counter, increment, reset} = result.current
        
        act( () => {
            increment()
            increment(2)
            reset()
        })

        expect( result.current.counter ).toBe(10)
    });
});