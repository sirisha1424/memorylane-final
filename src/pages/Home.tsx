import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /homepagestatic when the component is mounted
    router.push("/homepagestatic");
  }, [router]);

  return null; // No need to render anything since you're redirecting
};

export default Home;
