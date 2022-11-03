import React, { useState } from 'react'
import './portfolio.css'
import Menu from './Menu'

const Portfolio = () => {
  const [items, setItems] = useState(Menu)
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems)
  }

  return (
    <section className="work container section" id="work">
      <h2 className="sectionTitle">Recent Works</h2>

      <div className="workFilters">
        <span className="workItem" onClick={() => setItems(Menu)}>Everything</span>
        <span className="workItem" onClick={() => filterItem("Creative")}>Creative</span>
        <span className="workItem" onClick={() => filterItem("Art")}>Art</span>
        <span className="workItem" onClick={() => filterItem("Design")}>Design</span>
        <span className="workItem" onClick={() => filterItem("Branding")}>Branding</span>
      </div>

      <div className="workContainer grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="workCard" key={id}>
              <div className="workThumbnail">
                <img src={image} alt="" className="workImg" />
                <div className="workMask"></div>
              </div>

              <span className="workCategory">{category}</span>
              <h3 className="workTitle">{title}</h3>
              <a href="#" className="workButton">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio