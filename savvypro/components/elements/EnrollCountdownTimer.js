import React, { useEffect, useState } from 'react';
import moment from 'moment'

const EnrollCountdownTimer = (props) => {
    const { endDate } = props;
    const [countState, setCountState] = useState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    })
    const [enable, setEnable] = useState(false)


    const timezone = 'America/Toronto'
    const format = "YYYY-MM-DD hh:mm:ss"
    const parsedEndDate = new moment(endDate,format,timezone).utc();
    
    const getCountdown = () => {
        const startDate = new moment.utc();
        const diff = parsedEndDate.diff(startDate);

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setEnable(true);

            return setCountState({
                day: days,
                hour: hours,
                minute: minutes,
                second: seconds
            })
        }
    }

    useEffect(() => {
        const timer = setInterval(getCountdown,1000)
        return () => clearInterval(timer)
    },[])

    return (
        <span style={{marginLeft: '15px'}}>
            {
                enable ? (
                    <span>
                        <NumberText>{countState.day}</NumberText>
                        <DateText>天</DateText>
                        <NumberText>{countState.hour}</NumberText>
                        <DateText>时</DateText>
                        <NumberText>{countState.minute}</NumberText>
                        <DateText>分</DateText>
                        <NumberText>{countState.second}</NumberText>
                        <DateText>秒</DateText>
                    </span>
                ) :
                (
                    <NumberText>
                        持续招生中
                    </NumberText>
                )
            }
            
        </span>
    )
}

const NumberText = (props) => {
    return (
        <span style={{fontSize: '24px', color: 'rgb(255, 118, 118)'}}>
            {props.children}
        </span>
    )
}

const DateText = (props) => {
    return (
        <span style={{fontSize: '16px', color: '#fff', margin: '3px'}}>
            {props.children}
        </span>
    )
}

export default EnrollCountdownTimer;