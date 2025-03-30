export default function Home() {
  return (
    <div>
      <header>
        <div className="glass navbar z-50 bg-base-100 shadow-sm fixed [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
          <div className="navbar-start">
            <a className="btn btn-ghost border-0 text-2xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">Nadir CHAÏEB</a>
          </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li className=" active:bg-blue-600"><a>Projets</a></li>
            <li><a>Compétences</a></li>
            <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="/assets/CV_Nadir_CHAÏEB.pdf" target="_blank" className="btn text-xl bg-blue-600 hover:bg-blue-700 border-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4">
    </path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
    <span>CV</span>
      </a>
  </div>
</div>
</header>
<main>
  <section className="bg-[url(/assets/Kame_House.webp)] w-screen h-screen bg-no-repeat bg-cover flex items-center" id="profile">
  <div className="flex justify-center">
  <div className="w-1/2 text-9xl [text-shadow:_10px_10px_10px_rgb(0_0_0_/_0.8)]">
   <h1>Développeur Web Fullstack</h1>
  </div>
  <div className="avatar">
  <div className="w-66 rounded-full">
  <img src="/assets/nadir.jpg" alt="nadir" className="object-top"/>
  </div>
</div>
</div>
  </section>
  <section className="bg-[url(/assets/lookout.webp)] w-screen h-screen bg-no-repeat bg-cover" id="projects">
    <div className="py-10">
      <h2 className="text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] font-bold text-center">Mes projets</h2>
      </div>
      <div className="flex justify-center items-center w-full h-7/10">
        <div className="glass-b card bg-base-100 w-96 shadow-sm mx-10">
  <figure>
    <img
      src="/assets/twitter.png"
      alt="my_twitter" />
  </figure>
  <div className="card-body block">
    <h2 className="card-title">
      TWEETHUNTER
    </h2>
    <p>Une reproduction de twitter dans le theme de monster hunter, on y retrouve les fonctionalités
      principaux comme les postes, les likes et les commentaires.
    </p>
    <div>
    <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">HTML5</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">CSS3</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">Javascript</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">PHP</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">MySQL</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">TailwindCSS</div>
      </div>
  </div>
</div>
<div className="glass-b card bg-base-100 w-96 shadow-sm mx-10">
  <figure>
    <img
      src="/assets/portfolio.png"
      alt="portfolio" />
  </figure>
  <div className="card-body block">
    <h2 className="card-title">
      Portfolio
    </h2>
    <p>Site portfolio personnel développé avec Next.js et Tailwind CSS, dans un theme Dragon Ball.
    </p>
    <div>
    <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">Nexj.js</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">React</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">Typescript</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">CSS3</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">TailwindCSS</div>
      </div>
  </div>
</div>
<div className="glass-b card bg-base-100 w-96 shadow-sm mx-10">
  <figure>
    <img
      src="/assets/connect4.png"
      alt="connect4" />
  </figure>
  <div className="card-body block">
    <h2 className="card-title">
      Puissance 4
    </h2>
    <p>Un module puissance 4 fait développé avec Javascript.
    </p>
    <div>
    <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">HTML5</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">CSS3</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">Javascript</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">SASS</div>
      </div>
  </div>
</div>
<div className="glass-b card bg-base-100 w-96 shadow-sm mx-10">
  <figure>
    <img
      src="/assets/spotify.png"
      alt="spotify" />
  </figure>
  <div className="card-body block">
    <h2 className="card-title">
      Spotify
    </h2>
    <p>Une copie de Spotify développé en groupe avec React et Docker.
    </p>
    <div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">React</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">Docker</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">Javascript</div>
      <div className="badge badge-primary m-1 bg-blue-600 hover:bg-blue-700">TailwindCSS</div>
      </div>
  </div>
</div>
</div>
  </section>
  <section className="bg-[url(/assets/landscape.jpg)] w-screen h-screen bg-no-repeat bg-cover" id="compétences">
  <div className="py-10">
      <h2 className="text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] font-bold text-center">Mes compétences</h2>
      </div>
      <div className="flex justify-center items-center w-full h-7/10">
      <div className="flex flex-wrap w-9/10">
        <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/html.jpg" alt="html" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/css.jpeg" alt="css" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/sass.jpg" alt="sass" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/js.png" alt="js" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/sql.jpg" alt="sql" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/php.png" alt="php" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/react.jpg" alt="react" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/nextjs.jpeg" alt="next.js" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/tailwind.jpg" alt="tailwind" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/figma.png" alt="figma" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/vscode.png" alt="vscode" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/docker.png" alt="docker" />
          </div>
          <div className="size-50 p-5 hover:size-60">
          <img className="object-cover w-full h-full rounded-xl" src="/assets/git.png" alt="git" />
          </div>
      </div>
      </div>
  </section>
  <section className="bg-[url(/assets/cell_game.jpeg)] w-screen h-screen bg-no-repeat bg-cover" id="contact">
  <div className="py-10">
      <h2 className="text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] font-bold text-center">Me contacter</h2>
      </div>
      <div className="flex justify-center items-center w-full h-7/10">
       <form action="mailto:nadir.chaieb@epitech.eu" method="post" className="w-1/2 space-y-6 glass-b p-8 rounded-xl">
       <label className="block mb-2">Nom</label>
  <input type="text" className="w-full p-3 rounded bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nom" />
  <label className="block mb-2">Email</label>
  <input type="email" className="w-full p-3 rounded bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Email" />
  <label className="block mb-2">Message</label>
  <textarea className="w-full p-3 rounded bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none h-32" name="" id=""></textarea>
<button className="w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors bg-blue-600 hover:bg-blue-700">
  Envoyer
  </button>
         </form>
         </div>
  </section>
</main>
    </div>
  );
}
