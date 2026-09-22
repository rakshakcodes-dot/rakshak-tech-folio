interface MonogramLogoProps {
  className?: string;
  variant?: 'red' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function MonogramLogo({ className = '', variant = 'red', size = 'md' }: MonogramLogoProps) {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const isWhite = variant === 'white';
  const isDark = variant === 'dark';

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
      title="Rakshak Saini — RS Monogram"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer geometric frame accent */}
        <rect 
          x="3" 
          y="3" 
          width="94" 
          height="94" 
          rx="18" 
          stroke={isWhite ? 'rgba(255,255,255,0.4)' : isDark ? '#1e293b' : 'rgba(235,45,75,0.25)'} 
          strokeWidth="2" 
          strokeDasharray="4 4"
        />

        {/* Diagonal architectural inner texture */}
        <g opacity={isWhite ? '0.2' : '0.15'}>
          <line x1="15" y1="85" x2="85" y2="15" stroke={isWhite ? '#ffffff' : '#eb2d4b'} strokeWidth="1.5" />
          <line x1="25" y1="85" x2="85" y2="25" stroke={isWhite ? '#ffffff' : '#eb2d4b'} strokeWidth="1" />
          <line x1="15" y1="75" x2="75" y2="15" stroke={isWhite ? '#ffffff' : '#eb2d4b'} strokeWidth="1" />
        </g>

        {/* Monogram Intertwined "RS" glyphs matching reference geometry */}
        <g fill={isWhite ? '#ffffff' : isDark ? '#1e293b' : '#eb2d4b'}>
          {/* Top curve / loop of R */}
          <path d="M26 28 C26 24 30 22 42 22 C56 22 66 26 66 36 C66 45 57 49 46 49 L34 49 L34 28 Z M34 28 L43 28 C50 28 57 30 57 36 C57 42 50 44 43 44 L34 44 Z" />
          {/* Stem & Leg of R transitioning to S */}
          <path d="M26 22 L34 22 L34 78 L26 78 Z" />
          <path d="M42 46 L62 78 L52 78 L34 50 Z" />

          {/* Interlocking S curve */}
          <path d="M48 54 C54 54 68 56 68 66 C68 76 54 78 40 78 C32 78 24 76 24 76 L26 70 C26 70 34 72 40 72 C49 72 59 71 59 66 C59 61 50 60 44 60 C32 60 28 54 28 46 L36 46 C36 50 40 54 48 54 Z" />
        </g>

        {/* Small corner accent square */}
        <rect 
          x="80" 
          y="12" 
          width="6" 
          height="6" 
          fill={isWhite ? '#ffffff' : '#eb2d4b'} 
        />
      </svg>
    </div>
  );
}
