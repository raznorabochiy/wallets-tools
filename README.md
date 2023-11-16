# Wallets Tools 💎

<p align="center">
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Gem%20Stone.webp" width="200" />
</p>

## Установка

```
npm install
```

## Запуск

### Сид-фразы

`npm run generate:seeds 100` — генерирует N seed-фраз (в данном примере 100) и
записывает их в файл seeds.txt

### EVM

`npm run seeds:evm:addresses` — выводит EVM-адреса из seed-фраз хранящихся в
файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:evm:privates` — выводит EVM-приватники из seed-фраз хранящихся в
файле seeds.txt и записывает их в файл privates.txt

`npm run privates:evm:addresses` — выводит EVM-адреса из EVM-приватников
хранящихся в файле privates.txt и записывает их в файл addresses.txt

### Aptos

`npm run seeds:aptos:addresses` — выводит Aptos-адреса из seed-фраз хранящихся в
файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:aptos:privates` — выводит Aptos-приватники из seed-фраз
хранящихся в файле seeds.txt и записывает их в файл privates.txt

`npm run privates:aptos:addresses` — выводит Aptos-адреса из Aptos-приватников
хранящихся в файле privates.txt и записывает их в файл addresses.txt

### SUI

`npm run seeds:sui:addresses` — выводит SUI-адреса из seed-фраз хранящихся в
файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:sui:privates` — выводит SUI-приватники из seed-фраз хранящихся в
файле seeds.txt и записывает их в файл privates.txt

`npm run privates:sui:addresses` — выводит SUI-адреса из SUI-приватников
хранящихся в файле privates.txt и записывает их в файл addresses.txt

### StarkNet (Argent X)

`npm run seeds:starknet:argent:addresses` — выводит Argent-адреса (Cairo 1.0) из
seed-фраз хранящихся в файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:starknet:argent:addresses v0` — выводит Argent-адреса (Cairo 0)
из seed-фраз хранящихся в файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:starknet:argent:privates` — выводит Argent-приватники из
seed-фраз хранящихся в файле seeds.txt и записывает их в файл privates.txt

`npm run privates:starknet:argent:addresses` — выводит Argent-адреса (Cairo 1.0)
из Argent-приватников хранящихся в файле privates.txt и записывает их в файл
addresses.txt

`npm run privates:starknet:argent:addresses v0` — выводит Argent-адреса
(Cairo 0) из Argent-приватников хранящихся в файле privates.txt и записывает их
в файл addresses.txt

### StarkNet (Braavos)

`npm run seeds:starknet:braavos:addresses` — выводит Braavos-адреса из seed-фраз
хранящихся в файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:starknet:braavos:privates` — выводит Braavos-приватники из
seed-фраз хранящихся в файле seeds.txt и записывает их в файл privates.txt

`npm run privates:starknet:braavos:addresses` — выводит Braavos-адреса из
Braavos-приватников хранящихся в файле privates.txt и записывает их в файл
addresses.txt

### Aleo

`npm run seeds:aleo:addresses` — выводит Aleo-адреса из seed-фраз хранящихся в
файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:aleo:privates` — выводит Aleo-приватники из seed-фраз хранящихся
в файле seeds.txt и записывает их в файл privates.txt

`npm run privates:aleo:addresses` — выводит Aleo-адреса из Aleo-приватников
хранящихся в файле privates.txt и записывает их в файл addresses.txt

### Solana

`npm run seeds:solana:addresses` — выводит Solana-адреса из seed-фраз хранящихся
в файле seeds.txt и записывает их в файл addresses.txt

`npm run seeds:solana:privates` — выводит Solana-приватники из seed-фраз
хранящихся в файле seeds.txt и записывает их в файл privates.txt

`npm run privates:solana:addresses` — выводит Solana-адреса из
Solana-приватников хранящихся в файле privates.txt и записывает их в файл
addresses.txt

### Другое

`npm run shuffle privates.txt` — перемешивает строки в текстовом файле (в данном
примере privates.txt) и записывает их в файл privates.shuffled.txt

`npm run group privates.shuffled.txt 9` — группирует строки в текстовом файле (в
данном примере privates.shuffled.txt, группы по 9 строк) и записывает их в файл
privates.shuffled.grouped.txt

---

Анонсы и статьи: https://t.me/raznorabochiy_notes

Вопросы и обсуждения: https://t.me/raznorabochiy_chat

---

**Поблагодарить автора можно отправив донат в любой evm сети на:**

`0xE8eAbec7CE9e8Bf78A766E8556E542BC2C9446ae`

или

raznorabochiy.eth

raznorabochiy.arb

raznorabochiy.bnb
