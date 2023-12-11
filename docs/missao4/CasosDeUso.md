# Casos de uso 

## Diagrama dos casos de uso 

<p align="justify">&emsp;&emsp;Um diagrama de casos de uso é uma representação gráfica que descreve as interações entre um sistema e seus usuários. Nele, atores (usuários ou sistemas externos) são ligados a casos de uso (funcionalidades do sistema). Esses diagramas ajudam a compreender e documentar os requisitos funcionais do sistema, sendo úteis na comunicação entre desenvolvedores e stakeholders durante a análise de requisitos e abaixo é possivel visualizar o diagram realizado pela facção berserk.</p> 

![Image title](../assets/Usecasediagram.png)


## Especificação dos casos de uso 

## CDU-01 Reservar acomodações

| **Breve Descrição** | Permitir que os usuários encontrem e reservem acomodações e atividades de maneira eficiente sem complicações |
| :--------: | :--------: |
| **Requisitos Especiais** |
| Número | Descrição |
| 1 |O Sistema precisa vincular os sistemas de acomodações no software|
| 2 |O Sistema deve disponibilizar uma interface com sugestões especiais de cada usuário|
| 3 |O Sistema deve garantir a segurança e proteção de dados ao usuario realizar  uma transação|
| 4 |O Sistema deve fornecer um canal de comunicação direto entre o usuário e o anfitrião da hospedagem|
| **Fluxo Básico de Eventos** |
| Passo | Descrição |
| 1 | O usuário decide fazer a reserva da acomodação, no poeriodo desejado |
| 2 | O usuário procura de onde deseja ir |
| 3 | O usuário escolhe a acomodação|
| 4 | O sistema apresenta descrições e avaliação sobre o local escolhido|
| 5 | O usuário realiza a reserva|
| 6 | O usuário realiza o pagamento|
| **Fluxos Alternativos** |
| **FA1 Primeiro Fluxo Alternativo** |4b o usuário desiste da acomodação escolhida e procura outra|
| **Fluxos de Exceção** |
| Fluxo | Descrição |
| **FE1** | Não ter vagas na acomodação selecionada. Se a acomodação não tiver vagas, o sistema notifica o usuário. O sistema mostra as datas e períodos mais próximos nos quais a acomodação tem vagas. Após a realização da reserva, se ocorrer um erro na confirmação, o sistema gera uma mensagem para o usuário.|

| **Pré-Condições** |
| :--------:|
| O usuário realizou com sucesso o login na plataforma.|
| O usuário pesquisou as acomodações disponíveis| 
| O usuário deve estar logado no sistema|    
| **Pós-Condições** |
|Receber a noticação de confirmação da reserva|
|Conseguir visualizar a sua acomodação|
|Receber sugestões de atividades/itinerário|

## CDU-02 Reservar atividades

| **Breve Descrição** | Passeio turístico guiado, aulas de arte, culinária local |
| :--------: | :--------: |
| **Requisitos Especiais** |
| Número | Descrição |
| 1 |o Sistema precisa vincular os sistemas de  atividades no software|
| 2 |O Sistema deve diponibilizar uma interface com sugestões especiais de cada usuário|
| 3 |O sistema deve garantir a segurança e proteção de dados ao  usuario realizar  uma transação|
| 4 |O Sistema deve fornercer um canal de comunicação direto entre o usuário e os donos das atividades|
| **Fluxo Básico de Eventos** |
| Passo | Descrição |
| 1 | O usuário decide fazer a reserva da acomodação, no periodo desejado |
| 2 | O usuário procura de onde deseja ir |
| 3 | O usuário escolhe a atividade|
| 4 | O sistema apresenta descrições e avaliação sobre a atividade escolhida|
| 5 | O usuário realiza a reserva|
| 6 | O usuário realiza o pagamento|
| **Fluxos Alternativos** |
| **FA1 Primeiro Fluxo Alternativo** |2B o usuario seleciona uma atividade presente no seu local de destino|
| **Fluxos de Exceção** |
| Fluxo | Descrição |
| **FE1** | Não ter vagas na atividade selecionada. No passo 3 do fluxo básico, caso o usuário escolhe uma atividade que não possui mais vagas. Quando isso ocorre o sistema mostra a mensagem: "Essa atividade não possui mais vagas disponíveis " E o caso retorna no passo 3|
| **FE2** | Pagamento inválido. No passo 6 do fluxo básico, caso o usuário realize um pagamento que não é aceito. Quando isso ocorre o sistema mostra a mesagem " O pagamento não foi aceito" e retorna ao início do passo 5 do fluxo básico.|


| **Pré-Condições** |
| :--------:|
| O usuário deve estar logado no sistema|  
| **Pós-Condições** |
|Receber notificação de confirmação da reverva das atividades|
|Visualizar todas as atividades confirmadas e não confirmadas|
|Receber o cronograma das atividades|

## CDU-03 Reservar Itinerário

| **Breve Descrição** | Adicionar voos, alugar carros e outros planos de viagem |
| --- | --- |
| **Requisitos Especiais** |
| Número | Descrição |
| 1 |O Sistema precisa vincular os sistemas de  itinerário no software|
| 2 |O Sistema deve diponibilizar uma interface com sugestões especiais de cada usuário|
| 3 |O Sistema deve garantir a segurança e proteção de dados ao  usuario realizar  uma transação|
| 4 |O Sistema deve fornercer um canal de comunicação direto entre o usuário e os guiaas do itinerário|
| **Fluxo Básico de Eventos** | 
| Passo | Descrição |
| 1 | Realizar login na plataforma |
| 2 | Selecionar opção de adicionar voos |
| 3 | Selecionar Opções de alugar carro |
| 4 | Selecionar opção de planos de viagem |
| 5 | O usuário realiza a transação para efetuar o pagamento |
| **Fluxos Alternativos** |
| **FA1 Primeiro Fluxo Alternativo** |2B o usuario seleciona a opção de adicionar voo após reservar a acomodação/atividade|
| **FA2 Segundo Fluxo Alternativo** |3B o usuario seleciona a opção de alugar carro após reservar a acomodação/atividade|
| **FA3 Terceiro Fluxo Alternativo** |4B o usuario seleciona a opção de planos de viagem após reservar a acomodação/atividade|
| **Fluxos de Exceção** |
| Fluxo | Descrição |
| **FE1** | Realizar login com dados errados. No primeiro passo do fluxo básico, caso o usuário entre com dados inválidos. Quando isso ocorre o sistema mostra a mensagem: "Os dados de login não existem" E o caso continua no passo um do fluxo para realizar o login|
| **FE2** | O usuário selecionar a opção de planos de viagem fora do prazo da reserva da acomodação. No passo 2 do fluxo básico caso o usuário seleciona uma data para o voo fora da data reservada da acomodação Quando isso ocorre o sistema mostra a mensagem: "A data de voo não condiz com a data da reserva da acomodação". O sistema retorna para o passo de selecionar alguma opção do fluxo básico.|
| **FE3** | Selecionar o aluguel de um carro fora do prazo de reserva de acomodação. No passo 3 do fluxo básico o usuário seleciona uma data de aluguel fora da data reservada da acomodação. Quando isso ocorre o sistema mostra a mensagem: "A data do aluguel não condiz com a data da reserva da acomodação". O sistema retorna para o passo de selecionar alguma opção do fluxo básico.|
| **FE4** | Pagamento inválido. No passo 5 do fluxo básico, caso o usuário realize um pagamento que não é aceito. Quando isso ocorre o sistema mostra a mesagem " O pagamento não foi aceito" e retorna ao início do passo 5 do fluxo básico.|

| **Pré-Condições** |
| :--------:|
| O usuário deve estar logado no sistema|  
|O usuário deve ter realizado a reserva da acomodação e das atividades|
| **Pós-Condições** |
|Receber notificação de confirmação do itinerário|
|Receber as informações do intinerário|
