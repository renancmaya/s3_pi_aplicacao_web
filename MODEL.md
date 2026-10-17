# Modelagem de Dados

Este documento descreve a estrutura de dados da entidade principal da aplicação de gestão financeira, bem como as listas de valores padronizados que alimentarão as opções do sistema.

## Entidade: Registro Financeiro

Cada movimentação financeira (conta a pagar ou a receber) cadastrada no sistema deverá conter obrigatoriamente os seguintes atributos:

*   **ID:** Identificador único do registro.
*   **Tipo:** Define a natureza da movimentação ('Entrada' ou 'Saída').
*   **Descrição:** Breve resumo ou título da movimentação. Utilizado para pesquisas de texto livre.
*   **Valor:** Montante financeiro da operação. Utilizado para cálculos de saldo, filtros e ordenação.
*   **Data da competência:** Data exata em que o negócio foi fechado ou o serviço contratado, dando origem à obrigação financeira.
*   **Data de vencimento:** Prazo limite para o pagamento ou recebimento da movimentação. Utilizada para alertas de atraso.
*   **Data realizada:** Data exata em que o pagamento ou recebimento foi efetivamente concluído e o dinheiro mudou de conta.
*   **Categoria:** Classificação de onde o dinheiro veio ou para onde foi.
*   **Forma de Pagamento:** Método utilizado para transacionar a movimentação.
*   **Conta Financeira:** Local de origem (nas saídas) ou destino (nas entradas) do recurso.

---

## Listas de Valores (Domínios)

Os valores a seguir devem ser utilizados para padronizar os dados na criação da base de dados fictícia e para popular as opções dos campos de seleção (dropdowns) na interface.

### 1. Contas Financeiras
*   Conta Corrente Principal
*   Carteira (Dinheiro Físico)
*   Poupança / Investimentos
*   Vale-Alimentação / Vale-Refeição

### 2. Formas de Pagamento
*   PIX
*   Cartão de Crédito
*   Cartão de Débito
*   Boleto Bancário
*   Dinheiro em Espécie

### 3. Categorias de Despesas (Saídas)
*   Moradia (Ex: Aluguel, condomínio, energia, internet)
*   Alimentação (Ex: Supermercado, restaurantes, delivery)
*   Transporte (Ex: Combustível, transporte público, aplicativos)
*   Saúde (Ex: Plano de saúde, farmácia)
*   Educação (Ex: Mensalidades, cursos, materiais)
*   Lazer e Assinaturas (Ex: Streaming, passeios, eventos)

### 4. Categorias de Entradas (Receitas)
*   Salário Fixo
*   Serviços e Freelances
*   Rendimentos de Investimentos
*   Reembolsos / Estornos