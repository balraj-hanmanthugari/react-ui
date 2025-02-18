import React, { useState, useEffect, useTransition } from 'react';
        import './style.css';
        
        export default function App() {
          const [state, setState] = useState(0);
          const [color, setColor] = useState({
            background: 'green',
          });
          const [timerAction, setTimerAction] = useState('pause');
          const [isPending, startTransition] = useTransition();
        
          const setBackgroundColor = () => {
            startTransition(() => {
              setColor({
                background: state > 5 ? 'red' : 'green',
                opacity: isPending ? 0.7 : 1
              });
            });
          };
        
          useEffect(() => {
            if (timerAction === 'pause') {
              return;
            } else if (timerAction === 'reset') {
              setState(0);
              setBackgroundColor();
              return;
            }
            const interval = setInterval(() => {
              setState(state + 1);
              setBackgroundColor();
            }, 1000);
            return () => {
              clearInterval(interval);
            };
          }, [state, timerAction]);
        
          const startTimer = () => {
            setTimerAction('start');
          };
          const pauseTimer = () => {
            setTimerAction('pause');
          };
          const resetTimer = () => {
            setTimerAction('reset');
          };
        
          return (
            <>
              <div style={color}>{state}</div>
              <button onClick={startTimer}>Start</button>
              <button onClick={pauseTimer}>Pause</button>
              <button onClick={() => {resetTimer()}}>Reset</button>
            </>
          );
        }