import React, { useState } from 'react';

const BirthdayBouquet = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedFlower, setSelectedFlower] = useState(null);

  const flowers = [
    { id: 1, coupon: "Free wine tasting in Cloverdale", color: "#E74C3C", petalColor: "#C0392B", type: "rose" },
    { id: 2, coupon: "I cook a meal of your choice", color: "#9B59B6", petalColor: "#8E44AD", type: "tulip" },
    { id: 3, coupon: "I do your makeup for an occasion", color: "#F39C12", petalColor: "#E67E22", type: "sunflower" },
    { id: 4, coupon: "Coffee date on me", color: "#1ABC9C", petalColor: "#16A085", type: "daisy" },
    { id: 5, coupon: "Walk of your choice", color: "#3498DB", petalColor: "#2980B9", type: "rose" },
    { id: 6, coupon: "At home spa session", color: "#E91E63", petalColor: "#C2185B", type: "tulip" },
    { id: 7, coupon: "Picnic in the park (I handle all the prep!)", color: "#FF6B9D", petalColor: "#E91E63", type: "daisy" },
    { id: 8, coupon: "Arts and crafts afternoon", color: "#FFC107", petalColor: "#FFA000", type: "sunflower" }
  ];

  const flowerPositions = [
    { x: 50, y: 25, rotation: -8, delay: 0, stemHeight: 90 },
    { x: 35, y: 35, rotation: -20, delay: 0.1, stemHeight: 75 },
    { x: 65, y: 30, rotation: 15, delay: 0.15, stemHeight: 85 },
    { x: 42, y: 45, rotation: -12, delay: 0.2, stemHeight: 65 },
    { x: 58, y: 42, rotation: 8, delay: 0.25, stemHeight: 70 },
    { x: 48, y: 38, rotation: 2, delay: 0.3, stemHeight: 68 },
    { x: 38, y: 52, rotation: -15, delay: 0.35, stemHeight: 55 },
    { x: 60, y: 50, rotation: 12, delay: 0.4, stemHeight: 58 }
  ];

  const CakeCharacter = () => (
    <div style={{
      width: '270px',
      height: '270px',
      position: 'relative',
      animation: 'float 3s ease-in-out infinite'
    }}>
      {/* Cake body - bottom layer */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '210px',
        height: '75px',
        background: '#F4C896',
        borderRadius: '10px',
        border: '4px solid #5D4037',
      }}>
        {/* Texture lines */}
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${15 + i * 18}px`,
            top: '12px',
            width: '3px',
            height: '51px',
            background: '#E8B87D',
            borderRadius: '1.5px'
          }} />
        ))}
      </div>

      {/* Cream layer */}
      <div style={{
        position: 'absolute',
        bottom: '99px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '195px',
        height: '18px',
        background: '#FFF9E6',
        borderRadius: '30px',
        border: '4px solid #5D4037'
      }} />

      {/* Cake body - top layer */}
      <div style={{
        position: 'absolute',
        bottom: '108px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '210px',
        height: '75px',
        background: '#F4C896',
        borderRadius: '10px',
        border: '4px solid #5D4037'
      }}>
        {/* Texture lines */}
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${15 + i * 18}px`,
            top: '12px',
            width: '3px',
            height: '51px',
            background: '#E8B87D',
            borderRadius: '1.5px'
          }} />
        ))}
        
        {/* Face */}
        <div style={{
          position: 'absolute',
          bottom: '-22px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90px',
          height: '60px'
        }}>
          {/* Eyes */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '18px',
            width: '12px',
            height: '12px',
            background: '#5D4037',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '18px',
            width: '12px',
            height: '12px',
            background: '#5D4037',
            borderRadius: '50%'
          }} />
          
          {/* Smile */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '37px',
            height: '18px',
            borderBottom: '4px solid #5D4037',
            borderRadius: '0 0 37px 37px'
          }} />
          
          {/* Blush */}
          <div style={{
            position: 'absolute',
            top: '22px',
            left: '3px',
            width: '18px',
            height: '12px',
            background: '#FFB8A3',
            borderRadius: '50%',
            opacity: 0.6
          }} />
          <div style={{
            position: 'absolute',
            top: '22px',
            right: '3px',
            width: '18px',
            height: '12px',
            background: '#FFB8A3',
            borderRadius: '50%',
            opacity: 0.6
          }} />
        </div>
      </div>

      {/* Frosting top */}
      <div style={{
        position: 'absolute',
        bottom: '177px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '217px',
        height: '45px',
        background: '#FFF9E6',
        borderRadius: '50% 50% 0 0',
        border: '4px solid #5D4037',
        borderBottom: 'none'
      }}>
        {/* Wavy frosting edge */}
        <div style={{
          position: 'absolute',
          bottom: '-12px',
          left: '0',
          right: '0',
          height: '22px',
          background: '#FFF9E6',
          borderRadius: '0 0 50% 50%'
        }} />
      </div>

      {/* Strawberries */}
      {[45, 90, 135, 172].map((left, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: '207px',
          left: `${left}px`,
          width: '36px',
          height: '33px',
          background: '#C0504D',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          border: '3px solid #5D4037'
        }}>
          {/* Seeds */}
          <div style={{
            position: 'absolute',
            top: '9px',
            left: '9px',
            width: '3px',
            height: '3px',
            background: '#8B3A3A',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            width: '3px',
            height: '3px',
            background: '#8B3A3A',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '21px',
            width: '3px',
            height: '3px',
            background: '#8B3A3A',
            borderRadius: '50%'
          }} />
        </div>
      ))}

      {/* Candle */}
      <div style={{
        position: 'absolute',
        bottom: '240px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '18px',
        height: '52px',
        background: 'repeating-linear-gradient(45deg, #E74C3C, #E74C3C 12px, white 12px, white 24px)',
        border: '3px solid #5D4037',
        borderRadius: '4px'
      }} />

      {/* Flame */}
      <div style={{
        position: 'absolute',
        bottom: '285px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '30px',
        height: '42px',
        background: 'linear-gradient(to top, #F39C12, #F4D03F)',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        border: '3px solid #5D4037',
        animation: 'flicker 1.5s ease-in-out infinite'
      }} />

      {/* Little feet */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '45px',
        width: '42px',
        height: '30px',
        background: '#F4C896',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        border: '4px solid #5D4037'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '12px',
        right: '45px',
        width: '42px',
        height: '30px',
        background: '#F4C896',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        border: '4px solid #5D4037'
      }} />
    </div>
  );

  const Rose = ({ color, petalColor }) => (
    <div style={{ position: 'relative', width: '55px', height: '55px' }}>
      {[0, 1, 2, 3, 4].map((petal) => (
        <div key={`outer-${petal}`} style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '28px', height: '32px',
          background: `radial-gradient(ellipse at center, ${color}, ${petalColor})`,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          transform: `translate(-50%, -50%) rotate(${petal * 72}deg) translateY(-16px)`,
          transformOrigin: 'center center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
        }} />
      ))}
      {[0, 1, 2].map((petal) => (
        <div key={`inner-${petal}`} style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '20px', height: '22px',
          background: `radial-gradient(ellipse at center, ${color}, ${petalColor})`,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          transform: `translate(-50%, -50%) rotate(${petal * 120 + 40}deg) translateY(-8px)`,
          transformOrigin: 'center center'
        }} />
      ))}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '12px', height: '12px',
        background: petalColor,
        borderRadius: '50%'
      }} />
    </div>
  );

  const Tulip = ({ color, petalColor }) => (
    <div style={{ position: 'relative', width: '50px', height: '60px' }}>
      {[0, 1, 2].map((petal) => (
        <div key={petal} style={{
          position: 'absolute', top: '10px', left: '50%',
          width: '20px', height: '45px',
          background: `linear-gradient(to bottom, ${color}, ${petalColor})`,
          borderRadius: '50% 50% 30% 30%',
          transform: `translateX(-50%) rotate(${(petal - 1) * 25}deg)`,
          transformOrigin: 'bottom center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }} />
      ))}
      <div style={{
        position: 'absolute', top: '5px', left: '50%',
        transform: 'translateX(-50%)',
        width: '22px', height: '48px',
        background: `linear-gradient(to bottom, ${color}, ${petalColor})`,
        borderRadius: '50% 50% 30% 30%',
        boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
        zIndex: 1
      }} />
    </div>
  );

  const Sunflower = ({ color }) => (
    <div style={{ position: 'relative', width: '65px', height: '65px' }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((petal) => (
        <div key={petal} style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '16px', height: '28px',
          background: `linear-gradient(to bottom, ${color}, #F39C12)`,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          transform: `translate(-50%, -50%) rotate(${petal * 30}deg) translateY(-22px)`,
          transformOrigin: 'center center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }} />
      ))}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '28px', height: '28px',
        background: 'radial-gradient(circle, #8B4513, #654321)',
        borderRadius: '50%'
      }}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${25 + Math.random() * 50}%`,
            left: `${25 + Math.random() * 50}%`,
            width: '2px', height: '2px',
            background: '#3E2723',
            borderRadius: '50%'
          }} />
        ))}
      </div>
    </div>
  );

  const Daisy = ({ color, petalColor }) => (
    <div style={{ position: 'relative', width: '58px', height: '58px' }}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((petal) => (
        <div key={petal} style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '18px', height: '26px',
          background: `linear-gradient(to bottom, ${color}, ${petalColor})`,
          borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%',
          transform: `translate(-50%, -50%) rotate(${petal * 45}deg) translateY(-18px)`,
          transformOrigin: 'center center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }} />
      ))}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '18px', height: '18px',
        background: 'radial-gradient(circle, #F4D03F, #F39C12)',
        borderRadius: '50%',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
      }} />
    </div>
  );

  const Flower = ({ flower, position, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const FlowerComponent = () => {
      switch(flower.type) {
        case 'rose':
          return <Rose color={flower.color} petalColor={flower.petalColor} />;
        case 'tulip':
          return <Tulip color={flower.color} petalColor={flower.petalColor} />;
        case 'sunflower':
          return <Sunflower color={flower.color} />;
        case 'daisy':
          return <Daisy color={flower.color} petalColor={flower.petalColor} />;
        default:
          return <Rose color={flower.color} petalColor={flower.petalColor} />;
      }
    };
    
    return (
      <div
        style={{
          position: 'absolute',
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: `translate(-50%, -50%) rotate(${position.rotation}deg) scale(${isHovered ? 1.15 : 1})`,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          animation: hasStarted ? `bloom 0.8s ease-out ${position.delay}s forwards` : 'none',
          opacity: 0,
          zIndex: selectedFlower === flower.id ? 1000 : 10
        }}
        onClick={() => setSelectedFlower(flower.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Stem */}
        <div style={{
          position: 'absolute',
          bottom: `-${position.stemHeight}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '4px',
          height: `${position.stemHeight}px`,
          background: 'linear-gradient(to bottom, #27AE60, #229954)',
          borderRadius: '2px'
        }} />
        
        {/* Leaves at different heights */}
        <div style={{
          position: 'absolute',
          bottom: `-${position.stemHeight * 0.4}px`,
          left: '-8px',
          width: '22px',
          height: '14px',
          background: '#27AE60',
          borderRadius: '0 50% 50% 0',
          transform: 'rotate(-45deg)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: `-${position.stemHeight * 0.65}px`,
          right: '-8px',
          width: '22px',
          height: '14px',
          background: '#27AE60',
          borderRadius: '50% 0 0 50%',
          transform: 'rotate(45deg)'
        }} />
        
        <FlowerComponent />
      </div>
    );
  };

  const CouponModal = ({ flower }) => {
    const ModalFlowerComponent = () => {
      switch(flower.type) {
        case 'rose':
          return (
            <div style={{ position: 'relative', width: '120px', height: '120px' }}>
              {[0, 1, 2, 3, 4].map((petal) => (
                <div key={`outer-${petal}`} style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: '56px', height: '64px',
                  background: `radial-gradient(ellipse at center, ${flower.color}, ${flower.petalColor})`,
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  transform: `translate(-50%, -50%) rotate(${petal * 72}deg) translateY(-32px)`,
                  transformOrigin: 'center center',
                  animation: `petalOpen 0.6s ease-out ${petal * 0.05}s backwards`
                }} />
              ))}
              {[0, 1, 2].map((petal) => (
                <div key={`inner-${petal}`} style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: '40px', height: '44px',
                  background: `radial-gradient(ellipse at center, ${flower.color}, ${flower.petalColor})`,
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  transform: `translate(-50%, -50%) rotate(${petal * 120 + 40}deg) translateY(-16px)`,
                  transformOrigin: 'center center',
                  animation: `petalOpen 0.6s ease-out ${0.25 + petal * 0.05}s backwards`
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '24px', height: '24px',
                background: flower.petalColor,
                borderRadius: '50%'
              }} />
            </div>
          );
        case 'tulip':
          return (
            <div style={{ position: 'relative', width: '100px', height: '120px' }}>
              {[0, 1, 2].map((petal) => (
                <div key={petal} style={{
                  position: 'absolute', top: '20px', left: '50%',
                  width: '40px', height: '90px',
                  background: `linear-gradient(to bottom, ${flower.color}, ${flower.petalColor})`,
                  borderRadius: '50% 50% 30% 30%',
                  transform: `translateX(-50%) rotate(${(petal - 1) * 25}deg)`,
                  transformOrigin: 'bottom center',
                  animation: `petalOpen 0.6s ease-out ${petal * 0.1}s backwards`
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '10px', left: '50%',
                transform: 'translateX(-50%)',
                width: '44px', height: '96px',
                background: `linear-gradient(to bottom, ${flower.color}, ${flower.petalColor})`,
                borderRadius: '50% 50% 30% 30%',
                zIndex: 1,
                animation: `petalOpen 0.6s ease-out 0.35s backwards`
              }} />
            </div>
          );
        case 'sunflower':
          return (
            <div style={{ position: 'relative', width: '130px', height: '130px' }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((petal) => (
                <div key={petal} style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: '32px', height: '56px',
                  background: `linear-gradient(to bottom, ${flower.color}, #F39C12)`,
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  transform: `translate(-50%, -50%) rotate(${petal * 30}deg) translateY(-44px)`,
                  transformOrigin: 'center center',
                  animation: `petalOpen 0.6s ease-out ${petal * 0.04}s backwards`
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '56px', height: '56px',
                background: 'radial-gradient(circle, #8B4513, #654321)',
                borderRadius: '50%'
              }}>
                {[...Array(20)].map((_, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    top: `${25 + Math.random() * 50}%`,
                    left: `${25 + Math.random() * 50}%`,
                    width: '3px', height: '3px',
                    background: '#3E2723',
                    borderRadius: '50%'
                  }} />
                ))}
              </div>
            </div>
          );
        case 'daisy':
          return (
            <div style={{ position: 'relative', width: '116px', height: '116px' }}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((petal) => (
                <div key={petal} style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: '36px', height: '52px',
                  background: `linear-gradient(to bottom, ${flower.color}, ${flower.petalColor})`,
                  borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%',
                  transform: `translate(-50%, -50%) rotate(${petal * 45}deg) translateY(-36px)`,
                  transformOrigin: 'center center',
                  animation: `petalOpen 0.6s ease-out ${petal * 0.05}s backwards`
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '36px', height: '36px',
                background: 'radial-gradient(circle, #F4D03F, #F39C12)',
                borderRadius: '50%',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
              }} />
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={() => setSelectedFlower(null)}
      >
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '500px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            animation: 'modalPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            width: '130px',
            height: '130px',
            margin: '0 auto 30px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ModalFlowerComponent />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', serif",
            color: flower.color,
            fontSize: '42px',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            Birthday Coupon!
          </h2>
          
          <p style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: '22px',
            color: '#34495E',
            lineHeight: '1.6',
            marginBottom: '30px',
            fontWeight: '400'
          }}>
            {flower.coupon}
          </p>

          <button
            onClick={() => setSelectedFlower(null)}
            style={{
              background: `linear-gradient(135deg, ${flower.color}, ${flower.petalColor})`,
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '18px',
              fontFamily: "'Playfair Display', 'Georgia', serif",
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease',
              fontWeight: '500',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #FFF5E1 0%, #FFE4E1 50%, #E8F5E9 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Georgia', serif",
      overflow: 'hidden',
      position: 'relative'
    }}>
      <style>
        {`
          @keyframes bloom {
            from {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.3);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes modalPop {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes petalOpen {
            from {
              transform: translate(-50%, -50%) scale(0);
            }
            to {
              transform: translate(-50%, -50%) scale(1);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes flicker {
            0%, 100% { transform: translateX(-50%) scaleY(1); }
            50% { transform: translateX(-50%) scaleY(1.1); }
          }
        `}
      </style>

      {!hasStarted ? (
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <CakeCharacter />
          
          <h1 style={{
            fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', serif",
            fontSize: '64px',
            color: '#E74C3C',
            marginTop: '30px',
            marginBottom: '35px',
            textShadow: '3px 3px 6px rgba(0,0,0,0.1)',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            Happy Birthday, Mom!
          </h1>
          
          <button
            onClick={() => setHasStarted(true)}
            style={{
              background: 'linear-gradient(135deg, #E74C3C, #C0392B)',
              color: 'white',
              border: 'none',
              padding: '20px 45px',
              fontSize: '22px',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)',
              transition: 'transform 0.2s ease',
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontWeight: '500',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Click to see your gift! 🌸
          </button>
        </div>
      ) : (
        <>
          <h1 style={{
            position: 'absolute',
            top: '40px',
            fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', serif",
            fontSize: '46px',
            color: '#E74C3C',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            zIndex: 100,
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            Pick a flower! 🌺
          </h1>

          <div style={{
            position: 'relative',
            width: '600px',
            height: '500px'
          }}>
            {/* Vase */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '150px',
              background: 'linear-gradient(to bottom, #3498DB, #2980B9)',
              borderRadius: '0 0 100px 100px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              zIndex: 5
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '180px',
                height: '40px',
                background: 'linear-gradient(to bottom, #5DADE2, #3498DB)',
                borderRadius: '20px 20px 0 0'
              }} />
            </div>

            {flowers.map((flower, index) => (
              <Flower
                key={flower.id}
                flower={flower}
                position={flowerPositions[index]}
                index={index}
              />
            ))}
          </div>

          <p style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#7F8C8D',
            textAlign: 'center',
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontStyle: 'italic'
          }}>
            Each flower contains a special coupon for us to enjoy together! 💝
          </p>
        </>
      )}

      {selectedFlower && (
        <CouponModal flower={flowers.find(f => f.id === selectedFlower)} />
      )}
    </div>
  );
};

export default BirthdayBouquet;
