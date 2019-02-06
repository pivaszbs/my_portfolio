import React from 'react';
import './skills.css';


const Skills = ({skills}) => {
   const ratings = skills.map(({label, amount}) => {
      console.log(amount);
      const rate = []
      for (let i = 0; i < amount; i++) {
         rate.push("skill-ratings_circle fas fa-circle");
      }
      for (let i = amount; i < 10; i++) {
         rate.push("skill-ratings_circle far fa-circle");       
      }
      return rate;
   })
   console.log(ratings);
   return (
      <div> 
         {skills.map(({label,amount})=>(
            <div>
            <div className="skill-label">{label}</div>
            <div className="skill-ratings">
               {ratings[0].map((r)=>{
                  console.log(r)
                  return (<i className={r}></i>)
               })}
            </div>
            </div>
         ))}
      </div>
   );
};

export default Skills;