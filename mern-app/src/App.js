import { useEffect, useState } from "react";
function App() {
  const [title, settitle] = useState("");
  const [firstP, setfirstP] = useState("");
  const [articleTitle, setarticleTitle] = useState("");

  useEffect(() => {
    const gettitle = async () => {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();

      settitle(data[0].title);
    };

    gettitle();

    const getfirstP = async () => {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();

      setfirstP(data[1].firstP);
    };

    getfirstP();

    const getarticleTitle = async () => {
      const response = await fetch("http://localhost:5000");
      const data = await response.json();

      setarticleTitle(data[2].articleTitle);
    };

    getarticleTitle();
  }, []);
  return (
    <>
      <footer>
        <h1>{title}</h1>
      </footer>
      <main>
        <article>
          <h1>{articleTitle}</h1>
          <p>{firstP}</p>
        </article>
      </main>
    </>
  );
}

export default App;
