const mockData = [
  {
    id: 1,
    description: "salário mensal",
    type: "entrada",
    category: "fixas",
    dueDate: "2026-10-05",
    value: 5800.00
  },
  {
    id: 2,
    description: "aluguel",
    type: "saida",
    category: "moradia",
    dueDate: "2026-10-10",
    value: -1500.00
  },
  {
    id: 3,
    description: "conta de energia",
    type: "saida",
    category: "moradia",
    dueDate: "2026-10-12",
    value: -185.50
  },
  {
    id: 4,
    description: "freelance web",
    type: "entrada",
    category: "extra",
    dueDate: "2026-10-15",
    value: 1200.00
  },
  {
    id: 5,
    description: "compras supermercado",
    type: "saida",
    category: "alimentação",
    dueDate: "2026-10-16",
    value: -450.75
  },
  {
    id: 6,
    description: "assinatura de software",
    type: "saida",
    category: "ferramentas",
    dueDate: "2026-10-17",
    value: -89.90
  },
  {
    id: 7,
    description: "manutenção do carro",
    type: "saida",
    category: "transporte",
    dueDate: "2026-10-18",
    value: -350.00
  },
  {
    id: 8,
    description: "venda de monitor",
    type: "entrada",
    category: "extra",
    dueDate: "2026-10-19",
    value: 400.00
  },
  {
    id: 9,
    description: "internet",
    type: "saida",
    category: "fixas",
    dueDate: "2026-10-20",
    value: -120.00
  },
  {
    id: 10,
    description: "cinema e pipoca",
    type: "saida",
    category: "lazer",
    dueDate: "2026-10-22",
    value: -95.00
  },
  {
    id: 11,
    description: "plano de saúde",
    type: "saida",
    category: "saúde",
    dueDate: "2026-10-25",
    value: -480.00
  },
  {
    id: 12,
    description: "rendimento de investimentos",
    type: "entrada",
    category: "extra",
    dueDate: "2026-10-28",
    value: 150.25
  },
  {
    id: 13,
    description: "combustível",
    type: "saida",
    category: "transporte",
    dueDate: "2026-10-29",
    value: -210.00
  },
  {
    id: 14,
    description: "farmácia",
    type: "saida",
    category: "saúde",
    dueDate: "2026-11-02",
    value: -85.40
  },
  {
    id: 15,
    description: "salário mensal",
    type: "entrada",
    category: "fixas",
    dueDate: "2026-11-05",
    value: 5800.00
  },
  {
    id: 16,
    description: "conta de água",
    type: "saida",
    category: "moradia",
    dueDate: "2026-11-08",
    value: -95.30
  },
  {
    id: 17,
    description: "aluguel",
    type: "saida",
    category: "moradia",
    dueDate: "2026-11-10",
    value: -1500.00
  },
  {
    id: 18,
    description: "jantar fora",
    type: "saida",
    category: "lazer",
    dueDate: "2026-11-12",
    value: -140.00
  },
  {
    id: 19,
    description: "freelance design",
    type: "entrada",
    category: "extra",
    dueDate: "2026-11-15",
    value: 850.00
  },
  {
    id: 20,
    description: "compras supermercado",
    type: "saida",
    category: "alimentação",
    dueDate: "2026-11-16",
    value: -520.10
  }
];

export const categoryList = [
  { "id": 1, "type": "saida", "slug": "academia", "name": "Academia" },
  { "id": 2, "type": "saida", "slug": "alimentacao", "name": "Alimentação" },
  { "id": 3, "type": "saida", "slug": "aluguel", "name": "Aluguel" },
  { "id": 4, "type": "saida", "slug": "anuncios", "name": "Anúncios" },
  { "id": 5, "type": "saida", "slug": "beleza", "name": "Beleza" },
  { "id": 6, "type": "saida", "slug": "combustivel", "name": "Combustível" },
  { "id": 7, "type": "saida", "slug": "contabilidade", "name": "Contabilidade" },
  { "id": 8, "type": "saida", "slug": "contas", "name": "Contas" },
  { "id": 9, "type": "saida", "slug": "cursos", "name": "Cursos" },
  { "id": 10, "type": "saida", "slug": "dependentes", "name": "Dependentes" },
  { "id": 11, "type": "saida", "slug": "dividas", "name": "Dívidas" },
  { "id": 12, "type": "saida", "slug": "embalagens", "name": "Embalagens" },
  { "id": 13, "type": "saida", "slug": "estoque", "name": "Estoque" },
  { "id": 14, "type": "entrada", "slug": "faturamento", "name": "Faturamento" },
  { "id": 15, "type": "saida", "slug": "impostos", "name": "Impostos" },
  { "id": 16, "type": "saida", "slug": "internet", "name": "Internet" },
  { "id": 17, "type": "saida", "slug": "investimentos", "name": "Investimentos" },
  { "id": 18, "type": "saida", "slug": "lazer", "name": "Lazer" },
  { "id": 19, "type": "saida", "slug": "manutencao", "name": "Manutenção" },
  { "id": 20, "type": "saida", "slug": "moveis", "name": "Móveis" },
  { "id": 21, "type": "saida", "slug": "pets", "name": "Pets" },
  { "id": 22, "type": "saida", "slug": "pro-labore", "name": "Pró-Labore" },
  { "id": 23, "type": "entrada", "slug": "renda-extra", "name": "Renda Extra" },
  { "id": 24, "type": "entrada", "slug": "rendimentos", "name": "Rendimentos" },
  { "id": 25, "type": "entrada", "slug": "salario", "name": "Salário" },
  { "id": 26, "type": "saida", "slug": "saude", "name": "Saúde" },
  { "id": 27, "type": "saida", "slug": "softwares", "name": "Softwares" },
  { "id": 28, "type": "saida", "slug": "supermercado", "name": "Supermercado" },
  { "id": 29, "type": "saida", "slug": "tarifas", "name": "Tarifas" },
  { "id": 30, "type": "saida", "slug": "veiculo", "name": "Veículo" }
];

export const typeList = [
  { "id": 1, "slug": "entrada", "name": "Entrada" },
  { "id": 2, "slug": "saida", "name": "Saída" },
];

export const statusList = [
  { "id": 1, "slug": "a-pagar", "name": "A pagar" },
  { "id": 2, "slug": "pago", "name": "Pago" },
];