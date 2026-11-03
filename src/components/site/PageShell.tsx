import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { TreatmentsDirectory } from '@/components/site/TreatmentsDirectory';

/** Moldura das páginas internas: cabeçalho fixo, conteúdo e rodapé. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header />
      <FloatingWhatsApp />
      <main id="conteudo" className="flex-1 pt-24">
        {children}
      </main>
      <Footer directory={<TreatmentsDirectory />} />
    </div>
  );
}
