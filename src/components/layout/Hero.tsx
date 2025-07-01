'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Animated background component
const AnimatedBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.1,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mousePosition.x * 0.1,
        0.1
      );
    }
  });

  return (
    <>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      <mesh ref={meshRef} position={[0, 0, -50]}>
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial 
          color="#10b981" 
          transparent 
          opacity={0.1} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[80vh] w-full overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 50], fov: 75 }}
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
        >
          <AnimatedBackground />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent">
              Innovate.
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-green-500 to-white bg-clip-text text-transparent">
              Create.
            </span>
            <span className="block bg-gradient-to-r from-green-500 via-green-400 to-white bg-clip-text text-transparent">
              Transform.
            </span>
          </h1>

          {/* Mission Statement */}
          <p 
            className={`text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            We craft cutting-edge digital experiences that push boundaries and 
            <span className="text-green-400 font-semibold"> inspire the future</span>. 
            Join us in building tomorrow's solutions today.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <Link
              href="/about"
              className="group relative px-8 py-4 bg-green-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500/50"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-green-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/projects"
              className="group relative px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-full text-lg hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-green-400 text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-300/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-green-500/25 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating lines */}
        <div className="absolute top-1/4 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent transform -rotate-45"></div>
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>
    </section>
  );
};

export default Hero; 