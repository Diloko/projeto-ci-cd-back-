# Projeto CI/CD - Exemplo

## Objetivo
Demonstrar integração entre GitHub, Render e Vercel com deploy automatizado via GitHub Actions.

## Fluxo de Deploy
1. Push de nova tag `v1.0.0` → GitHub Actions → Render.
2. Render realiza build e publica API.
3. Front na Vercel consome automaticamente a API atualizada.

## URLs
- Front-end: http://projeto-ci-cd-front-phi.vercel.app/
- Back-end: https://projeto-ci-cd-back-95ov.onrender.com/
