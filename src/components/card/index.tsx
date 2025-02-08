import React, { Children } from "react";
import './styles.css'
import { Ancore } from "../../assets/images";

interface CardProps {
    icon?: React.ReactNode
    buttonLink?: string
}

export const Card: React.FC<CardProps> = ({ icon, buttonLink }) => {
    return <div className="card">
        {icon}
        <button className="card-button" type="button" onClick={() => console.log(buttonLink)}>
            <Ancore color='#212121' />
        </button>
    </div>
}