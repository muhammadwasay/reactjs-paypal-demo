import React, { useState, useRef, useEffect } from 'react';

function useScript(src) {
    const [state, setState] = useState({
        loaded: false,
        error: false
    });

    useEffect(
        () => {
            let script = document.createElement('script');
            script.src = src;
            script.async = true;
            const onScriptLoad = () => {
                setState({
                    loaded: true,
                    error: false
                });
            };
            const onScriptError = () => {
                setState({
                    loaded: true,
                    error: true
                });
            };

            script.addEventListener('load', onScriptLoad);
            script.addEventListener('error', onScriptError);
            document.body.appendChild(script);
            return () => {
                script.removeEventListener('load', onScriptLoad);
                script.removeEventListener('error', onScriptError);
            };
        },
        [src]
    );
    return [state.loaded, state.error];
}

export {useScript};