const prompt = require('prompt-sync')();

const hotel = [
  {
    id: 1,
    nome: 'Copacabana Palace',
    cidade: 'Rio de janeiro',
    quartosTotais: 100,
    quartosDisponiveis: 40,
  },
  {
    id: 2,
    nome: 'Hotel Mineiro',
    cidade: 'Belo Horizonte',
    quartosTotais: 80,
    quartosDisponiveis: 20,
  },
  {
    id: 3,
    nome: 'Brasília Resort Hotel',
    cidade: 'Brasília',
    quartosTotais: 70,
    quartosDisponiveis: 10,
  },
  {
    id: 4,
    nome: 'Barra Hotel',
    cidade: 'Rio de Janeiro',
    quartosTotais: 120,
    quartosDisponiveis: 10,
  },
];

let reservaHotel = [];
let sair;
let nome;
let cidade;
let quartosTotais;
let quartosDisponiveis;

function lowerCase(letra) {
  return letra
    .toLowerCase()
    .split(' ')
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
}

function addHotel(nome, cidade, quartosTotais, quartosDisponiveis) {
  const newHotel = {
    id: hotel.length + 1,
    nome: lowerCase(nome),
    cidade: lowerCase(cidade),
    quartosTotais: Number(quartosTotais),
    quartosDisponiveis: Number(quartosDisponiveis),
  };

  hotel.push(newHotel);

  console.log('Hotel adicionado com sucesso!');

  return hotel;
}

function buscaPorCidade(cidade) {
  const hoteisDisponiveis = hotel.filter((hotel) => {
    return hotel.cidade === cidade;
  });

  if (hoteisDisponiveis.length > 0) {
    console.log(`Hotéis encontrados ${cidade}:`);

    hoteisDisponiveis.forEach((hotel) => {
      console.log(`Id: ${hotel.id}`);
      console.log(`Nome: ${hotel.nome}`);
      console.log(`Quartos disponíveis: ${hotel.quartosDisponiveis}`);
    });
  } else {
    console.log(`Nenhum hotel encontrado em ${cidade}`);
  }
}

function reservarHotel(idHotel, nomeCliente) {
  const hotelReservado = hotel.find((hotel) => hotel.id === idHotel);

  if (!hotelReservado) {
    return 'hotel não encontrado';
  }

  if (hotelReservado.quartosDisponiveis > 0) {
    const idReserva = reservaHotel.length + 1;
    reservaHotel.push({
      idReserva: idReserva,
      idHotel: idHotel,
      nomeCliente: lowerCase(nomeCliente),
    });

    hotelReservado.quartosDisponiveis--;

    return 'Reserva feita!';
  } else {
    return 'Não há quartos disponíveis';
  }
}

function cancelarReserva(idReserva) {
  const cancelarReservaHotel = reservaHotel.findIndex(
    (res) => res.idReserva == idReserva
  );

  if (cancelarReservaHotel > -1) {
    const hotelReserva = hotel.find(
      (h) => h.id === reservaHotel[cancelarReservaHotel].idHotel
    );
    hotelReserva.quartosDisponiveis++;
    reservaHotel.splice(cancelarReservaHotel, 1);
    console.log('Reserva cancelada com sucesso!');
  } else {
    console.log('Reserva não encontrada');
  }
}

function listar() {
  if (reservaHotel.length > 0) {
    reservaHotel.forEach((reservaHotel) => {
      const reservado = hotel.find(
        (hotel) => hotel.id === reservaHotel.idHotel
      );

      if (reservado) {
        console.log(`Reserva ID: ${reservaHotel.idReserva}`);
        console.log(`Hotel: ${reservado.nome}`);
        console.log(`Cliente: ${reservaHotel.nomeCliente}`);
      } else {
        console.log('Não existem reservas em nosso sistema');
      }
    });
  } else {
    console.log('Nenhuma reserva encontrada em nosso sistema');
  }
}

function sistemaHotel() {
  let opcao;

  console.log('Sistema Hotéis:');
  console.log('1 - Cadastrar hotel');
  console.log('2 - Buscar hotel por cidade');
  console.log('3 - Fazer reserva');
  console.log('4 - Cancelar reserva');
  console.log('5 - Listar reservas');
  opcao = prompt('Digite o número da opção: ');

  switch (opcao) {
    case '1':
      nome = prompt('Digite o nome do hotel: ');
      cidade = prompt('Digite o nome da cidade: ');
      quartosTotais = parseInt(prompt('Digite a quantidade de quartos: '));
      quartosDisponiveis = parseInt(prompt('Digite a quantidade de quartos disponíveis: '));
      addHotel(nome, cidade, quartosTotais, quartosDisponiveis);
      break;
    case '2':
      cidade = prompt('Digite o nome da cidade: ');
      buscaPorCidade(lowerCase(cidade));
      break;
    case '3':
      const idHotelReserva = parseInt(prompt('Digite o ID do hotel: '));
      const clienteReserva = prompt('Digite o nome do cliente: ');
      reservarHotel(idHotelReserva, lowerCase(clienteReserva));
      break;
    case '4':
      id = prompt('Digite o ID da reserva: ');
      cancelarReserva(id);
      break;
    case '5':
        listar();
      break;
    default:
      console.log('Opção não encontrada');
  }
}

while (sair !== 'S') {
  sistemaHotel();

  sairSistema = prompt('Deseja sair do sistema? S/N: ').toUpperCase();
}

console.log(sistemaHotel())