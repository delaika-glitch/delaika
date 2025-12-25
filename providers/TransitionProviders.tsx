"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ReactNode } from "react"
import { TransitionRouter } from "next-transition-router"

const blockSize = 60;

export default function TransitionProviders({ children }: { children: ReactNode}){
    const transitionGridRef = useRef<HTMLDivElement>(null);
    const blockRef = useRef<HTMLDivElement[]>([]); 
    const createTransitionGrid = () => {
        if (!transitionGridRef.current) return;
        const container = transitionGridRef.current;
        container.innerHTML = "";
        blockRef.current = [];

        const gridWidth = window.innerWidth;
        const gridHeight = window.innerHeight; 

        const columns = Math.ceil(gridWidth / blockSize);
        const rows = Math.ceil(gridHeight / blockSize) + 1;
        const offSetX = (gridWidth - columns * blockSize) / 2
        const offSetY = (gridHeight - rows * blockSize) / 2

        for (let row = 0; row < rows; row++){
            for (let col = 0; col < columns; col++){
                const block = document.createElement("div");
                block.className = "transition-block";
                block.style.cssText = ` 
                 width: ${blockSize}px;
                 height: ${blockSize}px;
                 left: ${col * blockSize + offSetX}px;
                 top: ${row * blockSize + offSetY}px;
                `;
                container.appendChild(block);
                blockRef.current.push(block);
            }
        }
        gsap.set(blockRef.current, {opacity: 0})
    };

    useEffect(() => {
        createTransitionGrid();
        window.addEventListener("resize", createTransitionGrid);

        // TEMPORAL: Para ver los bloques inmediatamente (quitar después)
    setTimeout(() => {
        if (blockRef.current.length > 0) {
            gsap.to(blockRef.current, {
                opacity: 0.5,
                duration: 1,
                stagger: 0.01
            });
        }
    }, 1000);
        return () => window.removeEventListener("resize", createTransitionGrid);
    }, []); 

    return(
        <TransitionRouter auto 
          leave={(next) => {
            gsap.set(blockRef.current, { opacity: 0 });
            const tween = gsap.to(blockRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
                stagger: {amount: 0.5, from: "random"},
                onComplete: next,
            })
            return () => tween.kill(); 
          }}
          enter={(next) => {
            const tween = gsap.to(blockRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.3,
                ease: "power2.inOut",
                stagger: {amount: 0.5, from: "random"},
                onComplete: next
            });
            return () => tween.kill()
          }}>
            <div ref={transitionGridRef} className="transition-grid "/>
             {children}
        </TransitionRouter>
    )
}