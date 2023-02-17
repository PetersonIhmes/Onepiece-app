import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo.js';
import fruto from '../../assets/fruto.png';
import furia from '../../assets/Gifs/furia.gif';

const Telatres = () => (
	
<View style={estilo.geral}>
	<Text style={estilo.titu}> Porque Luff tem PODER?</Text>
	
	<Image style={estilo.image} source={fruto} />
<Text style={estilo.tex}> Nascido na Vila Foosha, Luffy acidentalmente comeu a Gomu Gomu no Mi aos 7 anos de idade, que deu ao seu corpo propriedades de borracha. Nesta época, Luffy conheceu Shanks, "o Ruivo", que lhe deu seu chapéu de palha como parte de uma promessa para que eles se encontrassem novamente. Luffy é o filho do líder Revolucionário Monkey D. Dragon, neto paterno do herói da Marinha Monkey D. Garp, irmão jurado do falecido "Punhos de Fogo" Portgas D. Ace e do chefe de gabinete Revolucionário Sabo, e filho adotivo de Curly Dadan. Ele é uma das poucas pessoas no mundo que carregam a Vontade de D.
  </Text>
  <Image style={estilo.furia} source={furia} />
</View>
);
export default Telatres;