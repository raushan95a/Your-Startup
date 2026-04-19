export default function BirdIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      {/* Geometric origami-style bird */}
      <path
        d="M16 2L24 8V14L16 20L8 14V8L16 2Z"
        fill="#C5BAFF"
        opacity="0.3"
      />
      <path
        d="M16 8L22 12V16L16 20L10 16V12L16 8Z"
        fill="#C5BAFF"
      />
      <path
        d="M16 12L20 14V17L16 19L12 17V14L16 12Z"
        fill="white"
      />
      {/* Left wing */}
      <path
        d="M10 14L6 16L8 12L10 14Z"
        fill="#C5BAFF"
        opacity="0.6"
      />
      {/* Right wing */}
      <path
        d="M22 14L26 16L24 12L22 14Z"
        fill="#C5BAFF"
        opacity="0.6"
      />
      {/* Tail */}
      <path
        d="M16 20L18 26L16 24L14 26L16 20Z"
        fill="#C5BAFF"
        opacity="0.4"
      />
    </svg>
  )
}
