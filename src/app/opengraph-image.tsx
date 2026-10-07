import { ImageResponse } from 'next/og'
import { site } from '../config/site'

export const alt = site.headline
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#000000',
          color: '#ffffff',
          padding: '72px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: 4,
            color: '#a3a3a3',
          }}
        >
          SOFTWARE DEVELOPER
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700 }}>
            {site.title}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 34,
              color: '#d4d4d4',
            }}
          >
            Building modern software at Somast
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
