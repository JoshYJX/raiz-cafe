export default function Logo({ tamano = 34 }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo de Raíz"
    >
      <circle cx="24" cy="24" r="23" fill="var(--tinta)" />
      <path
        d="M24 10c-5.2 0-9 4.2-9 9.2 0 6.4 9 15.8 9 15.8s9-9.4 9-15.8c0-5-3.8-9.2-9-9.2Z"
        fill="var(--oro)"
      />
      <path
        d="M24 12.5c0 6.6 0 13 0 19.5"
        stroke="var(--tinta)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17 35c1.6-2.6 4.2-3.6 7-3.6s5.4 1 7 3.6"
        stroke="var(--terracota)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 39c2.3-3.4 5.8-4.8 10-4.8s7.7 1.4 10 4.8"
        stroke="var(--musgo)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
