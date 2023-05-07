import React from "react"
import Card from './CardLearn'
import data from './dataLearn'
import "./learn.css"

export default function () {
    return (
        <div className="relative -z-10  min-h-[100%] ">

            <Youtube />
            <h1 className="tips-tricks">TIPS AND TRICKS</h1>
            <Tipsandtricks />
            <Articles />
          
        </div>
    )
}
function Youtube(){
    const cards=data.map(item =>{
        return(
          <Card
            img={item.img}
            title={item.title}
          />
        )
      })
    return(
        <div className="youTube">
            <h1 className="head">YOUTUBE</h1>
            <section className='cards-list'>
            {cards}
            </section>
            <button className="seeMore">seeMore</button>
        </div>
    )
}
function Tipsandtricks(){
    const cards=data.map(item =>{
        return(
          <Card
            img={item.img}
            title={item.title}
          />
        )
      })
    return(
        <div className="tips-and-tricks">
            <section className='cards-list'>
            {cards}
            </section>
            <button className="seeMore">seeMore</button>
        </div>
    )
}
function Articles(){
    const cards=data.map(item =>{
        return(
          <Card
            img={item.img}
            title={item.title}
          />
        )
      })
    return(
        <div className="Articles">
            <h1 className="head">Articles</h1>
            <section className='cards-list'>
            {cards}
            </section>
            <button className="seeMore">seeMore</button>
        </div>
    )
}