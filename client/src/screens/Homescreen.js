
import Pizza from '../components/Pizza'
import pizzas from '../pizzadata'
const Homescreen = () => {  
    return (
        <div>
            <div className='mb-5'>
                <h3 className='font-weight-bold font-italic'>Featured product</h3>
            </div>
            <div className='row' >
                {pizzas.map((pizza, index) => (
                    <div key={index} className='col-md-4'>
                        <Pizza pizza={pizza}  />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Homescreen