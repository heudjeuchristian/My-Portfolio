import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    
    const cursorPos = useRef({ x: -100, y: -100 });
    const outlinePos = useRef({ x: -100, y: -100 });

    const easing = 0.1;
    let animationFrameId: number;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };

            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest('a, button'));
        };

        const animate = () => {
            const dx = cursorPos.current.x - outlinePos.current.x;
            const dy = cursorPos.current.y - outlinePos.current.y;

            outlinePos.current.x += dx * easing;
            outlinePos.current.y += dy * easing;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px, 0)`;
            }
            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${outlinePos.current.x - 20}px, ${outlinePos.current.y - 20}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const outlineClasses = isHovering ? 'hovering' : '';

    return (
        // Hide the custom cursor on touch devices for a better user experience
        <div className="hidden lg:block">
            <div
                ref={dotRef}
                className="cursor-dot"
                style={{
                  transform: `translate3d(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px, 0) scale(${isHovering ? 0.5 : 1})`,
                  transition: 'transform 0.1s ease-out',
                }}
            />
            <div
                ref={outlineRef}
                className={`cursor-outline ${outlineClasses}`}
                style={{
                  transform: `translate3d(${outlinePos.current.x - 20}px, ${outlinePos.current.y - 20}px, 0)`
                }}
            />
        </div>
    );
};

export default CustomCursor;