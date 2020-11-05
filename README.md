# Voluntime
![Header with screenshots](https://i.imgur.com/9cUSlvl.jpeg)

## Sobre este projeto
Voluntime é um *web app* que tem como principal missão facilitar o contato, busca e acesso a ongs para quem deseja se voluntariar e também facilita essas ongs de recrutar voluntários. Todos saem ganhando!

## Porque?
A ideia surgiu diante de uma proposta de criar um aplicativo com fins ativistas. Então me veio a mente um problema que encontrei quando tive vontade de me voluntariar, que foi esse contato e principalmente a procura de ONGs perto de mim.

## Observações
1. **As ONGs** listadas na API do projeto **são reais**, porém as informações de **local** e **distância** **não**.
2. Esse projeto, apesar de ter sido criado usando o ReactJS (para web) foi **projetado para ser usado apenas em dispositivos movéis**. Optei por essa abordagem pois precisava entregar esse projeto rapidamente e, na época, tinha mais facilidade com o ReactJS ao invés do React Native.

## Como rodar localmente
*É recomendando utilizar o Yarn como package manager para evitar bugs.*

1- Instale as depêndencias.

    yarn

2 - Mude a URL da API para a sua URL em:

>src/configs/configs.js

3 - Rode o comando padrão para iniciar

    yarn start

Para mais informações sobre como utilizar e configurar a API do projeto no seu local de desenvolvimento, acesse este repositório -> [VoluntimeAPI](https://github.com/lzfelipe/VoluntimeAPI)

## Funcionalidades

 - Registro e Login

- Filtros
	- Busca de ONGs por nome
	- Filtro de ONGs por horário, distância e causa

- Perfil
	- Ver foto, nome e email
	- Ver causas que apoiou através de insígnias (com descrição no hover)
	- Acompanhar as etapas de seleção:
		- Solicitação enviada
		- Solicitação aceita
		- Trabalho em andamento (com opção para cancelar)
- Página de ongs (*para usuários*)
	- Descrição com texto
	- 'mini' carrossel com fotos
	- Mapa apontando o local com endereço e marcador centralizado
- Candidatar-se
	- Enviar uma aplicação para se voluntariar em uma ONG, com upload de imagens(Foto do RG frente e verso)

- Página de ongs (*para ONGs*)
	- Login
	- Verificar uma aplicação de um usuário contendo:
		- Foto do RG (Frente e verso)
		 - CPF
		- Hora escolhida
	- Recusar ou aceitar a aplicação do voluntário
	- Marcar trabalho como concluido ou não concluido.

## Demos
![Lista de ongs](https://imgur.com/nc6xR6z.gif) ![Filtros](https://i.imgur.com/XzHdKd9.gif) 




## Ferramentas/Frameworks/Libs/Addons
- [ReactJS](https://pt-br.reactjs.org/) - Construção do web app.
- [framer-motion](https://github.com/framer/motion) - Animação de transição das páginas.
- [react-loading-components](https://github.com/safeimuslim/react-loading-components) - Componentes de loading.
- [react-modal](https://github.com/reactjs/react-modal) - Modais de avisos utilizados na landing page.
- [react-tooltip](https://github.com/wwayne/react-tooltip) - Descrição das insígnias.
- [styled-components](https://github.com/styled-components/styled-components) - Construção de componentes padronizados para reutilização.
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Construção das rotas sem efeitos de *reload* da página 
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet) / [leaflet.js](https://leafletjs.com/) - Mapas mostrando localização das ONGs.
- [react-device-detect](https://github.com/duskload/react-device-detect) - Para disponibilizar a visualização somente em dispositivos móveis e navegadores compatíveis.
