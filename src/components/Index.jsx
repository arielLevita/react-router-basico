import { Link } from "react-router-dom"

const Index = () => {
    return (
        <div>
            Index
            <Link to={'/otra'}>Link a otra</Link>
        </div>
    )
}

export default Index