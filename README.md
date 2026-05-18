# Ifoode MVP

MVP estático para validar a proposta do sistema Ifoode:

- Web pública do cliente em `bytefood.com/ByteTruck/Catalogo`, simulada pela rota `#ByteTruck/Catalogo`.
- Pedido com carrinho, cotas prioritárias, acompanhamento e cancelamento.
- Pagamentos via Stripe simulados com regras de taxa:
  - Pix: 1,99%.
  - Cartão: 4,99% + R$ 0,49.
  - Dinheiro: sem taxa.
- Aviso claro de que as taxas só entram em pedidos pagos pelo site.
- Área privada do estabelecimento com pedidos, cardápio, financeiro, campanhas, métricas e integrações.
- WhatsApp simulado para alertas de pedido, entrega, relatórios e campanhas.

## Como abrir

Abra `index.html` no navegador. Não precisa instalar dependências nem iniciar servidor.
