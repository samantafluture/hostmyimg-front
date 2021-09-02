# Host My Image

## Refatorar:

- [ ] Criar variáveis com estilos que se repetem (cores, fontes)
- [ ] Usar rem em vez de px
- [ ] Dividir novamente em componentes
- [ ] Página home

## Adicionar

- [ ] Alterar cor da borda conforme tipo de arquivo
- [ ] Mensagens de validação com cores (tipo de arquivo, tamanho de arquivo, máxima quantidade de arquivo por vez)
- [ ] Opção de "remover todos"
- [ ] Alterar mensagem conforme sucesso ou erro
- [ ] barra de progresso circular
- [ ] Ícone que deu certo ou que deu errado de forma programática

---

01/Setembro/2021

1. Serviço de upload / api
-> gravar na api o arquivo
-> pegar o link salvo cdn e mostrar
-> usar infos do progresso na barra de progresso

2. Validações visuais
3. Refatoração de estilos e componentes

## Image Uploader

<app-form>
  <app-dropzone />
  <app-browse />
</app-form>
<app-files>
  <app-preview />
  <app-status />
</app-files>

- drop or browse image
- preview image
- upload image
- remove image
- get link image

