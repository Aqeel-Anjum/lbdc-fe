import React from 'react';
import DataGrid from '../../components/datagrid/DataGrid';
import Schedule from '../../components/schedule/Schedule';
import Navbar from '../../components/navigation/Navbar';
import './CanalScheduling.css';

const CanalScheduling = () => {
    return (
        <>
            <Navbar />
            <section className='main-section'>
                <div className='container-fluid'>
                    <div className='row pt-3 pb-3'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                            <div>
                                <DataGrid />
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 '>
                            <div className='schedual-calendar'>
                                <Schedule />
                            </div>
                        </div>
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

export default CanalScheduling;


