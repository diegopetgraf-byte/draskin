'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { QrCode, Heart } from 'lucide-react';
import GoogleHeroWidget from '@/components/GoogleHeroWidget';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import mascotSitting from '@/assets/mascot-sitting.webp';

export function TermsPageContent() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <FloatingWhatsApp />

            <main className="flex-1">
                {/* Hero Section - Standardized */}
                <section className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 px-4">
                    <div className="container mx-auto">
                        {/* Mobile/Tablet Layout (up to 1023px) */}
                        <div className="lg:hidden flex flex-col items-center">
                            <p className="text-[11px] font-semibold text-black uppercase tracking-wider mb-6 text-center">
                                Transparência e Confiança
                            </p>
                            <h1 className="font-heading text-3xl text-foreground leading-[1.1] mb-6 text-center">
                                Termos e <span className="text-logo-gradient italic">Condições</span>
                            </h1>
                            <div className="relative mb-6">
                                <div className="relative w-56 h-56">
                                    <img src={mascotSitting.src} alt="Esthétique" className="w-full h-full object-contain" />
                                </div>
                                <div className="absolute bottom-16 -left-[72px] sm:bottom-20 sm:-left-[88px] md:bottom-24 md:-left-[96px]">
                                    <GoogleHeroWidget />
                                </div>
                                <div className="absolute -bottom-2 -right-10 sm:bottom-0 sm:-right-8 md:-bottom-2 md:-right-12">
                                    <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.06),8px_8px_20px_rgba(0,0,0,0.1),-4px_-4px_12px_rgba(255,255,255,0.9)]">
                                        <div className="w-7 h-7 bg-logo-gradient rounded-full flex items-center justify-center">
                                            <Heart className="w-3.5 h-3.5 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs text-foreground">Apaixonados</p>
                                            <p className="text-[10px] text-muted-foreground">por estética</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-base text-muted-foreground text-center">
                                Documentação legal sobre política de compra, garantia, produção, entrega e privacidade.
                            </p>
                        </div>

                        {/* Desktop Layout (1024px and up) */}
                        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                                <p className="text-[11px] font-semibold text-black uppercase tracking-wider mb-6">
                                    Transparência e Confiança
                                </p>
                                <h1 className="font-heading text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                                    Termos e <span className="text-logo-gradient italic">Condições</span>
                                </h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                    Documentação legal detalhada sobre nossa política de compra, garantia, prazos de produção, processos de entrega e compromisso com sua privacidade.
                                </p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative flex justify-center items-center">
                                <div className="relative">
                                    <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]">
                                        <img src={mascotSitting.src} alt="Esthétique" className="w-full h-full object-contain" />
                                    </div>
                                    {/* Widgets */}
                                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -translate-y-1/2 -right-16">
                                        <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)]">
                                            <div className="w-7 h-7 bg-pix/10 rounded-full flex items-center justify-center">
                                                <QrCode className="w-3.5 h-3.5 text-pix" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-pix text-sm">10% OFF</p>
                                                <p className="text-[10px] text-muted-foreground">Pagando no PIX</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-24 -left-12">
                                        <GoogleHeroWidget />
                                    </motion.div>
                                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute -bottom-4 right-12">
                                        <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)]">
                                            <div className="w-7 h-7 bg-logo-gradient rounded-full flex items-center justify-center">
                                                <Heart className="w-3.5 h-3.5 text-white fill-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-xs text-foreground">Apaixonados</p>
                                                <p className="text-[10px] text-muted-foreground">por estética</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <div className="container mx-auto px-4 max-w-4xl pb-24">
                    <div className="bg-secondary rounded-3xl p-6 md:p-12 [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.06),8px_8px_24px_rgba(0,0,0,0.1),-4px_-4px_12px_rgba(255,255,255,0.9)] text-foreground">
                        <p className="text-sm font-medium text-muted-foreground mb-10 text-center">
                            Última atualização: fevereiro 2026
                        </p>

                        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                            <p>
                                A Esthétique presta serviços de impressão digital personalizada, possibilitando que o usuário cadastrado adquira um ou mais produtos que serão impressos com a arte elaborada pela Esthétique ou enviada pelo usuário.
                            </p>

                            <p>
                                Estes termos e condições regulam a compra de produtos/serviços da Esthétique pelo usuário, e sua aceitação é condição indispensável para a utilização dos serviços e a aquisição de produtos da Esthétique.
                            </p>

                            <p>
                                Ao concordar com a presente política, você reconhece o pleno direito que temos em alterar o teor da mesma a qualquer momento, de acordo com nossa finalidade ou necessidade, assim como para adequação e conformidade legal de disposição de lei ou norma que tenha força jurídica equivalente. Fica sob sua responsabilidade manter-se atualizado com nossos termos, fazendo leitura do presente termo sempre que fizer acesso ou realizar compras no website.
                            </p>

                            <p>
                                Você será notificado por meio dos canais de contatos informados por você, quando ocorrerem atualizações neste documento que demandem nova coleta de consentimento.
                            </p>

                            <p>
                                Caso algum ponto desta política seja considerado inaplicável por autoridade de dados ou judicial, as demais condições permanecerão em pleno vigor e efeito.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">1 • Aprovação de Artes</h2>
                            <p>
                                <strong>1.1 •</strong> A aprovação de artes abrange todo o contexto do produto: tamanho, cores, diagramação, estética, tamanho e resolução de fotos, ilustrações, tipos e tamanhos de letra, acentuações, ortografia, concordância verbal, colocação de vírgulas, numerações, detalhes de endereços, e-mails, telefones, número de conselho profissional, abreviações de nomes, trocas de letras (ex.: &apos;&apos;s&apos;&apos; por &apos;&apos;z&apos;&apos;, &apos;&apos;c&apos;&apos; por &apos;&apos;k&apos;&apos; etc.) e todo e qualquer detalhe que faça parte da arte final.
                            </p>
                            <p>
                                <strong>1.2 •</strong> É de responsabilidade do CLIENTE conferir se todos os dados estão corretos em todos os materiais e durante todas as etapas da aprovação da arte. Salvo problemas de impressão ou acabamento, a Esthétique não se responsabiliza por quaisquer erros inerentes à arte aprovada pelo cliente após a confecção do produto final, não aceitando reclamações ou devoluções posteriores.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">2 • Termos de Garantia</h2>
                            <p>
                                <strong>2.1 •</strong> Desvios de cores não caracterizarão defeito de impressão em comparação entre a visualização na tela e o produto impresso, considerando que as gráficas trabalham com o padrão CMYK, enquanto os monitores apresentam o padrão RGB.
                            </p>
                            <p>
                                <strong>2.2 •</strong> Desvios de cores entre ordens diferentes não caracterizarão defeito de impressão, visto que são impressos em tempos, máquinas e/ou papéis diferentes. Todos os materiais terão limite de tolerância de 3mm de variação máxima nos cortes e dobras.
                            </p>
                            <p>
                                <strong>2.3 •</strong> Itens cobertos por nossa garantia: manchas, decalque de cores, material com corte incorreto, defeitos na camada de verniz, aplicação do verniz com variação maior que 1mm e cortes e vincos com variação maior que 1,5mm.
                            </p>
                            <p>
                                <strong>2.4 •</strong> Caso seu material apresente algum problema de impressão, você terá até 10 dias corridos contados da entrega para solicitar a reimpressão, mediante devolução do produto.
                            </p>
                            <div className="pl-4 border-l-2 border-accent/20 space-y-3">
                                <p>Para análise do defeito, o usuário deve enviar:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Foto que mostre o defeito;</li>
                                    <li>Foto que evidencie a proporção do material supostamente defeituoso em relação ao pedido total; ou</li>
                                    <li>Devolver todo o material em embalagem original, sem indícios de uso.</li>
                                </ul>
                                <p>A quantidade defeituosa deve ser superior a 10% do total. Caso não seja constatado defeito de impressão, o material será devolvido sem direito a reembolso ou crédito.</p>
                                <p>O prazo para análise da reclamação pela Esthétique é de 5 dias úteis após o recebimento do material ou das evidências.</p>
                                <p>Se a reclamação for procedente, a Esthétique reimprimirá o design aprovado ou concederá crédito equivalente.</p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">3 • Pagamento</h2>
                            <p>
                                <strong>3.1 •</strong> Com a confirmação do pagamento, iremos preparar as artes e enviá-las para aprovação em até 2 a 3 dias úteis.
                            </p>
                            <p>
                                <strong>3.2 •</strong> O preço informado no site pode ser alterado sem aviso prévio. O preço válido é o do momento em que o pedido for finalizado.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">4 • Produção</h2>
                            <p>
                                <strong>4.1 •</strong> Após a aprovação final, os materiais entram em confecção, respeitando o prazo de produção indicado na página do produto.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">5 • Transporte e Entrega</h2>
                            <p>
                                <strong>5.1 •</strong> Concluída a produção, seus materiais serão devidamente embalados e transportados via Motoboys (Grande São Paulo) ou Correios (restante do país).
                            </p>
                            <p>
                                <strong>5.2 •</strong> Entregas fora da região metropolitana de São Paulo possuem frete na modalidade PAC dos Correios. O prazo total é o da produção somado ao prazo dos Correios para a sua região.
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>A entrega ocorrerá entre 08:00 e 20:00 horas para qualquer pessoa presente no endereço indicado.</li>
                                <li>Atrasos decorrentes de informações incorretas fornecidas pelo usuário serão de sua exclusiva responsabilidade.</li>
                                <li>A confirmação de entrega dos Correios servirá como prova do recebimento.</li>
                                <li>Pedidos devolvidos à Esthétique por falha de entrega ficarão disponíveis por 10 dias, aguardando contato do CLIENTE para reenvio. Após esse prazo, serão descartados.</li>
                            </ul>
                            <p>
                                <strong>5.8 •</strong> Poderá haver atrasos nos Correios, especialmente no PAC, que é automaticamente aplicado. Caso tenha urgência, solicite orçamento personalizado via WhatsApp (11) 94388-1210 para envio via SEDEX.
                            </p>
                            <p>
                                <strong>5.9 •</strong> Seguro Entrega: aplicado automaticamente, cobre eventuais avarias ou extravio. Em casos de avaria, será necessário vídeo (mín. 30 segundos) para análise e solução adequada: reprodução ou reembolso proporcional.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">6 • Propriedade Intelectual das Artes</h2>
                            <p>
                                <strong>6.1 •</strong> A Esthétique é titular da marca, logotipo e domínio do site, bem como de todos os desenhos das artes nos produtos vendidos. O usuário reconhece que esses materiais podem estar protegidos por direitos de propriedade intelectual e não poderá copiá-los ou distribuí-los sem autorização expressa.
                            </p>
                            <p>
                                <strong>6.2 •</strong> A compra não contempla fornecimento de arquivos e matrizes gráficas.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">7 • Trocas e Devoluções</h2>
                            <p>
                                <strong>7.1 •</strong> Não se aplica a troca, devolução ou cancelamento por arrependimento, visto que o serviço é personalizado.
                            </p>
                            <p>
                                <strong>7.2 •</strong> Não se aplica a troca, devolução ou cancelamento por erros de digitação, já que a impressão inicia somente após a aprovação da arte.
                            </p>
                            <p>
                                <strong>7.3 •</strong> Aplica-se a troca em caso de defeito de fabricação.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">8 • Logotipos – Direitos Autorais e Cessão de Direitos</h2>
                            <p>
                                <strong>8.1 •</strong> Todos os logotipos criados pela Esthétique são protegidos por direitos autorais e pertencem exclusivamente à Esthétique até a conclusão da transação. Ao adquirir um logotipo, o comprador recebe a cessão completa dos direitos autorais, podendo usá-lo para fins comerciais e promocionais diretamente associados ao seu negócio.
                            </p>
                            <p>
                                <strong>8.2 •</strong> Os logotipos são fornecidos em alta resolução, entre 3000x3000 px e 4000x4000 px (25,4x25,4 cm a 33,87x33,87 cm em 300 DPI), não sendo vetoriais. A ampliação além desse tamanho pode resultar em perda de qualidade.
                            </p>
                            <p>
                                <strong>8.3 •</strong> A cessão de direitos autorais aplica-se apenas ao logotipo adquirido. Modificações, revenda ou criação de obras derivadas não são permitidas sem autorização expressa.
                            </p>
                            <p>
                                <strong>8.4 •</strong> É responsabilidade do comprador garantir que o uso do logotipo não viole direitos de terceiros ou legislação aplicável. A Esthétique não se responsabiliza por usos indevidos após a cessão dos direitos.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                            <h2 className="text-xl font-bold text-foreground font-heading">9 • Proteção de Dados (LGPD)</h2>
                            <p>
                                <strong>9.1 •</strong> A Esthétique respeita a privacidade de seus CLIENTES, não monitorando, acessando ou divulgando informações privativas sem autorização, exceto por força de lei ou ordem judicial.
                            </p>
                            <p>
                                <strong>9.2 •</strong> Mantemos sistemas de segurança para proteção dos dados, dentro dos padrões de mercado.
                            </p>
                            <p>
                                <strong>9.3 •</strong> Caso a Esthétique seja obrigada a prestar informações sobre dados do CLIENTE por força de lei ou ordem judicial, isso não configura violação de privacidade.
                            </p>
                        </div>

                        {/* Adendo */}
                        <div className="mt-16 pt-8 border-t border-accent/10">
                            <h3 className="text-lg font-bold text-foreground mb-4">Adendo de Responsabilidade Profissional</h3>
                            <p className="text-sm font-medium italic">
                                Ao realizar qualquer compra na Esthétique, o comprador declara, sob as penas da lei, que é profissional da área da saúde e está autorizado a adquirir material gráfico para fins de utilização profissional, isentando a Esthétique de qualquer responsabilidade quanto ao uso ou à regularidade profissional do comprador.
                            </p>
                        </div>
                    </div>
                </div>

                <GoogleReviewsCarousel />
            </main>

            <Footer />
        </div>
    );
}
