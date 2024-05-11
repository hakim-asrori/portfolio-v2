import { useEffect, useState } from "react";

function PreloaderComponent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, [])

  return (
    <>
      {isLoading ? (
        <div id="preloader">
          <div className="loader_line"></div>
        </div>
      ):(
        <></>
      )}
    </>
  );
}

export default PreloaderComponent;