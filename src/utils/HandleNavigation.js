import { useNavigate, useLocation } from "react-router-dom";

function useNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const showNavbar = ["/j-text", "/translation", "/bilingual-view"].includes(
    location.pathname
  );

  function goToTranslation() {
    navigate("/translation");
  }
  function goToBilingualView() {
    navigate("/bilingual-view");
  }
  function goToJapaneseText() {
    navigate("/j-text");
  }
  function goToHome() {
    navigate("/");
  }
  return {
    goToTranslation,
    goToBilingualView,
    goToJapaneseText,
    goToHome,
    showNavbar,
  };
}
export default useNavigation;
