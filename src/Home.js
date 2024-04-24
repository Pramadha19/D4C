import React from 'react';
import "./Home.css";
import Card from './Card';

const Home = () => {

  return (
    <div className='comp'>
        <div className='main'>
            <h1>COLOR SELECTOR</h1>
            <div className='card-holder'>
            <Card 
                    bgColor = "#0000FF"
                    hexCode = "#0000FF" 
                    colorName = "Blue"
                ></Card>
                <Card 
                    bgColor = "#A52A2A"
                    hexCode = "#A52A2A" 
                    colorName = "Brown"
                ></Card>
                <Card 
                    bgColor = "#F5F5DC"
                    hexCode = "#F5F5DC" 
                    colorName = "Beige"
                ></Card>
                <Card 
                    bgColor = "#FFA500"
                    hexCode = "#FFA500" 
                    colorName = "Orange"
                ></Card>
                <Card 
                    bgColor = "#FFFF00"
                    hexCode = "#FFFF00" 
                    colorName = "Yellow"
                ></Card>
                <Card 
                    bgColor = "#E6E6FA"
                    hexCode = "#E6E6FA" 
                    colorName = "Lavender"
                ></Card>
                <Card 
                    bgColor = "#FF0000"
                    hexCode = "#FF0000" 
                    colorName = "Red"
                ></Card>
                <Card 
                    bgColor = "#FF69B4"
                    hexCode = "#FF69B4" 
                    colorName = "HotPink"
                ></Card>
                <Card 
                    bgColor = "#DA70D6"
                    hexCode = "#DA70D6" 
                    colorName = "Orchid"
                ></Card>
                <Card 
                    bgColor = "#800080"
                    hexCode = "#800080" 
                    colorName = "Purple"
                ></Card>
                <Card 
                    bgColor = "#4B0082"
                    hexCode = "#4B0082" 
                    colorName = "Indigo"
                ></Card>
                <Card 
                    bgColor = "#008000"
                    hexCode = "#008000" 
                    colorName = "Green"
                ></Card>
                <Card 
                    bgColor = "#808000"
                    hexCode = "#808000" 
                    colorName = "Olive"
                ></Card>
                
                <Card 
                    bgColor = "#C0C0C0"
                    hexCode = "#C0C0C0" 
                    colorName = "Silver"
                ></Card>
                <Card 
                    bgColor = "#2F4F4F"
                    hexCode = "#2F4F4F" 
                    colorName = "DarkSlateGray"
                ></Card>
                <Card 
                    bgColor = "#000000"
                    hexCode = "#000000" 
                    colorName = "Black"
                ></Card>
                <Card 
                    bgColor = "#FFF0F5"
                    hexCode = "#FFF0F5" 
                    colorName = "LavenderBlush"
                ></Card>
                <Card 
                    bgColor = "#FFE4E1"
                    hexCode = "#FFE4E1" 
                    colorName = "MistyRose"
                ></Card>
            </div>
        </div>
    </div>
  )
}

export default Home