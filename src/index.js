import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const	photoBasePath = "resources/photos/";
const	photos = [{
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7776.JPG"
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
			}];

ReactDOM.render(
  <App photoBasePath={photoBasePath} photos={photos}/>,
  document.getElementById('root')
);
