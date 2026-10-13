import { ImageResponse } from 'next/og';

export const alt = 'Tiago Kochem | Desenvolvimento de sistemas, integrações e automação';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const pillars = ['Sistemas web', 'Integrações e APIs', 'Automação com IA'];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #090d16 0%, #0c1a2e 55%, #1e1145 100%)',
          color: '#f1f5f9',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #026fc3, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            TK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 34, fontWeight: 800 }}>Tiago Kochem</div>
            <div style={{ fontSize: 22, color: '#94a3b8' }}>Desenvolvedor Full Stack | PHP, Laravel, APIs e IA</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, color: '#e0effe', maxWidth: 980 }}>
            Desenvolvimento de sistemas e automações para empresas.
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {pillars.map((p) => (
              <div
                key={p}
                style={{
                  display: 'flex',
                  padding: '10px 22px',
                  borderRadius: 999,
                  border: '1px solid #334155',
                  background: 'rgba(15, 23, 42, 0.8)',
                  fontSize: 24,
                  color: '#cbd5e1',
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#64748b' }}>
          <div style={{ display: 'flex' }}>tiagokochemsite.vercel.app</div>
          <div style={{ display: 'flex', color: '#34d399' }}>Disponível para projetos freelance</div>
        </div>
      </div>
    ),
    size,
  );
}
