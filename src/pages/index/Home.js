import React, { useState } from 'react';
import './Home.css';
import CardsApi from '../../api/CardApi';
import Navbar from '..//..//components/navigation/Navbar';

const Home = (props) => {

  const [CardsData, setCardsApi] = useState(CardsApi)

  return (
    <>

    <Navbar />

      <section className='main-section'>
        <div className='container-fluid'>
          <div className='row d-flex justify-content-center align-items-center'>

            {CardsData.map((curElem) => {
              const {id, heading, data1, value1, data2, value2, data3, value3, data4, value4, data5, value5 } = curElem;
              return (
                <>

                  <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
                    <div className='info-card'>

                      <div className='info-card-header'>{heading}</div>

                      <div className='card-data'>

                        <div className='card-text'>
                          <span>{data1}</span>
                          <span>{value1}</span>
                        </div>

                        <div className='card-text'>
                          <span>{data2}</span>
                          <span>{value2}</span>
                        </div>

                        <div className='card-text'>
                          <span>{data3}</span>
                          <span>{value3}</span>
                        </div>

                        <div className='card-text'>
                          <span>{data4}</span>
                          <span>{value4}</span>
                        </div>

                        <div className='card-text'>
                          <span>{data5}</span>
                          <span>{value5}</span>
                        </div>

                      </div>

                    </div>
                  </div>
                </>
              );
            })}

          </div>
        </div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='googleMap'>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=16KUGCFujJYFS78UwowtFbg3ggoPLt-U&ehbc=2E312F">
                </iframe>
              </div>
            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default Home;
