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
    description:
      "Entre hoje e cancele quando quiser. Ideal para quem quer conhecer o império sem compromisso.",
    features: [
      "Catálogo completo de canais, filmes e séries",
      "Esportes ao vivo em alta definição",
      "Qualidade até 4K HDR",
      "Atualizações diárias de conteúdo",
      "Suporte todos os dias, das 7h às 22h",
      "Sem fidelidade",
    ],
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: 29.9,
    cadence: "/trimestre",
    equivalent: "Equivale a R$ 9,97/mês",
    save: "16%",
    description:
      "Três meses de cinema, esporte e séries com um valor mais elegante.",
    features: [
      "Catálogo completo de canais, filmes e séries",
      "Esportes ao vivo em alta definição",
      "Qualidade até 4K HDR",
      "Economia de 16% no período",
      "Atualizações diárias de conteúdo",
      "Suporte todos os dias, das 7h às 22h",
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
    description:
      "O melhor assento da casa. Um ano inteiro do império pelo menor valor mensal.",
    features: [
      "Catálogo completo de canais, filmes e séries",
      "Esportes ao vivo em alta definição",
      "Qualidade até 4K HDR",
      "Economia de R$ 42,90 no ano",
      "Suporte prioritário das 7h às 22h",
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
