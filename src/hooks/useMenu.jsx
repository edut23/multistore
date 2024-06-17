const useMenu = ({ setPage, handleLogout }) => {
    const handleLogoClick = () => {
        setPage(2); // Redireciona para a página inicial (Home)
    };

    const handleLogoutAndRedirect = () => {
        handleLogout();
    };

    return {
        handleLogoClick,
        handleLogoutAndRedirect
    }
}

export default useMenu;