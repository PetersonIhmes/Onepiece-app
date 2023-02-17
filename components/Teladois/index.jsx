import React from 'react';
import { View, Text, Image } from 'react-native';

import fatos from '../../assets/Gifs/fatos.gif';
import bemvindo from '../../assets/bemvindo.png';
import estilo from './estilo.js';

const Teladois = () => (
	<View style={estilo.geral}>
	<Image  source={fatos} />
		<Text style={estilo.titu}>
	 Saiba quem é Luff
	</Text>
	
  <Text style={estilo.tex}>
  	Monkey D. Luffy, também conhecido como Luffy Chapéu de Palha ou Chapéu de Palha,é um pirata e o protagonista do anime e mangá One Piece. Ele é o fundador e o capitão do cada vez mais infame e poderoso Piratas do Chapéu de Palha, bem como um de seus principais lutadores.Seu sonho de vida é se tornar o Rei dos Piratas, encontrando o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.
  </Text>
  <Image style={estilo.luff} source={bemvindo} />
  </View>
  );
export default Teladois;