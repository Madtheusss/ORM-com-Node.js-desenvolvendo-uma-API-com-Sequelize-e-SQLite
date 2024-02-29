<b>sequelize <b/>db:migrate	Executa todas as migrações pendentes para atualizar o banco de dados
<b>sequelize <b/>db:migrate:schema:timestamps:add	Atualiza uma tabela de migração para ter marcação de data/hora
<b>sequelize <b/>db:migrate:status	Exibe o status de todas as migrações
<b>sequelize <b/>db:migrate:undo	Reverte a migração mais recente do banco de dados
<b>sequelize <b/>db:migrate:undo:all	Reverte todas as migrações executadas
<b>sequelize <b/>db:seed	Executa um seeder específico
<b>sequelize <b/>db:seed:undo	Deleta os últimos dados inseridos via seeds do banco de dados
<b>sequelize <b/>db:seed:all	Executa todos os seeders
<b>sequelize <b/>db:seed:undo:all	Deleta todos os dados inseridos via seeds do banco de dados
<b>sequelize <b/>db:create	Cria um banco com uma configuração específica
<b>sequelize <b/>db:drop	Exclui o banco de dados especificado na configuração
<b>sequelize <b/>init	Inicia um projeto
<b>sequelize <b/>init:config	Inicia as configurações
<b>sequelize <b/>init:migrations	Inicia as migrações
<b>sequelize <b/>init:models	Inicia os modelos
<b>sequelize <b/>init:seeders	Inicia os seeders
<b>sequelize <b/>migration:generate	Gera um novo arquivo de migração
<b>sequelize <b/>model:generate	Gera uma model e sua migração [alias: model:create]
<b>sequelize <b/>seed:generate	Gera um novo arquivo de seed



Para saber mais: MVC e outras arquiteturas
Nesta aula vamos usar o modelo MVC para construir a arquitetura necessária para nossa API. O MVC começou a ser desenvolvido nos anos 1970, assim como a linguagem SQL, e ambos estão em uso até hoje.

Desde sua criação, o MVC foi sendo adaptado para trabalhar com novos contextos, porém seus conceitos base continuam valendo:

O model faz a manipulação dos dados;
O controller age como intermediário entre o modelo e as camadas de visualização;
O view trata do output das informações.
O surgimento de novas tecnologias e novas necessidades levou (e tem levado) ao surgimento de diversos outros padrões. Porém, apesar de suas limitações, o MVC continua sendo largamente usado em desenvolvimento web e mesmo arquiteturas mais modernas utilizam models e controllers em contextos similares. Além disso, a maior parte das linguagens mais usadas no mercado possuem algum tipo de framework MVC, como Django (Python), Ruby on Rails (Ruby) e o Spring MVC (Java).

A premissa de separação de responsabilidades do MVC costuma ser um dos primeiros conceitos que aprendemos em arquitetura de software. É fundamental praticarmos e entendermos bem esta separação para conseguir identificá-la e aplicá-la ao aprendermos e praticarmos outros padrões de desenvolvimento. Por ser um padrão muito conhecido, o MVC pode ser utilizado em times de diversos níveis de experiência.

De forma geral, o MVC ainda é um padrão importante e pode ser utilizado como base para o desenvolvimento de aplicações escaláveis. Além disso, compreender os conceitos do MVC é de extrema importância ao adotarmos outras arquiteturas.

Vale lembrar que, como costumamos dizer na programação, “não existe bala de prata”. Certos tipos de aplicação podem se beneficiar do modelo MVC, inclusive pela familiaridade dos times com o padrão. Porém, certas soluções e requisitos de projeto vão exigir outras tecnologias e outros padrões.

O MVC no front-end
Embora ainda seja amplamente utilizado no desenvolvimento de APIs, a evolução do front-end e o desenvolvimento de bibliotecas e frameworks, como Angular, React e Vue, fez com que o uso do MVC no front-end tenha sido em grande parte substituído por outros padrões de arquitetura que respondem melhor às necessidades específicas do front-end, como a arquitetura baseada em componentes e os micro front-ends.