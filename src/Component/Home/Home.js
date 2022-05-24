import { Button } from '@mui/material'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import auth from '../Firebase/firebase.init'
import bannerImg from '../Images/banner.jpg'
import Loading from '../Loading/Loading'
import ProductCard from '../Product/ProductCard'
import ReviewCard from '../Review/ReviewCard'
const Home = () => {
    
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)
    const url = 'http://localhost:5100/product'
    const { isLoading, data } = useQuery(['products'], () =>
        fetch(url).then(res =>
            res.json()
        )
    )
    const { isLoading: loading2, data: reviews } = useQuery(['reviews'], () =>
        fetch('http://localhost:5100/review').then(res =>
            res.json()
        )
    )
    if (isLoading || loading || loading2) {
        return <Loading />
    }
    return (
        <div>
            <header>
                <div className="hero w-full min-h-auto py-20 bg-base-100">
                    <div className="hero-content w-full justify-between flex-col lg:flex-row">

                        <div className='ml-5'>
                            <h1 className='text-xl mb-4 font-bold text-neutral'>Wellcome To Our</h1>
                            <h1 className="text-5xl leading-tight font-bold text-left">Motorbike Parts & Accessories Warehouse</h1>
                            <p className="py-6 text-left">
                                We Provide All Type Of Motor Bike's Parts And Accessories</p>
                            <div className='flex justify-start'>
                                <Button onClick={() => navigate('/login')} size="large" variant="contained">Get Started</Button>

                            </div>
                        </div>
                        <img src={bannerImg} className="max-w-xl w-full rounded-lg  shadow-2xl" alt='banner img' />
                    </div>
                </div>
            </header>
            
            <About/>

           


            <div className='container mx-auto mt-14 '>
                <h1 className='text-center text-4xl my-5 font-bold'>Our  Products</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 gap-7'>
                    {
                        data?.slice(0, 4).map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>
                <div className='flex justify-center mt-10'><Link to='/product' className='btn btn-primary'>See All Product</Link></div>
            </div>

            <section className='container mx-auto mt-14'>

                <div className="shadow w-full grid grid-cols-4" >
                    <div className="stat place-items-center">
                        <div className="stat-title">New Orders</div>
                        <div className="stat-value">301</div>
                        <div className="stat-desc mt-2">From March To May 2022</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Deliverd</div>
                        <div className="stat-value">2,300</div>
                        <div className="stat-desc">From January 1st to May 1st</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Current Users</div>
                        <div className="stat-value text-secondary">1,200</div>
                        <div className="stat-desc text-secondary">↗︎ 15 (5%)</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Happy Client</div>
                        <div className="stat-value">1.8 k</div>
                        <div className="stat-desc">↘︎ 50 (10%)</div>
                    </div>
                </div>
                <div className='shadow-2xl p-10 mt-6 w-full flex items-center justify-between'>
                    <div>
                    <h1 className='text-primary text-4xl mb-3 font-bold'>Have any question about us or get a <br/>
                    product request</h1>
                    <h2 className='text-2xl pt-3'>Don't hesitate to contact us</h2>
                    </div>
                    <div>
                        <Link to='/dashboard/review' className='btn px-5 btn-primary mr-5'>Write a Review</Link>
                        <Link to='/contact' className='btn px-5 btn-neutral'>contact ue</Link>
                    </div>
                </div>
            </section>


            {/* Reviews  */}
            <div className='container mx-auto'>
                <h1 className='text-5xl text-center mt-16'>Testimonials</h1>
                <div className="grid grid-cols-4 mt-14 gap-5">
                    {
                        reviews?.slice(0, 4).map(review => <ReviewCard key={review._id} review={review} />)
                    }

                </div>
                <div className={`flex justify-center`}>
                    <Link to='/review' className='btn mt-10'>Show All</Link>
                </div>
            </div>

           
            <Contact />
        </div>
    )
}

export default Home