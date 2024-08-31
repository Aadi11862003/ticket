// import React from "react";

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-[#000000] p-4 shadow-lg">
// //       <div className="container mx-auto flex flex-col">
// //         <div className="flex justify-between items-center">
// //           <a href="https://aashwinxgarg.github.io/Tickeve-frontend-designs/">
// //             <div className="text-white text-3xl font-bold px-6">Tickeve</div>
// //           </a>
// //           <div className="flex items-center space-x-10 relative">
// //             <div className="px-34 text-lg">
// //               <button className="text-white focus:outline-none">Shows</button>
// //               <a
// //                 className="text-white px-8"
// //                 href="https://aashwinxgarg.github.io/Tickeve-frontend-designs/"
// //               >
// //                 About
// //               </a>
// //             </div>
// //             <a
// //               className="text-white py-2 px-5 rounded-xl border border-white"
// //               href="https://aashwinxgarg.github.io/Tickeve-frontend-designs/"
// //             >
// //               Sign Up
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// const ShowTile = ({ imgSrc, title, desc }) => {
//   return (
//     <div className="tile bg-slate-900 text-white flex m-4">
//       <div className="left">
//         <img src={imgSrc} alt={title} className="w-72 p-2" />
//       </div>
//       <div className="right">
//         <div className="textt w-80 m-2">
//           <div className="title text-violet-400 font-serif ">{title}</div>
//           <div className="desc font-serif text-wrap text-violet-200">{desc}</div>
//         </div>
//         <div className="rightt-2 flex justify-center">
//           <a
//             href="detailsUpcomingConcerts.html"
//             className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button"
//           >
//             Details
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const UpcomingShows = () => {
//   const shows = [
//     {
//       imgSrc: "https://ticketeve.vercel.app/assets/img3-Qnv1O0WQ.webp",
//       title: "Concert A - Arijit Singh Show",
//       desc:
//         "For die heart fans of Arijit Singh as he is going to perform the most intriguing songs he has ever had...",
//     },
//     {
//       imgSrc: "https://media.insider.in/image/upload/c_crop,g_custom/v1645438549/qz8jfwv53q0es99epiae.jpg",
//       title: "Concert B - Zakir Khan Show",
//       desc:
//         "For fans who love Stand-Up Comedy and love to get in the realms of crowdwork and funny stories...",
//     },
//     {
//       imgSrc: "https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg",
//       title: "Concert C - Diljit Dosanjh Concert",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ut rerum magni molestias...",
//     },
//     {
//       imgSrc: "https://assets-in.bmscdn.com/discovery-catalog/events/et00405942-amnmqenlfx-landscape.jpg",
//       title: "Concert D - Karan Aujla Show",
//       desc:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum delectus dignissimos quo autem...",
//     },
//   ];

//   return (
//     <div className="upcoming-shows">
//       {shows.map((show, index) => (
//         <div key={index} className="line flex bg-black m-auto w-11/12 mt-2">
//           <ShowTile imgSrc={show.imgSrc} title={show.title} desc={show.desc} />
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="bg-black h-screen">
      
//       <UpcomingShows />
//     </div>
//   );
// };

// export default App;
