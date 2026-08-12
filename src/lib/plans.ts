export type PlanId = "mensal" | "trimestral" | "anual";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  cadence: string;
  equivalent: string;
  save: string | null;
  highlight?: boolean;
  badge?: string;
  description: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: 11.9,
    cadence: "/mês",
    equivalent: "Flexibilidade total",
    save: null,
    description: "Entre hoje e cancele quando quiser. Ideal para quem quer testar o império sem compromisso.",
    features: [
      "Catálogo completo de canais, filmes e séries",
      "Esportes ao vivo em alta definição",
      "Qualidade até 4K HDR",
      "2 telas simultâneas",
      "Ativação imediata",
      "Suporte todos os dias",
    ],
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: 29.9,
    cadence: "/trimestre",
    equivalent: "Equivale a R$ 9,97/mês",
    save: "16%",
    description: "Três meses de cinema, esporte e séries com um valor mais elegante.",
    features: [
      "Tudo do plano Mensal",
      "Economia de 16% no período",
      "3 telas simultâneas",
      "Prioridade no suporte",
      "Catálogo infantil incluso",
      "Atualizações semanais",
    ],
  },
  {
    id: "anual",
    name: "Anual",
    price: 99.9,
    cadence: "/ano",
    equivalent: "Equivale a R$ 8,33/mês",
    save: "30%",
    highlight: true,
    badge: "Mais vantajoso",
    description: "O melhor assento da casa. Um ano inteiro do império pelo menor valor mensal.",
    features: [
      "Tudo do plano Trimestral",
      "Economia de R$ 42,90 no ano",
      "4 telas simultâneas",
      "Qualidade máxima 4K HDR",
      "Suporte prioritário 24h",
      "Acesso antecipado a novidades",
    ],
  },
];

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function getPlan(id: PlanId) {
  return plans.find((plan) => plan.id === id) ?? plans[0];
}
