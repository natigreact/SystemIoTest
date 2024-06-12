import { Button } from 'antd'
import { Link } from 'react-router-dom'


export const Navigation = () => {
  return (
    <nav>
      <div className='navigationButton'>
        <Button>
          <Link to='/pages'>Pages</Link>
        </Button>
        <Button>
          <Link to='/products'>Products</Link>
        </Button>
        <Button>
          <Link to='/price-plans'>Price Plans</Link>
        </Button>
      </div>
    </nav>
  )
}