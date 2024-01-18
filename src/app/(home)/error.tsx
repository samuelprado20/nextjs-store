'use client'


export default function Error({ error, reset }: ErrorPageProps) {
  return(
    <div style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <p style={{fontWeight: 'bolder', fontSize: '2rem'}}>Something went wrong :c</p>
      <button
        onClick={reset}
        style={{
          height: '50px',
          width: '95px',
          border: 'none',
          borderRadius: '6px',
          backgroundColor: '#551a8b',
          color: '#e4e1f6',
          fontSize: '1rem'
        }}
      >
        Try again
      </button>
    </div>
  )
}