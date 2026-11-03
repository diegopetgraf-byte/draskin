import fs from 'node:fs';
import path from 'node:path';
import type { ProcedureCategory, ProcedurePage } from './types';
import { PROCEDURES_FACIAL_A } from './facial-a';
import { PROCEDURES_PELE_B } from './pele-b';
import { PROCEDURES_CORPORAL_C } from './corporal-c';

export type { ProcedureCategory, ProcedurePage } from './types';

/** Imagem provisória por categoria enquanto a ilustração própria não existe em /public. */
const FALLBACK_IMAGE: Record<ProcedureCategory, string> = {
  facial: '/card_face_profile.webp',
  'pele-e-laser': '/rejuvenescimento_final.jpg',
  corporal: '/criolipolise.jpeg',
};

const withImage = (p: ProcedurePage): ProcedurePage =>
  fs.existsSync(path.join(process.cwd(), 'public', p.image)) ? p : { ...p, image: FALLBACK_IMAGE[p.category] };

export const ALL_PROCEDURES: ProcedurePage[] = [
  ...PROCEDURES_FACIAL_A,
  ...PROCEDURES_PELE_B,
  ...PROCEDURES_CORPORAL_C,
].map(withImage);

export const CATEGORY_LABELS: Record<ProcedureCategory, { title: string; eyebrow: string; description: string }> = {
  facial: {
    title: 'Estética facial',
    eyebrow: 'Injetáveis e harmonização',
    description: 'Harmonização, preenchimentos, toxina botulínica, bioestimuladores e fios para equilibrar, sustentar e rejuvenescer o rosto.',
  },
  'pele-e-laser': {
    title: 'Pele e laser',
    eyebrow: 'Qualidade de pele e tecnologias',
    description: 'Lasers, peelings e terapias para manchas, textura, poros, viço e saúde capilar.',
  },
  corporal: {
    title: 'Estética corporal',
    eyebrow: 'Contorno e cuidado do corpo',
    description: 'Tecnologias e injetáveis para gordura localizada, flacidez, contorno, glúteos, vasinhos e suor excessivo.',
  },
};

export const CATEGORY_ORDER: ProcedureCategory[] = ['facial', 'pele-e-laser', 'corporal'];

export function getProcedure(slug: string): ProcedurePage | undefined {
  return ALL_PROCEDURES.find((p) => p.slug === slug);
}

export function proceduresByCategory(category: ProcedureCategory): ProcedurePage[] {
  return ALL_PROCEDURES.filter((p) => p.category === category);
}

const KEEP_FIRST = /^(Botox|Profhilo|HIFU|MMP|PDO)\b/;

/** Nome do tratamento para o meio da frase: "toxina botulínica (Botox)", "HIFU". */
export function nameInSentence(p: ProcedurePage): string {
  return KEEP_FIRST.test(p.name) ? p.name : p.name.charAt(0).toLowerCase() + p.name.slice(1);
}

/** "O que é a toxina botulínica (Botox)" / "O que são os tratamentos capilares". */
export function whatIsHeading(p: ProcedurePage): string {
  const verb = p.article.endsWith('s') ? 'são' : 'é';
  return `O que ${verb} ${p.article} ${nameInSentence(p)}`;
}

/** "sobre a toxina botulínica (Botox)". */
export function aboutPhrase(p: ProcedurePage): string {
  return `${p.article} ${nameInSentence(p)}`;
}
