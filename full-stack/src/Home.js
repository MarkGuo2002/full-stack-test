export default function Home() {
    function handleSignOut() {
        localStorage.removeItem("token");
        // redirect to login
        window.location.href = "/";
    }
    return (
        <div className="app-container w-screen h-screen flex items-center justify-center">
        <h1 className="font-bold text-4xl text-red-500">Welcome to Home!</h1>
        <button onClick={handleSignOut} className="btn-main">sign out</button>

        </div>
    );

}