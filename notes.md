# Host My Image

## Estilo global

```css
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background: #7159c1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
html,
body,
#root {
  height: 100%;
}
```

Refatorar:

- [ ] criar variáveis com estilos que se repetem (cores, fontes)
- [ ] usar rem em vez de px

## Componentes

### `<app-box>`

- área centralizada que irá receber os componentes
- caixa estilizada que receberá outros componentes com funcionalidades

```css
.box__wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box__content {
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
}
```

## Upload

### `<app-dropzone>`

```css
.dropzone {
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
}

.dropzone--active {
  border-color: #78e5d5;
}

.dropzone--reject {
  border-color: #e57878;
}
```

Adicionar:

- [ ] Alterar cor da borda conforme tipo de arquivo
- [ ] Deixar input estilizado

### `<app-message>`

```css
.message {
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}

.message--success {
  color: #78e5d5;
}

.message--error {
  color: #e57878;
}
```

Adicionar:

- [ ] Alterar mensagem conforme sucesso ou erro

### `<app-file-list>`

- lista de arquivos estilizada
- dará o preview e o status dos arquivos de upload

```css
ul {
	 margin-top: 20px;
}
 ul li {
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 color: #444;
}
 ul li + li {
	 margin-top: 15px;
}
 
div {
	 display: flex;
	 align-items: center;
}
 div div {
	 display: flex;
	 flex-direction: column;
}
 div div span {
	 font-size: 12px;
	 color: #999;
	 margin-top: 5px;
}
 div div span button {
	 border: 0;
	 background: transparent;
	 color: #e57878;
	 margin-left: 5px;
	 cursor: pointer;
}
 
.preview {
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
}
```
