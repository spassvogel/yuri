import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const	imageBasePath = "resources/photos/";
const	images = [{
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7776.JPG",
				text: "Juriaan was my first Dutch friend, I met him in 2007 just after few days living and studying in the Netherlands. I was completely alone with 23years moving  to  a  different culture.  Since the first moment we became very close and he supported me on the process of adaptation. He shared  with my friends and all the people around me at the school . They all love him, My parents  met him and they were delighted by his open heart. After some years I got to understand that I was bless with an angel in Netherlands and it was him. He also introduce me to wonderful people which now are my friends  and I feel grateful about them. Tow  of his best friends are very important and special to me. Wouter and Marleen.. In 2012 I came back to my home country... but thousands of kilometers did not separate our souls because we always got in touch. We made skype calls some times of hours !  every time I came to NL we see each other. Before I came back home in 2012 we spent really nice time  in Amsterdam with my mother... it was awesome. My flight was very early and he was there helping me to Cary my luggage. It did not matter how early it was... He was just there. It's incredible that he was there even when my dad was in his process of dying of cancer and I was taking care of him. He skype with and my Dad and it was fun! With his positive energy I got stronger :)!!! Thanks God for him in my life. Thank you for Juriaan. Rest In Peace my Juri!"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7777.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7780.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7781.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7784.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7786.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7787.JPG"
			}, {
				author: "Derek & Gisele",
				thumb: "derek/Gisele Segura Gelink - Daan, Andrew, Sjaak Peter, Joost Derek, Jeroen, Jur - Bruiloft Giselle en Derek 26082015.jpg",
				text: "Daan, Andrew, Sjaak Peter, Joost Derek, Jeroen, Jur - Bruiloft Giselle en Derek"
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - 20161120_131457.jpg"
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - 20161122_192817.jpg",
				text: "Toen wij jong waren, tijdens de communie van mijn zusje Lianne (zij zit op de achtergrond). Links zit Juriaan, in het midden zit ik en rechts onze andere neef Mark. Onze oma kijkt van bovenaf toe wat zich op de bank afspeelt."
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - IMG_0502.JPG",
				text: "Het 25-jarig huwelijksfeest van mijn ouders, 8 jaar geleden. Juriaan zit rechts. "
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - IMG_6299.JPG",
				text: "Tijdens een Kerstbrunch met de familie 2 jaar geleden, waar we voor het eerst sinds lange tijd eindelijk weer eens bijna allemaal bij elkaar waren."
			}, {
				author: "Fleur Augustinus",
				thumb: "fleur/31241_429701871254_2516076_n.jpg",
				text: "31 mei 2010 gekraakte Asta\nJuri + wouter\nA long long time ago.... Speedy Contest - Jur won natuurlijk altijd. #NoBeard #memories"
			}, {
				author: "Hanneke Immink",
				thumb: "hanneke/IMG-20161121-WA0009.jpg",
				text: "Genomen door Hanneke tijdens het roeien in het voorjaar van 2016."
			}, {
				author: "Hanneke Immink",
				thumb: "hanneke/IMG-20161121-WA0010.jpg",
				text: "Genomen door Hanneke tijdens het roeien in het voorjaar van 2016."
			}, {
				author: "Hanneke Immink",
				thumb: "hanneke/IMG-20161121-WA0012.jpg",
				text: "Genomen door Hanneke tijdens het roeien in het voorjaar van 2016."
			}, {
				author: "Jasper Capel",
				thumb: "jasper/4892235372_d0f21a5cc1_o.jpg",
				text: "Deze foto's heb ik genomen op het Ozora festival in Hongarije in de zomer van 2009 of 2010. Ik kende hem vaag via Irfaan, en we zouden met zijn vieren in het hippie-busje van Ralph die kant op gaan. Irf kon uiteindelijk niet en ondanks dat we elkaar nog niet zo goed kenden, mocht ik tóch mee. Uiteindelijk hebben we een leuke vakantie gehad met een aantal prachtige tussenstops in de natuur. We zijn zelfs aan de kant gezet door de Duitse politie, omdat een hippie-busje met een Nederlands kenteken er natuurlijk erg verdacht uitziet."
			}, {
				author: "Jasper Capel",
				thumb: "jasper/jur2.jpg",
				text: "Deze foto's heb ik genomen op het Ozora festival in Hongarije in de zomer van 2009 of 2010. Ik kende hem vaag via Irfaan, en we zouden met zijn vieren in het hippie-busje van Ralph die kant op gaan. Irf kon uiteindelijk niet en ondanks dat we elkaar nog niet zo goed kenden, mocht ik tóch mee. Uiteindelijk hebben we een leuke vakantie gehad met een aantal prachtige tussenstops in de natuur. We zijn zelfs aan de kant gezet door de Duitse politie, omdat een hippie-busje met een Nederlands kenteken er natuurlijk erg verdacht uitziet."
			}, {
				author: "Jimi Hellinga",
				thumb: "jimi/Jimi Hellinga - _DSC0080.jpg",
				text: "Mijn foto's zijn gemaakt op een feestje bij Anorah thuis (?) in september 2008, iedereen was verkleed"
			}, {
				author: "Jimi Hellinga",
				thumb: "jimi/Jimi Hellinga - _DSC0082.jpg",
				text: "Mijn foto's zijn gemaakt op een feestje bij Anorah thuis (?) in september 2008, iedereen was verkleed"
			}, {
				author: "Johanna Pantazi",
				thumb: "johanna/meditating on a tramboline with Miranda_Group short Holiday September 2012.JPG",
				text: "Meditating on a tramboline with Miranda (group short Holiday September 2012)"
			}, {
				author: "Johanna Pantazi",
				thumb: "johanna/happy on the tramboline_Miranda and Monia.JPG",
				text: "Happy on the tramboline Miranda and Monia"
			}, {
				author: "Johanna Pantazi",
				thumb: "johanna/with friends surrounded (Ula in middle and Miranda left) during group short holiday in September 2012.jpg",
				text: "With friends surrounded (Ula in middle and Miranda left) during group short holiday in September 2012"
			}, {
				author: "Johanna Pantazi",
				thumb: "johanna/Yuriaan reaching for the sky on the tramboline.JPG",
				text: "Yuriaan reaching for the sky on the tramboline"
			}, {
				author: "Joost Bult",
				thumb: "joost/15193431_10153997830007371_6685238162159700434_n.jpg",
				text: "Yuriaan Smiley, amigo, I've been travelling again, a beautiful place, you would love it. Nature, mountains, sun, lovely people and great food. You are here with me.\nI tear up when I see all the beautiful stories people share about you. I want to thank you Yuri, for all the magic you brought. I was a bit of a lost cat when I met you and the others from Leidschendam. You were one of my friends that helped me out of my shell, you showed me so much love, freedom and openness. I still can't believe we shared a bed for three months in India. Bang Bang Bangalore!\nI miss you. I feel you. Your energy runs thru me.\nI'll see you on the flipside.\nMuch love hermano"
			}, {
				author: "Joyce Hooijmans",
				thumb: "joyce/Joyce  Hooijmans  - IMG_2947.JPG"
			}, {
				author: "Joyce Hooijmans",
				thumb: "joyce/Joyce  Hooijmans  - IMG_2948.JPG"
			}, {
				author: "Karla Evelyn da Silva",
				thumb: "karla/Karla Evelyn da Silva - FB_IMG_1479771945919.jpg",
				text: "My name is Karla , I 'm from Brazil Curitiba ... I took this pic in 2010 I guess in August at the Amsterdan Port for visit my boyfriend there now is my husband He's work in the Cruise ships lines I was pregnant ...in this pic only with 5 months. Yuriaan Smiley coming to take me in the airport . But the first time I see him we was inside the laundry Shop in Curitiba Pr Brazil I guess in 2002/3 I saw that the cashier cannot understand what he try to speak with her and I help him with translate. The second time I guess in 2006/7 in Verona Italy at Colleseum he was going to Roma but He's change the way for visit me there. This pic is the last time ... my son now have 5 years old ... and after this pic for long 6 years he doenst write anymore. .. but 1 month ago he wrote by Facebook ibox and ask me about my family. ... this message for me is like a godbye. .. Adeus meu amigo ! ( godbye my friend)"
			}, {
				author: "Leonie Molhoek",
				thumb: "leonie/PICT1036.JPG",
				text: "Van ons een foto uit Bolivia. Op 1 mei 2005 kwamen wij vanuit de zoutvlaktes aan in het stadje Uyuni. Daar bleek Juriaan ook te zijn. Op een soort schoolplein vol locals die de feestdag vierden, dronken we wat biertjes. Juriaan had twee vrienden bij zich en ze droegen alle drie een overal. Deze hadden ze speciaal aangeschaft omdat ze later op de avond dynamiet gingen afsteken in de woestijn... "
			}, {
				author: "Leonie Molhoek",
				thumb: "leonie/PICT1037.JPG",
				text: "Juriaan met zijn reisgenoten, van wie we de namen niet meer weten. "
			}, {
				author: "Lisa Dalhuisen",
				thumb: "lisa/IMG_4698.JPG"
			}, {
				author: "Lisa Dalhuisen",
				thumb: "lisa/IMG_4701.JPG",
				text: "Gemaakt op 3 juli 2010 rond het Haagse Bos. De andere mensen op de foto's zijn Andrei van der Spek, Ben Shamier en Wouter. "
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3033132.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3043158.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3093315.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3173472.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3173588.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3223907.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3233938.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3233972.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3244078.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3244112.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3264180.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3274327.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P3294371.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P4054531.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P5155717.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Lot Wagener",
				thumb: "lot/P5185740.JPG",
				text: "Uit india met Joost"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Berlijn Interrailen 2008 2.JPG",
				text: "Berlijn Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Berlijn Interrailen 2008 3.JPG",
				text: "Berlijn Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Berlijn Interrailen 2008 4.JPG",
				text: "Berlijn Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Berlijn Interrailen 2008 1.JPG",
				text: "Berlijn Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Cris Liebing Club WATT okt 2008.JPG",
				text: "Cris Liebing Club WATT okt 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Danceparade Rotterdam 2008.JPG",
				text: "Danceparade Rotterdam 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - enschede november 2008.JPG",
				text: "Enschede november 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Hongarije Interrailen 2008.JPG",
				text: "Hongarije Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Hongarije Interrailen 2008 1.JPG",
				text: "Hongarije Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Hongarije Interrailen 2008 2.JPG",
				text: "Hongarije Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - housewarming meere 2008.jpg",
				text: "Housewarming meere 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - MindFuckMonday Festival mei 2008.jpeg",
				text: "MindFuckMonday Festival mei 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Pohoda Festival 2008.JPG",
				text: "Pohoda Festival 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Pohoda Festival Air bar 2008.JPG",
				text: "Pohoda Festival 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Praag Interrailen 2008.JPG",
				text: "Praag Interrailen 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Ruigoord 29 maart 08.JPG",
				text: "Ruigoord 29 maart 08"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Scheveningen met Eduad mei 2008.JPG",
				text: "Scheveningen met Eduad mei 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Het Pageshuis - Thuis-Strijkijzer juni 2008.JPG",
				text: "Thuis strijkijzer 2008"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Marlies Westra - IMG_6589.JPG"
			}, {
				author: "Marlies Westra",
				thumb: "marlies/Marlies Westra - IMG_6593.JPG"
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/1. Jopen Merijn & Jur.JPG",
				text: "Foto van mij en Juriaan in 2012 in de Jopenkerk in Haarlem."
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/2. nutshell festival 2006 002.jpg",
				text: "Het eerste fotomateriaal wat ik dan ook heb is uit 2006 toen ik heb helpen meeorganiseren samen met Ralph, Irfaan, Yorrit en Juriaan met een klein 'festival' in de tuin van het huis in Nootdorp voor onze vrienden. We noemde het het Nutshell Festival. "
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/2. nutshell festival 2006 023.jpg",
				text: "Het eerste fotomateriaal wat ik dan ook heb is uit 2006 toen ik heb helpen meeorganiseren samen met Ralph, Irfaan, Yorrit en Juriaan met een klein 'festival' in de tuin van het huis in Nootdorp voor onze vrienden. We noemde het het Nutshell Festival. "
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/2. nutshell festival 2006 046.jpg",
				text: "Het eerste fotomateriaal wat ik dan ook heb is uit 2006 toen ik heb helpen meeorganiseren samen met Ralph, Irfaan, Yorrit en Juriaan met een klein 'festival' in de tuin van het huis in Nootdorp voor onze vrienden. We noemde het het Nutshell Festival. "
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/2. nutshell festival 2006 080.jpg",
				text: "Het eerste fotomateriaal wat ik dan ook heb is uit 2006 toen ik heb helpen meeorganiseren samen met Ralph, Irfaan, Yorrit en Juriaan met een klein 'festival' in de tuin van het huis in Nootdorp voor onze vrienden. We noemde het het Nutshell Festival. "
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/2. nutshell festival 2006 109.jpg",
				text: "Het eerste fotomateriaal wat ik dan ook heb is uit 2006 toen ik heb helpen meeorganiseren samen met Ralph, Irfaan, Yorrit en Juriaan met een klein 'festival' in de tuin van het huis in Nootdorp voor onze vrienden. We noemde het het Nutshell Festival. "
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/2. nutshell festival 2006 114.jpg",
				text: "Het eerste fotomateriaal wat ik dan ook heb is uit 2006 toen ik heb helpen meeorganiseren samen met Ralph, Irfaan, Yorrit en Juriaan met een klein 'festival' in de tuin van het huis in Nootdorp voor onze vrienden. We noemde het het Nutshell Festival. "
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/2. nutshell festival 2006 148.jpg",
				text: "Het eerste fotomateriaal wat ik dan ook heb is uit 2006 toen ik heb helpen meeorganiseren samen met Ralph, Irfaan, Yorrit en Juriaan met een klein 'festival' in de tuin van het huis in Nootdorp voor onze vrienden. We noemde het het Nutshell Festival. "
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/4. Bij Filiz.jpg",
				text: "Bij Filiz (gezamelijk vriendin en ex van Ralph) op de boerderij was."
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/4. Bij Filiz 2.jpg",
				text: "Bij Filiz (gezamelijk vriendin en ex van Ralph) op de boerderij was."
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/5. Mindfuck Monday 1.jpg",
				text: "We kwamen graag naar Den Haag voor de Mindfuck Monday avonden die Juriaan organiseerde"
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/5. Mindfuck Monday 2.jpg",
				text: "We kwamen graag naar Den Haag voor de Mindfuck Monday avonden die Juriaan organiseerde"
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/6. Onmiversum 1.JPG",
				text: "Om een winter-middag naar het Omniversum te gaan"
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/6. Omniversum 2.JPG",
				text: "Om een winter-middag naar het Omniversum te gaan"
			}, {
				author: "Merijn Hoogenstrijd",
				thumb: "merijn/7. Jopen Rebecca & Jur.JPG",
				text: "De laatste keer dat ik hij eventjes in Haarlem langskwam bij mij en mijn ex was in januari 2012 voor een biertje met ons bij de Jopen Brouwerij in Haarlem "
			}, {
				author: "Noortje Weenink",
				thumb: "noortje/DSCF0243.JPG",
				text: "Ik kende Juriaan eigenlijk alleen van de ene week Berlijn bij Maarten, een die week heeft altijd een speciaal plekje in mijn hart gehouden. (Vrijwel) niemand kende elkaar, maar ik had het gevoel dat we allemaal al jaren vrienden waren. "
			}, {
				author: "Noortje Weenink",
				thumb: "noortje/DSCF0258.JPG",
				text: "De zeer discutabele foto's vatten de week vol  rare capriolen en het onveilig maken van de Berlijnse metro wel samen denk ik zo. :) En Juriaan, manman, hij was echt zo'n persoon die de wereld een beetje beter achter heeft gelaten. Iemand om tegen op te kijken, van te leren en plezier mee te hebben. Allemaal in één."
			}, {
				author: "Patricia Villamor",
				thumb: "patricia/15127585_10210613625474084_1006786175_o.jpg",
				text: "At a sound system in roterdam this summer (2016)"
			}, {
				author: "Patricia Villamor",
				thumb: "patricia/15233597_10210613621833993_490546203_o.jpg",
				text: "At a sound system in roterdam this summer (2016)"
			}, {
				author: "Roman Stein",
				thumb: "roman/0425.jpg",
				text: "Me and my sister met Juri the first time in San Martin de los Andes in Argentina, where we did together a trek for a couple of days. We had some trouble to find the way and nearly got lost. If i would have done this trekking only with my sister, we would have had a dispute the whole time. With Juri the situation was more peaceful. (2004)"
			}, {
				author: "Roman Stein",
				thumb: "roman/0438.jpg",
				text: "Me and my sister met Juri the first time in San Martin de los Andes in Argentina, where we did together a trek for a couple of days. We had some trouble to find the way and nearly got lost. If i would have done this trekking only with my sister, we would have had a dispute the whole time. With Juri the situation was more peaceful. (2004)"
			}, {
				author: "Roman Stein",
				thumb: "roman/0455.jpg",
				text: "Me and my sister met Juri the first time in San Martin de los Andes in Argentina, where we did together a trek for a couple of days. We had some trouble to find the way and nearly got lost. If i would have done this trekking only with my sister, we would have had a dispute the whole time. With Juri the situation was more peaceful. (2004)"
			}, {
				author: "Roman Stein",
				thumb: "roman/0471.jpg",
				text: "Me and my sister met Juri the first time in San Martin de los Andes in Argentina, where we did together a trek for a couple of days. We had some trouble to find the way and nearly got lost. If i would have done this trekking only with my sister, we would have had a dispute the whole time. With Juri the situation was more peaceful. (2004)"
			}, {
				author: "Roman Stein",
				thumb: "roman/20151229_225944.jpg",
				text: " Last year at Christmas Juri visited me and stayed at my house for one week. I was very grateful that he visited me, because i had a very hard year. We had some nice days together and a lot of fun. The picture shows Juri with a friend of mine in a bar in Munich. (2015)"

			}];

ReactDOM.render(
  <App imageBasePath={imageBasePath} images={images} />,
  document.getElementById('root')
);
