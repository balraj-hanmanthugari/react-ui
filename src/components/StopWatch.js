import React, { useState, useEffect } from 'react';
        import './style.css';
        
        export default function App() {
          const [state, setState] = useState(10);
          const [color, setColor] = useState({
            background: 'green',
          });
          const [timerAction, setTimerAction] = useState('pause');
        
          const setBackgroundColor = () => {
            setColor({
              background: state <= 6 ? 'red' : 'green',
            });
          };
        
          useEffect(() => {
            if (timerAction === 'pause') {
              return;
            } else if (timerAction === 'reset') {
              setState(10);
              setBackgroundColor();
              return;
            }
            if (state === 0) {
              return;
            }
            const interval = setInterval(() => {
              setState(state - 1);
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
              <button onClick={() => resetTimer()}>Reset</button>
            </>
          );
        }