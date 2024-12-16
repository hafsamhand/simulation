

const About = () => {
    let navigate = useNavigate();

    const connexion = () => {
        navigate('home/1');
    };
    let { userId } = useParams();
    
    return (
        <div>
            <button onClick={goHome}>Go to home page</button>
            <Route path="/posts/:Userid" element={<Posts />} />
            // className
            <NavLink
                to="/messages"
                className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                }
            >
                Messages
            </NavLink>

        </div>
    );
};
export default About;

