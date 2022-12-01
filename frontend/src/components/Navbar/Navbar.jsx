import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react'
// import { Button } from "@material-tailwind/react";
import MenuToggle from "../MenuToggle";
import { images } from "../../constants";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 14 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener('mousedown', handler);

    // CLEAN UP
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  });

  const NavItem = ({ name }) => {
    return (
      <li className='py-4 px-3 uppercase hover:text-cyan-600 duration-300'>{name}</li>
    );
  }

  return (
    <>
      <motion.nav animate={isOpen ? "open" : "closed"}>
        <nav className='flex w-full h-16 z-10 fixed justify-between items-center px-8 bg-white/50 backdrop-blur-sm border-2 border-white/10'>
          {/* Logo */}
          <div>
            <p className='text-3xl font-[Montserrat] font-bold'>Test</p>
          </div>

          {/* Navbar Tags */}
          <ul className='hidden sm:flex'>
            <NavItem name='Home' />
            <NavItem name='About' />
            <NavItem name='Work' />
            <NavItem name='Skills' />
            <NavItem name='Contact' />
          </ul>
          {/* Hamburger */}
          <div className='flex sm:hidden' ref={menuRef}>
            <MenuToggle className='p-4' toggle={() => setIsOpen(!isOpen)} />
            <motion.ul className='absolute bg-white w-[80%] left-0 right-0 top-20 m-auto'
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                  }
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 40px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                  }
                }
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}>
              <div className="flex flex-col">
                <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Home</motion.li>
                <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>About</motion.li>
                <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Work</motion.li>
                <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Skills</motion.li>
                <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Contact</motion.li>
              </div>
            </motion.ul>
          </div>
        </nav>
      </motion.nav>
    </>
  )
}

export default Navbar

























// import { motion } from "framer-motion";
// import React, { useState, useEffect, useRef } from 'react'
// // import { Button } from "@material-tailwind/react";
// import MenuToggle from "../MenuToggle";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Mesh } from "three";
// import { images } from "../../constants";
// import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

// const itemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 160, damping: 14 }
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
// };

// const ThreeJsWorld = ({ position }) => {
//   const meshRef = useRef();

//   // for animations
//   useFrame((state, delta) => {
//     meshRef.current.rotation.x += Math.sin(state.clock.getElapsedTime() / 2) * 0.01
//     // meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * (delta + 1)
//     meshRef.current.rotation.y += 0.006
//   })

//   return (
//     <mesh ref={meshRef} position={position}>
//       <boxGeometry />
//       <meshStandardMaterial color={'orange'} />
//     </mesh>
//   );
// }

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   let menuRef = useRef();
//   useEffect(() => {
//     let handler = (e) => {
//       if (!menuRef.current.contains(e.target)) setIsOpen(false);
//     };

//     document.addEventListener('mousedown', handler);

//     // CLEAN UP
//     return () => {
//       document.removeEventListener('mousedown', handler);
//     }
//   });

//   const NavItem = ({ name }) => {
//     return (
//       <li className='py-4 px-3 uppercase hover:text-cyan-600 duration-300'>{name}</li>
//     );
//   }

//   return (
//     <>
//       <motion.nav animate={isOpen ? "open" : "closed"}>
//         <nav className='flex w-full h-16 z-10 fixed justify-between items-center px-8 bg-white/50 backdrop-blur-sm border-2 border-white/10'>
//           {/* Logo */}
//           <div>
//             <p className='text-3xl font-[Montserrat] font-bold'>Test</p>
//           </div>

//           {/* Navbar Tags */}
//           <ul className='hidden sm:flex'>
//             <NavItem name='Home' />
//             <NavItem name='About' />
//             <NavItem name='Work' />
//             <NavItem name='Skills' />
//             <NavItem name='Contact' />
//           </ul>
//           {/* Hamburger */}
//           <div className='flex sm:hidden' ref={menuRef}>
//             <MenuToggle className='p-4' toggle={() => setIsOpen(!isOpen)} />
//             <motion.ul className='absolute bg-white w-[80%] left-0 right-0 top-20 m-auto'
//               variants={{
//                 open: {
//                   clipPath: "inset(0% 0% 0% 0% round 10px)",
//                   transition: {
//                     type: "spring",
//                     bounce: 0,
//                     duration: 0.7,
//                     delayChildren: 0.3,
//                     staggerChildren: 0.05
//                   }
//                 },
//                 closed: {
//                   clipPath: "inset(10% 50% 90% 50% round 40px)",
//                   transition: {
//                     type: "spring",
//                     bounce: 0,
//                     duration: 0.3
//                   }
//                 }
//               }}
//               style={{ pointerEvents: isOpen ? "auto" : "none" }}>
//               <div className="flex flex-col">
//                 <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Home</motion.li>
//                 <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>About</motion.li>
//                 <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Work</motion.li>
//                 <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Skills</motion.li>
//                 <motion.li className="p-3 uppercase mx-auto" whileHover={{ scale: 1.1, color: '#aa00aa', transition: { duration: 0.1 } }} variants={itemVariants}>Contact</motion.li>
//               </div>
//             </motion.ul>
//           </div>
//         </nav>
//       </motion.nav>
//       <div className="flex">
//         <div className="flex w-full justify-between mt-[250px] mx-40">
//           <div className="flex w-10 h-10"></div>
//           <div className="">
//             <img className="w-[450px] h-[450px]" src={images.about01}></img>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-16 right-[100px] w-[600px] h-[700px]">
//         <Canvas>
//           <ambientLight />
//           <pointLight position={[0, 2, 10]} />
//           <ThreeJsWorld position={[-3, 2, -2]} />
//           <ThreeJsWorld position={[-12, 2, -16]} />
//           <EffectComposer smaa>
//             <Bloom  intensity={2} luminanceThreshold={0.6} />
//             <SSAO />
//           </EffectComposer>
//         </Canvas>
//       </div>
//     </>
//   )
// }

// export default Navbar