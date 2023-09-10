import './App.css';
import work from './work.jpg'
import studteach from './assets/studteach.png'
import meal from './assets/meal.png'
import qrimg from './assets/qrimg.png'
import dog from './assets/dog.png'
import nationalize from './assets/nationalize.png'
import anime from './assets/anime.png'
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  const downloadResume = () => {
    const resumepath = process.env.PUBLIC_URL + '/resume.pdf'
    const anchor = document.createElement('a');
    anchor.href = resumepath;
    anchor.download = 'raghavi-resume.pdf'
    anchor.click();
  }
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <nav className={`bg-orange-200 ${darkMode ? 'dark:bg-gray-900' : ''}`}>
        <ul className='flex justify-end lg:mr-20'>
          <li className='px-3 py-2 hover:font-bold'><a className='px-3 py-2 text-xl hover:underline' href='#'>Home</a></li>
          <li className='px-3 py-2 hover:font-bold'><a className='px-3 py-2 text-xl hover:underline' href='#skills'>Skills</a></li>
          <li className='px-3 py-2 hover:font-bold'><a className='px-3 py-2 text-xl hover:underline' href='#projects'>Projects</a></li>
          <li className='px-3 py-2 hover:font-bold'><a className='px-3 py-2 text-xl hover:underline' href='#contact'>Contact</a></li>
          <button className='border bg-red-500 p-2 text-white' onClick={toggleDarkMode}>Darkmode</button>
        </ul>
      </nav>
      {/* Home */}
      <section className={`flex flex-col min-h-screen ${darkMode ? 'dark:bg-purple-900' : 'bg-purple-100'}`}>
        <div className='container mx-auto flex-1 w-full'>
          <div className='flex py-36'>
            <div className='w-full lg:w-1/2 text-center text-xl p-20'>
              <h1 className='mb-4'>Hi 👋 I am <span>Raghavi</span>!!! 🤩</h1>
              <h5>An Ambitious learning web-developer, a quick learner and a hard worker.
                I am equipped with a promising skill set with which I could effectively self manage during
                independent projects, yet an excellent team player as well.🙂</h5>
            </div>
            <div className='w-1/2'>
              <img className='w-10/12 pl-20 hidden lg:flex' src={work} alt="" />
            </div>
          </div>
          <div className='flex justify-center p-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
            <span>Scroll down</span>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section id='skills' className={`flex flex-col min-h-screen ${
          darkMode
            ? 'dark:bg-gradient-to-r from-blue-900 to-green-900'
            : 'bg-gradient-to-r from-blue-200 to-green-200'
        }`}>
        <h1 className='text-5xl text-center  px-5 py-10 font-serif text-blue-500'>Skills</h1>
        <div className='grid grid-cols-4 gap-4'>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>HTML</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>CSS</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.NccvSu6Gut1HXGwUTBKYKgHaH3?w=169&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>JavaScript</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.g1KfG8APYNeP-B_8fEd1rQHaHa?w=192&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>ReactJS</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.cPh7ujRIfcHAy4kW2ADGOwHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>Bootstrap</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.KTq5K5E3QeLVrm71FR0w8gHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>Tailwind CSS</h4>
            <img className='icon' src="https://miro.medium.com/max/632/1*5QD8DKhOjRe-gcYjozlLNQ.png" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>Redux</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.yvi6B33dh1qkOz22drdl5wHaHe?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>Git</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.3xatIgLyHni_Wi6mE5O7kgHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>Github</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>MySQL</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.bxyBQ7zZajsePQpFcVpAfAHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </div>
          <div className='px-20 enlarge-on-hover flex flex-col items-center justify-center'>
            <h4>MongoDB</h4>
            <img className='icon' src="https://th.bing.com/th/id/OIP.JhdchOb0n1bwrlfhGqycbgHaFG?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id='projects' className={`flex flex-col min-h-screen overflow-y-auto ${
          darkMode
            ? 'dark:bg-gradient-to-r from-yellow-900 to-red-900'
            : 'bg-gradient-to-r from-yellow-100 to-red-100'
        }`}>
        <h1 className='text-5xl text-center px-5 py-10 font-serif text-red-500'>Projects</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div className='border border-black rounded-md py-3 flex flex-col items-center'>
            <h3>Student - Teacher Management</h3>
            <img className='p-2 project' src={studteach} />
            <p className='w-1/2 p-5'>To manage and assign students to Teachers and maintain a dashboard.</p>
            <a className='border border-white rounded bg-blue-500 px-5 py-2 text-white' target='_blank' href='https://wondrous-lokum-64d39a.netlify.app/'>Visit</a>
          </div>
          <div className='border border-black rounded-md py-3 flex flex-col items-center'>
            <h3>Meal Finder</h3>
            <img className='p-2 project' src={meal} />
            <p className='w-1/2 p-5'>To get receipe and video of a required dish by searching with keywords.</p>
            <a className='border border-white rounded bg-blue-500 px-5 py-2 text-white' target='_blank' href='https://dreamy-maamoul-ba80c3.netlify.app/'>Visit</a>
          </div>
          <div className='border border-black rounded-md py-3 flex flex-col items-center justify-center'>
            <h3>QR Code Generator</h3>
            <img className='p-2 project' src={qrimg} />
            <p className='w-1/2 p-5'>To Generate your own QR code for given data with given size and format.</p>
            <a className='border border-white rounded bg-blue-500 px-5 py-2 text-white' target='_blank' href='https://heartfelt-melba-987b15.netlify.app/'>Visit</a>
          </div>
          <div className='border border-black rounded-md py-3 flex flex-col items-center justify-center'>
            <h3>Nationalize</h3>
            <img className='p-2 project' src={nationalize} />
            <p className='w-1/2 p-5'>To find probabilities of Nationality using just your Name.</p>
            <a className='border border-white rounded bg-blue-500 px-5 py-2 text-white' href=''>Visit</a>
          </div>
          <div className='border border-black rounded-md py-3 flex flex-col items-center justify-center'>
            <h3>Dog Facts</h3>
            <img className='p-2 project' src={dog} />
            <p className='w-1/2 p-5'>Dog lover?? Find the interesting facts about your loved ones.</p>
            <a className='border border-white rounded bg-blue-500 px-5 py-2 text-white' href=''>Visit</a>
          </div>
          <div className='border border-black rounded-md py-3 flex flex-col items-center justify-center'>
            <h3>Anime Finder</h3>
            <img className='p-2 project' src={anime} />
            <p className='w-1/2 p-5'>To find the anime episode with the image of the scene you have.</p>
            <a className='border border-white rounded bg-blue-500 px-5 py-2 text-white' href=''>Visit</a>
          </div>
        </div>
      </section>
      {/* About and contact */}
      <section id='contact' className={`flex flex-col min-h-screen overflow-y-auto ${
          darkMode
            ? 'dark:bg-gradient-to-r from-purple-900 to-pink-900'
            : 'bg-gradient-to-r from-purple-300 to-pink-200'
        }`}>
        <h1 className='text-5xl text-center  px-5 py-10 font-serif text-red-500'>Contact</h1>
        <div className='container flex flex-col items-center justify-center'>
          <div className='flex space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <h4>Email: ragzagnes@gmail.com</h4>
          </div>
          <div className='flex space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h4>Phone: +919791205168</h4>
          </div>
          <div className='flex space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <h4>LinkedIn: </h4>
            <a className='pl-6 underline hover:text-red-800 hover:text-xl' href='www.linkedin.com/in/raghavi-kannan-60a65b1a5'>Profile</a>
          </div>
          <div className='flex space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <h4>Github: </h4>
            <a className='pl-6 underline  hover:text-red-800 hover:text-xl' href='https://github.com/RaghaviKannan'>Profile</a>
          </div>
          <div className='flex space-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            <h4>Resume: </h4>
            <a href='#' onClick={downloadResume}>Download</a>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
