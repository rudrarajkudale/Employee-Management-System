export default function Header(props) {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeuser('');
    }
    
    
    return (
        <div className="flex justify-between items-center p-6">
            <h1 className="text-xl font-semibold text-white bg-transparent">
                Hello <br /> 
                <span className="text-3xl font-bold bg-transparent">{props.data ? `${props.data.firstName} 👋` : 'admin 👋'}
                </span>
            </h1>
            <button onClick={logOutUser} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                Logout
            </button>
        </div>
    );
}
