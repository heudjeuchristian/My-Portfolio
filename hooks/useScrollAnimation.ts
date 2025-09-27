
// FIX: Import React to make the React namespace available for types like React.RefObject.
import React, { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (options?: IntersectionObserverInit): [React.RefObject<HTMLDivElement>, boolean] => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // No need to unobserve, let it stay visible
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
                ...options,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};