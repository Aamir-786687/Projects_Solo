import FeaturedShow from '../Featured_Show/FeaturedShow'
import './fav_show.css'

const Fav_show = () => {
  return (
    <>
    <section className='fav'>
        <h1 className='title'>Your Fav Shows Now On JioHotstar</h1>

        <div className='shows'>
       <FeaturedShow/>
       <FeaturedShow/>
        </div>

    </section>
   
    </>
  )
}

export default Fav_show