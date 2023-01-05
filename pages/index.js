import Head from 'next/head'
import Landing from "./landing"
import Packg from  "./packg"
import Courses from "./courses"
import Pricing from "./pricing"
import Testimonials from "./testimonials"
import Footer from "./footer"
import Header from '../components/header'
export default function Home() {
  const DataFromHeader=(type)=>{
    if(type === "signin" || type === "signup"){
      this.setState({activekey:type,show:true})
    }else{
      document.getElementById(type).scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
  }
  return (
    <>
      <Head>
        <title>Leaf Learning</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Header FromHeader={DataFromHeader}/>
        <Landing/>
        {/* companies */}
        <div className='container p-md-5 my-5'>
          <div className='row justify-content-center aling-items-center'>
              <div className='col align-self-center'> 
                  <img className="m-auto d-block" src="/hoot.svg"/>
              </div>
              <div className='col align-self-center'> 
                  <img className="m-auto d-block" src="/lya.svg"/>
              </div>
              <div className='col align-self-center'> 
                  <img className="m-auto d-block" src="/leaf.svg"/>
              </div>
              <div className='col align-self-center'> 
                  <img className="m-auto d-block" src="/aws.svg"/>
              </div>
              <div className='col align-self-center'> 
                  <img className="m-auto d-block" src="/stripe.svg"/>
              </div>
              <div className='col align-self-center'> 
                  <img className="m-auto d-block" src="/reddit.svg"/>
              </div>
          </div>
        </div>
        {/* companies end */}
        <Packg/>
        {/*  */}
        <div className='container py-5 my-5 py-sm-3 my-sm-3'>
          <div className='row'>
            <div className='col-md-6 d-none d-lg-block'>
              <img src="/popular.svg" />
            </div>
            <div className='col-md-5 d-flex justify-content-center align-items-center line-symbol'>
              <div>
              <h2 className='f-700 f-40'>Most Popular Courses</h2>
              <p className='f-400 f-14 mute-text'>Problems trying to resolve the conflict between
                the two major realms of Classical physics:
                Newtonian mechanics </p>
              <a className='green-text'>Learn More<img className="ms-2" src="/greenarrow.svg" /></a>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <Courses/>
        <Pricing/>
        <Testimonials/>
        <div className='container py-sm-3 py-5 my-sm-3 my-5' id="newsletter">
          <div className='row'>
            <div className='col-sm-6 offset-sm-3'>
              <h6 className='green-text text-center f-700 f-16'>Newsletter</h6>
              <h3 className='text-center f-700 f-40'>Our Experts Teacher</h3>
              <p className='text-center f-400 f-14 mute-text'>Problems trying to resolve the conflict between <br></br>the two major realms of Classical physics: Newtonian mechanics </p>
              <div className='row py-2 my-5'>
                <div className='col text-center'>
                  <div className='newletter'>
                  <input/><button>subcribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}
