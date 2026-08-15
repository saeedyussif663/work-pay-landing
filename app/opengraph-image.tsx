import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const ink = '#171A21';
const paper = '#EFEDE6';
const card = '#FFFFFF';
const stamp = '#B23A2E';
const green = '#2F5D3A';
const muted = '#68655C';
const line = '#D9D5C8';

export default async function Image() {
  const spaceGrotesk = await fetch(
    new URL('./SpaceGrotesk-Bold.woff', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const ibmPlexMono = await fetch(
    new URL('./IBMPlexMono-Bold.woff', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: paper,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Nav bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '88px',
          padding: '0 64px',
          borderBottom: `1px solid ${line}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            fontFamily: 'IBM Plex Mono',
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: ink,
          }}
        >
          <span style={{ color: stamp }}>[</span>
          <span>&nbsp;WORK / PAY&nbsp;</span>
          <span style={{ color: stamp }}>]</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '44px',
            fontSize: '17px',
            color: `${ink}CC`,
          }}
        >
          <div style={{ display: 'flex' }}>How it works</div>
          <div style={{ display: 'flex' }}>Dashboard</div>
          <div style={{ display: 'flex' }}>Features</div>
        </div>

        <div
          style={{
            display: 'flex',
            backgroundColor: stamp,
            color: '#FFFFFF',
            fontFamily: 'IBM Plex Mono',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '11px 22px',
            borderRadius: '8px',
          }}
        >
          Get Started
        </div>
      </div>

      {/* Hero content */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 64px',
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '600px' }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '60px',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: ink,
            }}
          >
            <div style={{ display: 'flex' }}>Every payment.</div>
            <div style={{ display: 'flex' }}>Logged. Permanent.</div>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '24px',
              fontSize: '20px',
              lineHeight: 1.5,
              color: `${ink}CC`,
              maxWidth: '520px',
            }}
          >
            Track weekly installments on every vehicle you finance, without the
            notebook or the arguments.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '380px',
            backgroundColor: card,
            border: `1px solid ${line}`,
            borderRadius: '20px',
            padding: '26px 24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '6px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontFamily: 'IBM Plex Mono',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '2px',
                color: stamp,
                border: `3px solid ${stamp}`,
                borderRadius: '8px',
                padding: '5px 12px',
              }}
            >
              LOGGED
            </div>
          </div>

          {[
            ['Rider', 'K. Mensah'],
            ['Vehicle', 'GT-4471-23'],
            ['Amount', 'GHS 220.00'],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: `1px solid ${line}`,
                padding: '12px 0',
                fontFamily: 'IBM Plex Mono',
                fontSize: '17px',
              }}
            >
              <div style={{ display: 'flex', color: muted }}>{label}</div>
              <div style={{ display: 'flex', color: ink, fontWeight: 700 }}>
                {value}
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', gap: '4px', marginTop: '18px' }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flex: 1,
                  height: '13px',
                  borderRadius: '3px',
                  backgroundColor: i < 6 ? green : line,
                }}
              />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              fontFamily: 'IBM Plex Mono',
              fontSize: '14px',
              color: muted,
            }}
          >
            <div style={{ display: 'flex' }}>62% paid</div>
            <div style={{ display: 'flex' }}>GHS 5,060 left</div>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Space Grotesk',
          data: spaceGrotesk,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'IBM Plex Mono',
          data: ibmPlexMono,
          weight: 700,
          style: 'normal',
        },
      ],
    },
  );
}
