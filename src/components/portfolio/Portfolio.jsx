import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

function Portfolio () {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem
        });

        setItems(updatedItems);
        console.log(updatedItems)
    }
    

    
    return (
        <section className="work container section" id="portfolio">
           <h2 className="section_title">Recent Activities</h2>

           <div className="work_filters">
           <span className="work_item" onClick={()=> setItems(Menu)}>Everything</span>
           <span className="work_item" onClick={() => filterItem("Hackathon")}>Hackathon</span>
           <span className="work_item" onClick={() => filterItem("Internship")}>Internship</span>
           <span className="work_item" onClick={() => filterItem("Other")}>Other</span>

           </div> 
           <div className="work_container grid">
            {items.map((elem) => {
                const{id ,image ,title,category,link} = elem;
                console.log(link)
                return (
                    <div className="work_card" key={id}> 
                     <div className="work_thumbnail">
                        <img src={image} alt="" className="work_img"/>
                        <div className="work_mask"></div>
                     </div>
                     <span className="work_category">{category}</span>
                     <h3 className="work_title">{title}</h3>
                     <a href={link} target="_blank" className="work_button">
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