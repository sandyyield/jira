
import { useEffect, useState } from 'react'

export const isFalsy: (v: unknown) => boolean = (v) => v === 0 ? true : !!v;

export const cleanObject = (object: object) => {
    const result = { ...object };
    Object.keys(object).forEach(i => {
        //@ts-ignore
        const value = object[i];
        if (!isFalsy(value)) {
            //@ts-ignore
            delete result[i];
        }
    })
    return result;
}

/* custom hooks */

export const useMount = (f: () => void) => {
    useEffect( // eslint-disable-line react-hooks/exhaustive-deps
        f,
        []
    );
}

//
export const useDebounced: <T>(v: T, d?: number) => T = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        let timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);

    }, [value, delay])

    return debouncedValue;
}