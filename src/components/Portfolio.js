import React, {useState} from 'react'
import './Portfolio.css'
import FilterButtons from './FilterButtons';
import PortfolioItem from './PortfolioItem'
import { AnimatePresence, motion } from 'framer-motion'


export default function Portfolio(props) {

  const [filtered,setFiltered] = useState([]);
  const [activeFilter,setActiveFilter] = useState('All')

  const items = [
    {
      id: 1,
      title: "App",
      image: '../images/Portfolio1.jpg',
      filterItem: 'App'
    },
    {
      id: 2,
      title: "Web",
      image: '../images/Portfolio2.jpg',
      filterItem: 'Web'
    },
    {
      id: 3,
      title: "App",
      image: '../images/Portfolio3.jpg',
      filterItem: 'App'
    },
    {
      id: 4,
      title: "Cards",
      image: '../images/Portfolio4.jpg',
      filterItem: 'Cards'
    },
    {
      id: 5,
      title: "Web",
      image: '../images/Portfolio5.jpg',
      filterItem: 'Web'
    },
    {
      id: 6,
      title: "App",
      image: '../images/Portfolio6.jpg',
      filterItem: 'App'
    },
    {
      id: 7,
      title: "Cards",
      image: '../images/Portfolio7.jpg',
      filterItem: 'Cards'
    },
    {
      id: 8,
      title: "Cards",
      image: '../images/Portfolio8.jpg',
      filterItem: 'Cards'
    },
    {
      id: 9,
      title: "Web",
      image: '../images/Portfolio9.jpg',
      filterItem: 'Web'
    },
  ]
 

  return (
    <div className='portfolio'>
        <div className='container'>
        <div className='portfolio__title text-center'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <div className='portfolio__body'>
        <FilterButtons items={items} setFiltered={setFiltered} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
       <motion.div className='portfolios'>
        <AnimatePresence>
          {filtered.map((item) => <PortfolioItem key={item.id} title={item.title} image={item.image}/>)}
        </AnimatePresence>
       </motion.div>
        </div>
       
        </div>
    </div>
  )
}
