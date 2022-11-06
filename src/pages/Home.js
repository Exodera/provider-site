import React from 'react'
import './styles/Home.css'
import Nvidia from'../assets/nvidia.png'
import Gaming from'../assets/gaming.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className='banner'>
           <div className='banner-col1'>
                <div className='banner-text'>
                    <h2>swyftnet</h2>
                    /
                    <img src={Nvidia} alt= 'nvidia'/>
                    <h2 className='nvidia'>nvidia</h2>
                </div>

                <p>swyftnet joins with NVIDIA to introduce GeForce NOW in South Africa</p>
                <button>learn more</button>

            </div >

            <div className='banner-col2'>
                <img src={Gaming} alt={'Gaming devices'}/>
            </div>

        </div>



    </div>
  )
}

export default Home