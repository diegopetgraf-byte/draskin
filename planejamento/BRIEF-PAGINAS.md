# Brief das páginas de procedimento (13/10/2026)

Cliente: Dra. Samara Rocha, biomédica esteta, CRBM 67943, Clínica Dra. Skin, Rua Dr. César 1161, sala 1011, Santana, São Paulo/SP. WhatsApp (11) 99926-3636. Instagram @draskinbrasil.

## Regras do Diego para este trabalho (13/10/2026)
- A fonte é a própria Dra. Samara: ela revisou como profissional os textos do site atual (`src/data/treatments.ts`, `src/components/HomeClient.tsx`) e os termos de consentimento que comprou com a Med Logos (PDFs abaixo). Use esses conteúdos como verdade. Não conteste, não suavize, não acrescente ressalvas de conselho.
- Nomes comerciais liberados (Botox, Profhilo, Laser Pisom etc.).
- Ela quer divulgar todos os procedimentos abaixo, incluindo escleroterapia e vasinhos.
- Texto: português do Brasil, voz da clínica (elegante, acolhedora, direta), frases curtas, SEM emoji, SEM travessão (nem — nem –), sem preço. Use "Santana" e "São Paulo" de forma natural (título, intro e uma vez no corpo), sem repetir à exaustão.
- Não invente dado da clínica (anos, número de pacientes, prêmios). Para tempo, sessões e recuperação use o que estiver no site atual ou nos termos; se não houver, escreva "Definido na avaliação".

## PDFs (termos e fichas que ela revisou)
Pasta: `/Users/diegocosta/Library/Mobile Documents/com~apple~CloudDocs/medlogos • Artes de clientes/Samara Fornara Pedrotti Rocha/Fechado`
O texto está em curvas: renderize com `sips -s format png "<pdf>" --out /tmp/<nome>.png` (só a 1ª página; para as outras, `qlmanage -t -s 2000 -o /tmp "<pdf>"` ou `python3` + PDFKit não existe; se precisar de mais páginas use `sips` em cada página exportada com `pdfseparate` se houver, senão leia a 1ª página que já traz a descrição) e leia a imagem.
Arquivos úteis por procedimento: Termo Botox, Termo Bioestimuladores, Termo Bioestimulador Mão Abodomen Gluteo, Termo Black Peel, Termo Clareamento Íntimo Axila, Termo Enzimas, Termo Epilação, Termo Escleroterapia, Termo Fios de Pdo, Termo Harmonização, Termo Harmonização Glútea, Termo Hialuronidase, Termo Intradermoterapia, Termo Laser Pisom, Termo Melasma, Termo Microagulhamento, Termo Preenchimento Facial, Termo Preenchimento Labial, Termo Profhilo, Termo Radiofrequencia, Termo Remoção Manchas, Termo Skinbooster, Termo Tatuagem, Termo Vasinhos, Samara Fornara - Termo Criolipolise, e as fichas Bioestimuladores, Fios de PDO, Glúteos, HIFU, Harmonização, Hiperidrose, MMP, Preenchedores Corporais, Preenchimento Labial, Ficha Full Face.

## Lista oficial de páginas (slug, nome, categoria, imagem)
| slug | nome | categoria | imagem |
|---|---|---|---|
| harmonizacao-facial | Harmonização Facial | facial | /card_harmonizacao.jpg |
| full-face | Full Face | facial | /tratamentos/full-face.webp |
| preenchimento-facial | Preenchimento Facial | facial | /tratamentos/preenchimento-facial.webp |
| preenchimento-labial | Preenchimento Labial | facial | /labial.jpeg |
| preenchimento-de-olheiras | Preenchimento de Olheiras | facial | /olheiras.jpeg |
| toxina-botulinica | Toxina Botulínica (Botox) | facial | /card_facial_injectables.jpg |
| bioestimuladores-de-colageno | Bioestimuladores de Colágeno | facial | /bioestimuladores_final.jpg |
| skinbooster | Skinbooster | facial | /skinbooster_final.jpg |
| profhilo | Profhilo | facial | /Profhilo.jpeg |
| fios-de-pdo | Fios de PDO | facial | /tratamentos/fios-de-pdo.webp |
| rejuvenescimento-facial | Rejuvenescimento Facial | pele-e-laser | /rejuvenescimento_final.jpg |
| microagulhamento | Microagulhamento | pele-e-laser | /microagulhamento.jpeg |
| hialuronidase | Hialuronidase | facial | /tratamentos/hialuronidase.webp |
| black-peel | Black Peel | pele-e-laser | /tratamentos/black-peel.webp |
| laser-para-melasma | Laser para Melasma | pele-e-laser | /laser-melasma.jpeg |
| laser-rejuvenescimento | Laser Rejuvenescimento | pele-e-laser | /laser-rejuvenescimento.jpeg |
| remocao-de-manchas | Remoção de Manchas | pele-e-laser | /tratamentos/remocao-de-manchas.webp |
| remocao-de-tatuagem | Remoção de Tatuagem | pele-e-laser | /tratamentos/remocao-de-tatuagem.webp |
| epilacao-a-laser | Epilação a Laser | pele-e-laser | /tratamentos/epilacao-a-laser.webp |
| tratamentos-capilares | Tratamentos Capilares | pele-e-laser | /capilares.jpeg |
| radiofrequencia | Radiofrequência | corporal | /tratamentos/radiofrequencia.webp |
| hifu | HIFU (Ultrassom Microfocado) | corporal | /tratamentos/hifu.webp |
| criolipolise | Criolipólise | corporal | /criolipolise.jpeg |
| enzimas | Enzimas para Gordura Localizada | corporal | /tratamentos/enzimas.webp |
| intradermoterapia | Intradermoterapia (MMP) | corporal | /tratamentos/intradermoterapia.webp |
| harmonizacao-glutea | Harmonização Glútea | corporal | /tratamentos/harmonizacao-glutea.webp |
| preenchedores-corporais | Preenchedores Corporais | corporal | /tratamentos/preenchedores-corporais.webp |
| hiperidrose | Hiperidrose (Suor Excessivo) | corporal | /tratamentos/hiperidrose.webp |
| escleroterapia | Escleroterapia (Vasinhos) | corporal | /tratamentos/escleroterapia.webp |
| clareamento-intimo-e-axilas | Clareamento Íntimo e de Axilas | corporal | /tratamentos/clareamento-intimo-e-axilas.webp |
