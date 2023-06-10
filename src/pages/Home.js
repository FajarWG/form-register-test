import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()


    return (
        <>
            <button class="btn btn-primary py-2"  onClick={() => navigate("/login")}>Login</button>
            <button class="btn btn-primary py-2"  onClick={() => navigate("/register")}>Register</button>
        </>
    )
}

export default Home