import { brand, logo } from './content'

export default function LogoWithText() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Logo */}
      <div className="mb-6">
        <svg
          width={logo.width}
          height={logo.height}
          viewBox={logo.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 10px rgba(114, 214, 237, 0.3))' }}
        >
          {logo.hexagons.map((points, i) => (
            <polygon
              key={i}
              points={points}
              stroke="white"
              strokeWidth="2"
            />
          ))}
          {logo.nodes.map(([cx, cy, fill], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.5" fill={fill} />
          ))}
        </svg>
      </div>

      {/* Brand name */}
      <h1
        className="font-montserrat font-medium tracking-[0.08em] leading-tight m-0"
        style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)', textShadow: '0 0 20px rgba(0,0,0,0.8)' }}
      >
        {brand.name}
      </h1>

      {/* Sub-name */}
      <h2
        className="font-montserrat font-light text-brand-cyan mt-1 mb-11"
        style={{
          fontSize: 'clamp(1.1rem, 3vw, 2.2rem)',
          letterSpacing: '0.4em',
          marginLeft: '0.4em',
          textShadow: '0 0 15px rgba(114, 214, 237, 0.4)',
        }}
      >
        {brand.nameSub}
      </h2>

      {/* Tagline */}
      <p
        className="font-montserrat font-normal tracking-[0.01em]"
        style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.7rem)', textShadow: '0 0 15px rgba(0,0,0,0.9)' }}
      >
        {brand.tagline}
      </p>
    </div>
  )
}
