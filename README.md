Projeto CI/CD – Backend + Frontend

-Objetivo
Este projeto demonstra uma pipeline de Integração Contínua (CI) e Entrega Contínua (CD) utilizando GitHub Actions, Render e Vercel. A ideia é automatizar o processo de deploy: sempre que uma nova versão é marcada com uma tag semântica, o backend é atualizado no Render e o frontend consome automaticamente a API publicada.


-Tecnologias Utilizadas
Node.js + Express → Backend da aplicação

Docker → Containerização do backend

GitHub Actions → Automação do fluxo de CI/CD

Render → Hospedagem e deploy do backend

Vercel → Hospedagem e deploy do frontend


-Fluxo de Deploy
Criação de uma nova tag semântica no GitHub (vX.Y.Z).

O GitHub Actions dispara o workflow release.yml.

O workflow chama o Deploy Hook do Render.

O Render realiza o build da imagem Docker e publica a API.

O frontend hospedado na Vercel consome automaticamente a versão mais recente da API.


-URLs do Projeto
Frontend: projeto-ci-cd-front-phi.vercel.app

Backend: projeto-ci-cd-back-95ov.onrender.com