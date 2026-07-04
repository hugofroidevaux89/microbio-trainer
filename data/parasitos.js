/* Datos del módulo: Parásitos — fuente: PARASITOS.pdf */
window.MODULE = {
  title: 'Parásitos',
  source: 'PARASITOS.pdf',
  storageKey: 'parasitos',
  categoryColors: {
    protozoo: { label: 'Protozoarios', color: '#e0568e' },
    plano: { label: 'Gusanos planos (Cestodes/Trematodes)', color: '#a97ce0' },
    cilindrico: { label: 'Gusanos cilíndricos (Nematodes)', color: '#d8a53d' }
  },
  cards: [
    // --- Generalidades ---
    {
      id: 'p0', grupo: 'Protozoarios', org: 'Generalidades', cat: 'Características', tincion: 'protozoo',
      q: '¿Qué son los protozoarios y cuáles son sus dos estadios evolutivos principales?',
      a: 'Son organismos eucariotas unicelulares. Sus estadios evolutivos son el trofozoíto (forma metabólicamente activa) y el quiste (forma de resistencia).'
    },

    // --- Trichomonas vaginalis ---
    {
      id: 'p1', grupo: 'Protozoarios vaginales', org: 'Trichomonas vaginalis', cat: 'Características', tincion: 'protozoo',
      q: '¿Qué características morfológicas tiene Trichomonas vaginalis y qué la distingue de otros protozoarios?',
      a: 'Es flagelado, de forma esferoidal; NO forma quistes, siempre se encuentra como trofozoíto.'
    },
    {
      id: 'p2', grupo: 'Protozoarios vaginales', org: 'Trichomonas vaginalis', cat: 'Transmisión', tincion: 'protozoo',
      q: '¿Cómo se transmite Trichomonas vaginalis y qué factores favorecen su desarrollo en la mujer?',
      a: 'Por contacto directo entre personas (es una ITS). En la mujer influyen la cantidad de lactobacilos, el glucógeno, un pH vaginal más alcalino de lo normal y el nivel de estrógenos.'
    },
    {
      id: 'p3', grupo: 'Protozoarios vaginales', org: 'Trichomonas vaginalis', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se presenta la tricomoniasis en la mujer?',
      a: 'Vaginitis y cervicitis exudativa con molestia y prurito; flujo vaginal purulento amarillento, espumoso, maloliente, de pH elevado (5-7); edema vulvar, dolor abdominal, eritema, ardor, irritación, polaquiuria y disuria. Puede causar cistitis y fiebre.'
    },
    {
      id: 'p4', grupo: 'Protozoarios vaginales', org: 'Trichomonas vaginalis', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se presenta la tricomoniasis en el hombre y qué complicaciones puede tener si no se trata?',
      a: 'Uretritis con secreción serosa o purulenta, prurito en el glande, edema prepucial, erección dolorosa, eyaculación precoz, ardor miccional, disuria y nicturia. Sin tratamiento puede evolucionar a prostatitis y balanopostitis.'
    },
    {
      id: 'p5', grupo: 'Protozoarios vaginales', org: 'Trichomonas vaginalis', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la tricomoniasis?',
      a: 'Examen parasitológico en fresco, tinción de Gram (es gram negativa) o Giemsa, cultivo, inmunodiagnóstico y PCR; en la mujer se toma exudado del fondo de saco vaginal, en el hombre orina del primer chorro matinal.'
    },

    // --- Giardia ---
    {
      id: 'p6', grupo: 'Protozoarios intestinales', org: 'Giardia lamblia', cat: 'Características', tincion: 'protozoo',
      q: '¿Cómo son el trofozoíto y el quiste de Giardia lamblia?',
      a: 'El trofozoíto es piriforme, con 2 núcleos y 4 pares de flagelos (forma activa); el quiste es ovalado con 2 a 4 núcleos (forma resistente e infectiva). Ambas formas se eliminan por heces.'
    },
    {
      id: 'p7', grupo: 'Protozoarios intestinales', org: 'Giardia lamblia', cat: 'Patogenia', tincion: 'protozoo',
      q: '¿Por qué mecanismos Giardia lamblia produce esteatorrea sin invadir la mucosa intestinal?',
      a: 'Se localiza sobre las microvellosidades del intestino delgado, disminuye la actividad de enzimas pancreáticas, genera deficiencia de disacaridasas, libera prostaglandinas, consume lípidos biliares (impidiendo su emulsión) y altera la barrera de moco.'
    },
    {
      id: 'p8', grupo: 'Protozoarios intestinales', org: 'Giardia lamblia', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo son las deposiciones típicas de la giardiasis y qué particularidad tiene en la infancia?',
      a: 'Deposiciones líquidas con moco, malolientes, hipocólicas, de aspecto graso y lientéricas (con alimentos sin digerir), acompañadas de decaimiento, distensión, flatulencias y anorexia. En la infancia NO es autolimitada, sino que se vuelve crónica.'
    },
    {
      id: 'p9', grupo: 'Protozoarios intestinales', org: 'Giardia lamblia', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la giardiasis?',
      a: 'Examen microscópico de las heces.'
    },

    // --- Entamoeba histolytica ---
    {
      id: 'p10', grupo: 'Protozoarios intestinales', org: 'Entamoeba histolytica', cat: 'Características', tincion: 'protozoo',
      q: '¿Qué hallazgo microscópico distintivo tiene el trofozoíto de Entamoeba histolytica?',
      a: 'Presenta hematíes fagocitados en su citoplasma; los quistes son esferoidales con pared refringente.'
    },
    {
      id: 'p11', grupo: 'Protozoarios intestinales', org: 'Entamoeba histolytica', cat: 'Transmisión', tincion: 'protozoo',
      q: '¿Cómo se transmite Entamoeba histolytica?',
      a: 'Vía fecal-oral, y también es una ETS (por sexo oral-anal); es más frecuente en climas tropicales, con el hombre como único hospedador.'
    },
    {
      id: 'p12', grupo: 'Protozoarios intestinales', org: 'Entamoeba histolytica', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Qué produce Entamoeba histolytica al invadir la mucosa del intestino grueso y a qué otro órgano puede llegar?',
      a: 'Diarrea y necrosis de la pared intestinal, con disentería, dolor abdominal, náuseas, vómitos, úlceras y necrosis. Puede alcanzar el hígado por vía portal y producir abscesos hepáticos.'
    },
    {
      id: 'p13', grupo: 'Protozoarios intestinales', org: 'Entamoeba histolytica', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la amebiasis?',
      a: 'Examen microscópico de heces y pruebas serológicas.'
    },

    // --- Cryptosporidium ---
    {
      id: 'p14', grupo: 'Protozoarios intestinales', org: 'Cryptosporidium hominis / parvum', cat: 'Características', tincion: 'protozoo',
      q: '¿A qué grupo pertenece Cryptosporidium, qué tipo de ciclo tiene y qué característica tintorial tienen sus ooquistes?',
      a: 'Es un Apicomplexa de ciclo monoxeno; el ooquiste (forma infectante, con 4 esporozoítos) es resistente a agentes físicos y químicos y se comporta como BAAR (ácido-alcohol resistente).'
    },
    {
      id: 'p15', grupo: 'Protozoarios intestinales', org: 'Cryptosporidium hominis / parvum', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se presenta la criptosporidiosis en inmunocompetentes y en inmunodeprimidos?',
      a: 'En inmunocompetentes: diarrea acuosa benigna y autolimitada, heces malolientes, amarillentas, espumosas, lientéricas, con náuseas, vómitos y dolor abdominal. En inmunodeprimidos: enteritis grave con deshidratación potencialmente mortal.'
    },
    {
      id: 'p16', grupo: 'Protozoarios intestinales', org: 'Cryptosporidium hominis / parvum', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica Cryptosporidium?',
      a: 'Observación en fresco, tinción de Ziehl-Neelsen modificada o tinción de Kinyoun, e inmunofluorescencia indirecta (IFI).'
    },

    // --- Balantidium coli ---
    {
      id: 'p17', grupo: 'Protozoarios intestinales', org: 'Balantidium coli', cat: 'Características', tincion: 'protozoo',
      q: '¿Qué tipo de protozoario es Balantidium coli y cuál es su reservorio principal?',
      a: 'Es un ciliado de gran tamaño, de ciclo monoxeno, que se transmite por quistes; su reservorio es el cerdo, en zonas rurales tropicales.'
    },
    {
      id: 'p18', grupo: 'Protozoarios intestinales', org: 'Balantidium coli', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Qué formas clínicas puede producir Balantidium coli, desde la asintomática hasta la crónica?',
      a: 'Desde asintomática hasta colitis aguda o disentería balantidiana (diarrea leve a profusa, pujo, tenesmo, dolor cólico, fiebre, deshidratación); la forma crónica se manifiesta con anorexia, pérdida de peso, anemia y episodios alternados de diarrea y constipación.'
    },

    // --- Isospora belli ---
    {
      id: 'p19', grupo: 'Protozoarios intestinales', org: 'Isospora belli', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cuál es el cuadro clínico de la isosporosis y a qué se asocia?',
      a: 'Se asocia a la diarrea del viajero. A los 7 días de la infección aparece un síndrome febril (2-3 días) seguido de enteritis benigna con diarrea aguda (6-10 deposiciones diarias), heces lientéricas y esteatorreicas sin sangre; en inmunodeprimidos puede ser grave y hasta mortal.'
    },

    // --- Cyclospora cayetanensis ---
    {
      id: 'p20', grupo: 'Protozoarios intestinales', org: 'Cyclospora cayetanensis', cat: 'Características', tincion: 'protozoo',
      q: '¿Dónde es endémica la ciclosporidiosis y con qué se asocia epidemiológicamente?',
      a: 'Es endémica en Haití, Nepal y Perú, y se asocia a las estaciones lluviosas; el agua no tratada es la fuente de infección más importante. Sus ooquistes sobreviven incluso a aguas cloradas.'
    },
    {
      id: 'p21', grupo: 'Protozoarios intestinales', org: 'Cyclospora cayetanensis', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cuál es el cuadro clínico de la ciclosporidiosis?',
      a: 'Malestar general, fiebre moderada (1-11 días) seguida de diarrea acuosa explosiva y voluminosa (7 deposiciones diarias) que dura entre 43 y 57 días en inmunocompetentes (hasta 120 días en inmunosuprimidos), generalmente autolimitada.'
    },

    // --- Leishmania ---
    {
      id: 'p22', grupo: 'Protozoarios hemáticos y tisulares', org: 'Leishmania', cat: 'Características', tincion: 'protozoo',
      q: '¿Cuáles son las 4 formas evolutivas de Leishmania?',
      a: 'Tripomastigota (en sangre), epimastigote (intestino del vector), amastigota (intracelular) y promastigota (extracelular, inoculada por el vector).'
    },
    {
      id: 'p23', grupo: 'Protozoarios hemáticos y tisulares', org: 'Leishmania', cat: 'Transmisión', tincion: 'protozoo',
      q: '¿Por qué vector se transmite la leishmaniasis y en qué grupo etario es más grave sin tratamiento?',
      a: 'Por la picadura de flebótomos hembra de los géneros Phlebotomus y Lutzomyia. Afecta principalmente a menores de 5 años, y sin tratamiento tiene elevada mortalidad.'
    },
    {
      id: 'p24', grupo: 'Protozoarios hemáticos y tisulares', org: 'Leishmania', cat: 'Patogenia', tincion: 'protozoo',
      q: '¿Qué ocurre con los promastigotes inoculados una vez dentro del organismo?',
      a: 'Son fagocitados por mononucleares, pierden la cola y se transforman en amastigotes que se dividen por fisión binaria; el macrófago se rompe y los libera. La enfermedad puede quedar latente tras la primoinfección o reactivarse años después.'
    },
    {
      id: 'p25', grupo: 'Protozoarios hemáticos y tisulares', org: 'Leishmania', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cuáles son las 3 formas clínicas de la leishmaniasis?',
      a: 'Cutánea: "botón de oriente" (pápula que se ulcera). Mucocutánea: úlceras cutáneas que hacen metástasis en mucosas orales/nasales/faríngeas/laríngeas (el tabique nasal es el más propenso al daño). Visceral (Kala-azar): hepatoesplenomegalia, anemia, leucopenia, plaquetopenia, hipergammaglobulinemia, ascitis, piel oscurecida y descamada, hemorragias y fiebre.'
    },
    {
      id: 'p26', grupo: 'Protozoarios hemáticos y tisulares', org: 'Leishmania', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la leishmaniasis?',
      a: 'Directo: punción de médula ósea/ganglios/bazo, tinción de Giemsa, cultivo (demora), PCR. Indirecto: ELISA, aglutinación de Ig, y la reacción de Montenegro (intradermorreacción).'
    },

    // --- Trypanosoma cruzi ---
    {
      id: 'p27', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Transmisión', tincion: 'protozoo',
      q: '¿Cómo transmite la vinchuca (Triatoma infestans) el Trypanosoma cruzi?',
      a: 'Pica cerca de la boca u ojos liberando una sustancia que produce prurito, y al mismo tiempo defeca liberando el parásito, que ingresa al rascarse la persona. También se transmite por sangre, transplantes, lactancia y vía perinatal.'
    },
    {
      id: 'p28', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Características', tincion: 'protozoo',
      q: '¿Qué formas del parásito hay en el mamífero y cuáles en el intestino del vector?',
      a: 'En el mamífero: el amastigote (intracelular) y el tripomastigote (torrente sanguíneo). En el intestino del vector: esferomastigotes y epimastigotes (ambos se multiplican) y el tripomastigote metacíclico (forma infectante para los mamíferos).'
    },
    {
      id: 'p29', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Qué es el signo de Romaña y qué otro signo cutáneo puede aparecer en la puerta de entrada?',
      a: 'El signo de Romaña es edema palpebral unilateral con inflamación de un ganglio preauricular (cuando la puerta de entrada es cerca del ojo); si la picadura es en otra zona de piel se forma el chagoma.'
    },
    {
      id: 'p30', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se presenta el Chagas agudo?',
      a: 'Cuadro pseudogripal: fiebre, fatiga, náuseas, vómitos, adenopatías y diarrea.'
    },
    {
      id: 'p31', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Qué megavísceras y qué alteraciones cardíacas produce el Chagas crónico?',
      a: 'Destruye los plexos de Meissner y Auerbach generando megaesófago y megacolon. A nivel cardíaco: arritmias, extrasístole ventricular, bloqueo de rama derecha, hemibloqueo anterior de rama izquierda, cambios en la onda T, prolongación del PR y dilatación ventricular.'
    },
    {
      id: 'p32', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la enfermedad de Chagas y qué método es más útil en la forma crónica?',
      a: 'Directo: gota gruesa de sangre teñida con Giemsa, hemocultivo, frotis de sangre, microhematocrito, método de Strout. Indirecto: PCR y búsqueda de Ig (esta última es la más útil en el Chagas crónico, donde la parasitemia es baja).'
    },

    // --- Plasmodium ---
    {
      id: 'p33', grupo: 'Protozoarios hemáticos y tisulares', org: 'Plasmodium spp.', cat: 'Características', tincion: 'protozoo',
      q: '¿Cuáles son los dos hospedadores del ciclo de Plasmodium y cuáles son sus formas evolutivas?',
      a: 'Hospedador intermediario: el hombre. Hospedador definitivo: la hembra del mosquito Anopheles. Formas: esporozoíto (fusiforme, inoculado por el mosquito), merozoíto (en célula hepática) y esquizonte (en hematíes).'
    },
    {
      id: 'p34', grupo: 'Protozoarios hemáticos y tisulares', org: 'Plasmodium spp.', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cuáles son los 3 períodos del estado agudo de la malaria?',
      a: 'Período frío: escalofríos y vasoconstricción periférica con cianosis. Período caliente: fiebre y vasodilatación. Luego: fatiga, esplenomegalia, trombocitopenia y anemia, para luego remitir los síntomas hasta el siguiente ciclo.'
    },
    {
      id: 'p35', grupo: 'Protozoarios hemáticos y tisulares', org: 'Plasmodium spp.', cat: 'Patogenia', tincion: 'protozoo',
      q: '¿Por qué el paludismo crónico puede dar color grisáceo o negruzco a los órganos?',
      a: 'El incremento de la destrucción de eritrocitos aumenta el hierro en sangre, que se termina depositando en los órganos como hemosiderina (pigmento malárico), dándoles ese color característico.'
    },
    {
      id: 'p36', grupo: 'Protozoarios hemáticos y tisulares', org: 'Plasmodium spp.', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se manifiesta el paludismo grave, especialmente en embarazadas?',
      a: 'Fallo sistémico con insuficiencia renal, hepatitis y riesgo de edema agudo de pulmón; en embarazadas produce abortos. Se manifiesta con coma febril, hipo/hipertonía, arreflexia, sudoración, hipotensión, edema cerebral y meníngeo, y alteraciones compatibles con glomerulonefritis.'
    },
    {
      id: 'p37', grupo: 'Protozoarios hemáticos y tisulares', org: 'Plasmodium spp.', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la malaria?',
      a: 'Extensión y gota gruesa de sangre teñida con Giemsa, inmunocromatografía, PCR, y frotis de sangre para diferenciar entre especies de Plasmodium.'
    },

    // --- Toxoplasma gondii ---
    {
      id: 'p38', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Características', tincion: 'protozoo',
      q: '¿Qué tipo de antropozoonosis es la toxoplasmosis y cuáles son sus 3 formas parasitarias?',
      a: 'Es un Apicomplexa; sus 3 formas son taquizoítos, quistes hísticos y ooquistes.'
    },
    {
      id: 'p39', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Transmisión', tincion: 'protozoo',
      q: '¿Cómo se transmite Toxoplasma gondii y cuál es su hospedador definitivo?',
      a: 'Vía fecal-oral (agua o alimentos contaminados con ooquistes de heces de felinos) y vía transplacentaria. El gato es el hospedador definitivo (reproducción sexuada y asexuada); otros animales (incluido el hombre) son hospedadores intermediarios que se infectan al ingerir quistes en tejidos animales u ooquistes del ambiente.'
    },
    {
      id: 'p40', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Patogenia', tincion: 'protozoo',
      q: '¿Cómo controla el sistema inmune la diseminación de Toxoplasma y qué consecuencia tiene?',
      a: 'Los trofozoítos liberados llegan al torrente circulatorio (adenitis y parasitemia); los mecanismos inmunitarios frenan la diseminación haciendo que el parásito forme quistes hísticos, que no son atacados por los anticuerpos (por eso persisten latentes).'
    },
    {
      id: 'p41', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se presenta la toxoplasmosis aguda sintomática en el inmunocompetente?',
      a: 'Solo el 10-20% de los infectados son sintomáticos: linfoadenopatías (ganglios cervicales), fiebre, poliadenomegalia, linfomonocitosis, exantema maculopapular y hepatoesplenomegalia.'
    },
    {
      id: 'p42', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se presenta la toxoplasmosis congénita según el momento de la infección materna?',
      a: 'Si la madre se infecta entre el 2° y 6° mes de gestación, el cuadro clásico es hidrocefalia, calcificación cerebral y coriorretinitis bilateral, con posible retraso mental.'
    },
    {
      id: 'p43', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Clínica', tincion: 'protozoo',
      q: '¿Cómo se manifiesta la toxoplasmosis en el inmunodeprimido?',
      a: 'Afecta el SNC (encefalitis o meningoencefalitis, mortales), el sistema ocular (unilateral), y puede dar neumonitis, miocarditis o enfermedad generalizada mortal.'
    },
    {
      id: 'p44', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Diagnóstico', tincion: 'protozoo', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la toxoplasmosis?',
      a: 'Presencia de IgM o IgA específica, o IgG de baja afinidad (indirecto, indica infección reciente); PCR (directo).'
    },

    // --- Cestodes: generalidades ---
    {
      id: 'p45', grupo: 'Cestodes', org: 'Generalidades', cat: 'Características', tincion: 'plano',
      q: '¿Qué características morfológicas tienen los cestodes y cómo se llaman sus 3 partes principales?',
      a: 'Son gusanos planos, segmentados, hermafroditas, sin tubo digestivo, con aparato reproductor bien desarrollado. Poseen escólex (cabeza), cuello (centro germinal) y estróbilo (cuerpo, donde están los proglótidos).'
    },

    // --- Taenia saginata ---
    {
      id: 'p46', grupo: 'Cestodes', org: 'Taenia saginata', cat: 'Características', tincion: 'plano',
      q: '¿Qué características tiene el escólex de Taenia saginata y cómo se fija al intestino?',
      a: 'Mide de 5 a 10 metros, es de color blanco lechoso; su escólex es inerme (sin ganchos) y se fija mediante 4 ventosas musculosas.'
    },
    {
      id: 'p47', grupo: 'Cestodes', org: 'Taenia saginata', cat: 'Ciclo biológico', tincion: 'plano',
      q: '¿Cuál es el hospedador definitivo e intermediario de Taenia saginata y cómo se completa el ciclo?',
      a: 'Hospedador definitivo: el hombre. Hospedador intermediario: la vaca. El hombre elimina huevos por heces que contaminan pastos ingeridos por el ganado; la larva se desarrolla en la musculatura vacuna, y el hombre se infecta al comer carne de vaca cruda o mal cocida.'
    },
    {
      id: 'p48', grupo: 'Cestodes', org: 'Taenia saginata', cat: 'Clínica', tincion: 'plano',
      q: '¿Cuál es el cuadro clínico de la teniasis por T. saginata?',
      a: 'Plenitud, distensión y dolor abdominal, dispepsia, meteorismo, pérdida de peso, náuseas, diarrea o constipación y debilidad; presentan eosinofilia marcada y urticaria.'
    },

    // --- Taenia solium ---
    {
      id: 'p49', grupo: 'Cestodes', org: 'Taenia solium', cat: 'Características', tincion: 'plano',
      q: '¿Qué diferencia al escólex de Taenia solium del de T. saginata?',
      a: 'Taenia solium mide de 2 a 6 metros y su escólex es cuadrangular, con 4 ventosas y una doble corona de ganchos (a diferencia del escólex inerme de T. saginata).'
    },
    {
      id: 'p50', grupo: 'Cestodes', org: 'Taenia solium', cat: 'Ciclo biológico', tincion: 'plano',
      q: '¿Por qué el hombre puede ser tanto hospedador definitivo como intermediario de Taenia solium?',
      a: 'Puede actuar como hospedador definitivo (al ingerir carne de cerdo con larvas, desarrollando la tenia adulta intestinal) o como hospedador intermediario accidental (al ingerir huevos, desarrollando la forma larvaria en tejidos: cisticercosis).'
    },
    {
      id: 'p51', grupo: 'Cestodes', org: 'Taenia solium', cat: 'Clínica', tincion: 'plano',
      q: '¿Qué es la cisticercosis y qué órganos puede afectar?',
      a: 'Es la localización de la larva de T. solium en tejidos (corazón, SNC, músculo estriado), donde se enquista y con el tiempo se calcifica. Los síntomas de la teniasis intestinal (alteraciones del apetito, disminución de peso, diarrea, vómitos, prurito anal) aparecen 2-3 meses después de la ingestión de la larva.'
    },
    {
      id: 'p52', grupo: 'Cestodes', org: 'Taenia saginata / solium', cat: 'Diagnóstico', tincion: 'plano', tipoDx: 'ambos',
      q: '¿Cómo se diagnostican las teniasis?',
      a: 'Observación macroscópica de proglótidos grávidos y microscópica de huevos en heces; PCR y ELISA.'
    },

    // --- Hymenolepis nana ---
    {
      id: 'p53', grupo: 'Cestodes', org: 'Hymenolepis nana', cat: 'Características', tincion: 'plano',
      q: '¿En qué grupo etario es más frecuente Hymenolepis nana y qué característica particular tiene su ciclo?',
      a: 'Es más frecuente en niños; tiene ciclo monoxeno con capacidad de autoinfectar al huésped, ya que los huevos pueden quedar en el intestino y continuar el ciclo reproductivo sin salir al ambiente.'
    },
    {
      id: 'p54', grupo: 'Cestodes', org: 'Hymenolepis nana', cat: 'Clínica', tincion: 'plano',
      q: '¿Cuál es el cuadro clínico de la himenolepiosis?',
      a: 'Generalmente es asintomática. Puede dar trastornos gastrointestinales (náuseas, vómitos, dolor abdominal, diarrea), síntomas nerviosos (irritabilidad, alteraciones del sueño) y alérgicos (prurito anal/nasal, eosinofilia >5%).'
    },
    {
      id: 'p55', grupo: 'Cestodes', org: 'Hymenolepis nana', cat: 'Diagnóstico', tincion: 'plano', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la himenolepiosis?',
      a: 'Coproparasitológico seriado.'
    },

    // --- Diphyllobothrium latum ---
    {
      id: 'p56', grupo: 'Cestodes', org: 'Diphyllobothrium latum', cat: 'Características', tincion: 'plano',
      q: '¿Dónde es endémico Diphyllobothrium latum y cómo se transmite al hombre?',
      a: 'En climas templados fríos, en el sur del país; mide de 8 a 12 metros. Se transmite vía fecal-oral al comer pescados crudos (trucha ahumada, salmón crudo).'
    },
    {
      id: 'p57', grupo: 'Cestodes', org: 'Diphyllobothrium latum', cat: 'Ciclo biológico', tincion: 'plano',
      q: '¿Qué hospedador intermediario primario tiene Diphyllobothrium latum antes de llegar al pez?',
      a: 'El crustáceo: del huevo emerge una larva (coracidio) que infecta al crustáceo, transformándose en procercoide; el pez (trucha, salmón) come al crustáceo y se transforma en plerocercoide, siendo esta la forma infectante para el hombre.'
    },

    // --- Echinococcus granulosus ---
    {
      id: 'p58', grupo: 'Cestodes', org: 'Echinococcus granulosus', cat: 'Características', tincion: 'plano',
      q: '¿Dónde es endémico Echinococcus granulosus en Argentina y qué estructura le permite fijarse al intestino?',
      a: 'Endemia en Entre Ríos, la pampa húmeda y seca, y Patagonia. Es pequeño (2-11 mm), con cabeza con ganchos, cuello y 3 proglótides.'
    },
    {
      id: 'p59', grupo: 'Cestodes', org: 'Echinococcus granulosus', cat: 'Ciclo biológico', tincion: 'plano',
      q: '¿Cuáles son los hospedadores del ciclo de Echinococcus granulosus y qué rol cumple el hombre?',
      a: 'Hospedador definitivo: el perro (se infecta al comer vísceras con quistes hidatídicos fértiles). Hospedador intermediario natural: el ovino. Hospedador intermediario accidental: el hombre, que se infecta por agua o verduras contaminadas con huevos eliminados en las heces del perro.'
    },
    {
      id: 'p60', grupo: 'Cestodes', org: 'Echinococcus granulosus', cat: 'Clínica', tincion: 'plano',
      q: '¿En qué órganos se localiza con más frecuencia el quiste hidatídico y qué riesgo tiene su ruptura?',
      a: 'Hígado (70%) y pulmón (20%), con menor frecuencia bazo, músculo, hueso, corazón, SNC y riñón. Si se rompe, libera el escólex (contenido alergénico) desde su adventicia, pudiendo causar un shock anafiláctico.'
    },
    {
      id: 'p61', grupo: 'Cestodes', org: 'Echinococcus granulosus', cat: 'Clínica', tincion: 'plano',
      q: '¿Cómo se presenta la hidatidosis pulmonar y qué complicaciones tiene la hepática?',
      a: 'Pulmonar: puede ser asintomática o cursar con dolor en el hemitórax afectado, tos seca, disnea, expectoración y hemoptisis. Hepática: puede complicarse con hidatidosis secundaria del peritoneo, peritonitis aguda y shock anafiláctico.'
    },
    {
      id: 'p62', grupo: 'Cestodes', org: 'Echinococcus granulosus', cat: 'Diagnóstico', tincion: 'plano', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la hidatidosis y por qué NO se hace coproparasitológico seriado en el hombre?',
      a: 'Serología (ELISA), hemograma, diagnóstico clínico por imágenes (radiografía, TAC) para visualizar el quiste, PCR y búsqueda de Ag e Ig (arco 5). NO se hace coproparasitológico seriado porque el hombre es hospedador intermediario y el parásito no tiene huevos en su intestino.'
    },

    // --- Trematodes: generalidades ---
    {
      id: 'p63', grupo: 'Trematodes', org: 'Generalidades', cat: 'Características', tincion: 'plano',
      q: '¿En qué se diferencian los trematodes de los cestodes morfológicamente?',
      a: 'Los trematodes son gusanos planos de ciclo heteroxeno, NO segmentados (a diferencia de los cestodes), hermafroditas o de sexo separado, con aparato digestivo incompleto, aparato reproductor bien desarrollado y órganos de fijación anteriores.'
    },

    // --- Fasciola hepatica ---
    {
      id: 'p64', grupo: 'Trematodes', org: 'Fasciola hepatica', cat: 'Características', tincion: 'plano',
      q: '¿Dónde es endémica Fasciola hepatica en Argentina y cómo se transmite?',
      a: 'Endemia en Córdoba; mide 2-3 cm con forma de hoja de laurel. Se transmite vía fecal-oral al comer berro mal lavado.'
    },
    {
      id: 'p65', grupo: 'Trematodes', org: 'Fasciola hepatica', cat: 'Ciclo biológico', tincion: 'plano',
      q: '¿Qué hospedador intermediario tiene Fasciola hepatica y por qué órgano tiene preferencia en el humano?',
      a: 'El caracol es el hospedador intermediario (donde el miracidio se transforma en cercaria, que se enquista en el berro). En el humano, la cercaria atraviesa la pared intestinal y tiene preferencia por el hígado, penetrando la cápsula de Glisson hasta las vías biliares.'
    },
    {
      id: 'p66', grupo: 'Trematodes', org: 'Fasciola hepatica', cat: 'Clínica', tincion: 'plano',
      q: '¿Cómo se diferencian la fase aguda/migratoria y la fase crónica de la fasciolosis?',
      a: 'Fase aguda/migratoria: dolor en hipocondrio derecho y/o epigastrio, fiebre, hepatomegalia, alergia cutánea, vómitos, diarrea, leucocitosis y eosinofilia. Fase crónica: los parásitos obstruyen el drenaje biliar causando ictericia, dispepsia biliar, hepatomegalia, fiebre y dolor abdominal.'
    },
    {
      id: 'p67', grupo: 'Trematodes', org: 'Fasciola hepatica', cat: 'Diagnóstico', tincion: 'plano', tipoDx: 'indirecto',
      q: '¿Cómo se diagnostica la fasciolosis?',
      a: 'Técnicas serológicas (búsqueda de antígeno y anticuerpos).'
    },

    // --- Schistosoma ---
    {
      id: 'p68', grupo: 'Trematodes', org: 'Schistosoma sp.', cat: 'Características', tincion: 'plano',
      q: '¿Dónde es endémico Schistosoma en Argentina y en qué condiciones ambientales habita su hospedador intermediario?',
      a: 'Endemia en Misiones y Brasil; habita en climas cálidos, en agua dulce con cursos lentos o represas, donde vive el caracol (hospedador intermediario).'
    },
    {
      id: 'p69', grupo: 'Trematodes', org: 'Schistosoma sp.', cat: 'Ciclo biológico', tincion: 'plano',
      q: '¿Por dónde ingresa Schistosoma al humano y qué síntoma produce en ese momento?',
      a: 'La cercaria penetra la piel (generalmente entre los dedos), produciendo prurito y urticaria; luego pasa a la sangre, llega a la circulación portal, se diferencia en macho y hembra que copulan, y la hembra migra a las venas mesentéricas del colon donde pone los huevos.'
    },
    {
      id: 'p70', grupo: 'Trematodes', org: 'Schistosoma sp.', cat: 'Clínica', tincion: 'plano',
      q: '¿Cómo se presentan las fases inicial y crónica de la esquistosomiasis?',
      a: 'Fase inicial: puede ser inaparente o presentar una forma entérica aguda con gastroenteritis, hepatoesplenomegalia leve y fiebre. Fase crónica: formas hepatoesplénica, vasculopulmonar y seudotumoral.'
    },

    // --- Nematelmintos: generalidades ---
    {
      id: 'p71', grupo: 'Nematodes', org: 'Generalidades', cat: 'Características', tincion: 'cilindrico',
      q: '¿Qué características morfológicas comparten los nematodes (gusanos cilíndricos)?',
      a: 'Son gusanos cilíndricos, de simetría bilateral, con extremos aguzados, cutícula externa, aparato digestivo completo y sexos separados.'
    },

    // --- Enterobius vermicularis ---
    {
      id: 'p72', grupo: 'Nematodes', org: 'Enterobius vermicularis (oxiuros)', cat: 'Ciclo biológico', tincion: 'cilindrico',
      q: '¿Cómo pone los huevos la hembra de Enterobius vermicularis y por qué ese comportamiento explica el prurito nocturno?',
      a: 'Durante la noche la hembra migra hasta el recto/ano y pone los huevos allí, lo que produce el prurito anal nocturno característico. Los huevos embrionan por el calor corporal y pueden reingresar por autoinfección.'
    },
    {
      id: 'p73', grupo: 'Nematodes', org: 'Enterobius vermicularis (oxiuros)', cat: 'Clínica', tincion: 'cilindrico',
      q: '¿Cuál es el cuadro clínico de la enterobiosis/oxiuriosis?',
      a: 'Prurito anal intenso (especialmente nocturno), prurito nasal y vulvar, vaginitis, colpitis, endometritis, salpingitis, trastornos del sueño y sonambulismo, pérdida de peso e inapetencia.'
    },
    {
      id: 'p74', grupo: 'Nematodes', org: 'Enterobius vermicularis (oxiuros)', cat: 'Diagnóstico', tincion: 'cilindrico', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la enterobiosis?',
      a: 'Diagnóstico clínico, hallazgo del parásito o huevos en heces o zona perianal, test de Graham (cinta adhesiva) y método de la gasa.'
    },

    // --- Ascaris lumbricoides ---
    {
      id: 'p75', grupo: 'Nematodes', org: 'Ascaris lumbricoides', cat: 'Ciclo biológico', tincion: 'cilindrico',
      q: '¿Por qué órganos migra la larva de Ascaris lumbricoides antes de llegar al intestino como adulto?',
      a: 'El huevo eclosiona en el intestino, atraviesa su pared y va al pulmón (queda atrapado en capilares pulmonares) donde madura; luego asciende hasta la laringe (o faringe, pudiendo salir por boca o nariz), es deglutida y llega al intestino donde se completa el estadio adulto.'
    },
    {
      id: 'p76', grupo: 'Nematodes', org: 'Ascaris lumbricoides', cat: 'Clínica', tincion: 'cilindrico',
      q: '¿Cómo se presenta la ascariosis en niños y qué es la "vómica de áscaris"?',
      a: 'En adultos suele ser asintomática; en niños: disminución de peso, anorexia, retardo del crecimiento, dolores cólicos, diarrea alternando con constipación, prurito nasal/anal y urticaria. La "vómica de áscaris" es la salida del parásito por boca o ano. La invasión pulmonar puede producir bronquitis asmatiforme.'
    },
    {
      id: 'p77', grupo: 'Nematodes', org: 'Ascaris lumbricoides', cat: 'Diagnóstico', tincion: 'cilindrico', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la ascariosis?',
      a: 'Coproparasitario macroscópico y microscópico.'
    },

    // --- Trichinella spiralis ---
    {
      id: 'p78', grupo: 'Nematodes', org: 'Trichinella spiralis', cat: 'Transmisión', tincion: 'cilindrico',
      q: '¿Cómo se adquiere la triquinosis y cuáles son sus hospedadores principales?',
      a: 'Vía fecal-oral al comer carne de cerdo cruda con larvas enquistadas; los hospedadores principales son el cerdo y roedores.'
    },
    {
      id: 'p79', grupo: 'Nematodes', org: 'Trichinella spiralis', cat: 'Ciclo biológico', tincion: 'cilindrico',
      q: '¿Por qué vía llegan las larvas de Trichinella spiralis al músculo estriado?',
      a: 'Tras copular en el intestino delgado, las larvas alcanzan los linfáticos intestinales y las venas mesentéricas; siguiendo la vía linfohemática llegan al corazón y se distribuyen por todo el cuerpo, para finalmente alojarse y encapsularse en los músculos estriados.'
    },
    {
      id: 'p80', grupo: 'Nematodes', org: 'Trichinella spiralis', cat: 'Clínica', tincion: 'cilindrico',
      q: '¿Cuál es el cuadro clínico de la triquinosis y qué signo NO está presente (a diferencia de otras parasitosis)?',
      a: 'Mialgia, fiebre, artralgia, decaimiento y edema bipalpebral bilateral, SIN síntomas respiratorios. Complicaciones graves: miocarditis difusa, tromboflebitis, compromiso del SNC y edema tóxico con hipotensión y shock.'
    },
    {
      id: 'p81', grupo: 'Nematodes', org: 'Trichinella spiralis', cat: 'Diagnóstico', tincion: 'cilindrico', tipoDx: 'indirecto',
      q: '¿Cómo se diagnostica la triquinosis?',
      a: 'Búsqueda de IgM y ELISA.'
    },
  ],
  mc: [
    {
      id: 'pmc1', grupo: 'Protozoarios vaginales', org: 'Trichomonas vaginalis', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Cuál de estas afirmaciones sobre Trichomonas vaginalis es correcta?',
      options: ['Forma quistes de resistencia en el ambiente', 'Nunca forma quistes; siempre se encuentra como trofozoíto', 'Es un protozoo intracelular obligado', 'Se transmite exclusivamente por vía fecal-oral'],
      correct: 1, explain: 'A diferencia de otros protozoarios, Trichomonas vaginalis NO forma quistes; siempre está presente como trofozoíto, y se transmite por contacto sexual directo.'
    },
    {
      id: 'pmc2', grupo: 'Protozoarios intestinales', org: 'Giardia lamblia', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Por qué mecanismo Giardia lamblia produce esteatorrea sin invadir la mucosa intestinal?',
      options: ['Produce una toxina que destruye los enterocitos', 'Se localiza sobre las microvellosidades y altera la digestión de lípidos por múltiples mecanismos', 'Invade la submucosa y genera una reacción granulomatosa', 'Bloquea directamente los conductos biliares'],
      correct: 1, explain: 'Giardia no invade, pero al ubicarse sobre las microvellosidades altera enzimas pancreáticas, disacaridasas, el consumo de lípidos biliares y la barrera de moco, generando esteatorrea.'
    },
    {
      id: 'pmc3', grupo: 'Protozoarios intestinales', org: 'Entamoeba histolytica', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: 'Un paciente con disentería desarrolla además un absceso hepático. ¿Cuál es el agente causal más probable y por qué vía llegó al hígado?',
      options: ['Giardia lamblia, por vía linfática', 'Entamoeba histolytica, por vía portal', 'Trichinella spiralis, por vía linfohemática', 'Cryptosporidium, por vía biliar directa'],
      correct: 1, explain: 'Entamoeba histolytica puede alcanzar el hígado por vía portal tras invadir la mucosa del intestino grueso, produciendo abscesos hepáticos.'
    },
    {
      id: 'pmc4', grupo: 'Protozoarios intestinales', org: 'Cryptosporidium', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Con qué técnica de tinción se identifican los ooquistes de Cryptosporidium, dado su comportamiento ácido-alcohol resistente?',
      options: ['Tinción de Gram', 'Ziehl-Neelsen modificada', 'Tinción de Wright', 'Azul de metileno'],
      correct: 1, explain: 'Los ooquistes de Cryptosporidium se comportan como BAAR (ácido-alcohol resistentes), por lo que se identifican con Ziehl-Neelsen modificada o tinción de Kinyoun.'
    },
    {
      id: 'pmc5', grupo: 'Protozoarios hemáticos y tisulares', org: 'Leishmania', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Cuál es la forma clínica de leishmaniasis que causa el cuadro de Kala-azar?',
      options: ['Cutánea', 'Mucocutánea', 'Visceral', 'Ganglionar'],
      correct: 2, explain: 'La forma visceral (Kala-azar) causa hepatoesplenomegalia, anemia, hipergammaglobulinemia y fiebre, entre otros signos.'
    },
    {
      id: 'pmc6', grupo: 'Protozoarios hemáticos y tisulares', org: 'Leishmania', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Qué prueba diagnóstica de leishmaniasis es una intradermorreacción?',
      options: ['Reacción de Montenegro', 'Reacción de lepromina', 'PPD', 'Test de Sereny'],
      correct: 0, explain: 'La reacción de Montenegro es la intradermorreacción utilizada para el diagnóstico indirecto de leishmaniasis (equivalente a la lepromina en lepra o la PPD en tuberculosis).'
    },
    {
      id: 'pmc7', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Qué signo clínico se produce cuando la puerta de entrada del Trypanosoma cruzi es cerca del ojo?',
      options: ['Chagoma', 'Signo de Romaña', 'Manchas de Koplik', 'Signo de Nikolsky'],
      correct: 1, explain: 'El signo de Romaña (edema palpebral unilateral con adenopatía preauricular) ocurre cuando la puerta de entrada está cerca del ojo; el chagoma aparece en otras zonas de piel.'
    },
    {
      id: 'pmc8', grupo: 'Protozoarios hemáticos y tisulares', org: 'Trypanosoma cruzi', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Cuál es el método diagnóstico más útil en la fase crónica de la enfermedad de Chagas, cuando la parasitemia es baja?',
      options: ['Gota gruesa con Giemsa', 'Búsqueda de inmunoglobulinas (serología)', 'Xenodiagnóstico exclusivamente', 'Hemocultivo'],
      correct: 1, explain: 'En el Chagas crónico la parasitemia es baja y los métodos parasitológicos directos pierden sensibilidad; la búsqueda de Ig (serología) es el método más útil en esta etapa.'
    },
    {
      id: 'pmc9', grupo: 'Protozoarios hemáticos y tisulares', org: 'Plasmodium spp.', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Cuál es el hospedador definitivo del ciclo de Plasmodium?',
      options: ['El hombre', 'La hembra del mosquito Anopheles', 'El eritrocito humano', 'El hepatocito'],
      correct: 1, explain: 'El hospedador definitivo (donde ocurre la reproducción sexuada) es la hembra del mosquito Anopheles; el hombre es el hospedador intermediario.'
    },
    {
      id: 'pmc10', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Cuál es la tríada clásica de la toxoplasmosis congénita cuando la madre se infecta entre el 2° y 6° mes de gestación?',
      options: ['Sordera, cataratas y ductus arterioso persistente', 'Hidrocefalia, calcificación cerebral y coriorretinitis bilateral', 'Microcefalia, atrofia de extremidades y vejiga neurogénica', 'Ictericia, ascitis y hepatoesplenomegalia'],
      correct: 1, explain: 'La tríada clásica de la toxoplasmosis congénita es hidrocefalia, calcificaciones cerebrales y coriorretinitis bilateral.'
    },
    {
      id: 'pmc11', grupo: 'Protozoarios hemáticos y tisulares', org: 'Toxoplasma gondii', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Por qué los quistes hísticos de Toxoplasma no son eliminados por el sistema inmune?',
      options: ['Porque se ubican fuera del organismo', 'Porque no son atacados por los anticuerpos, lo que permite la latencia', 'Porque destruyen a los linfocitos T citotóxicos', 'Porque mutan constantemente su antígeno de superficie'],
      correct: 1, explain: 'Los quistes hísticos, formados cuando el sistema inmune frena la diseminación del parásito, no son atacados por los anticuerpos, permitiendo que el parásito persista en estado latente.'
    },
    {
      id: 'pmc12', grupo: 'Cestodes', org: 'Taenia saginata vs solium', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Qué característica del escólex permite diferenciar a Taenia solium de Taenia saginata?',
      options: ['T. solium tiene escólex inerme, T. saginata tiene ganchos', 'T. solium tiene doble corona de ganchos, T. saginata es inerme (sin ganchos)', 'Ambas tienen ganchos idénticos', 'Ninguna tiene ventosas'],
      correct: 1, explain: 'El escólex de T. solium es cuadrangular con doble corona de ganchos, mientras que el de T. saginata carece de ganchos (es inerme).'
    },
    {
      id: 'pmc13', grupo: 'Cestodes', org: 'Taenia solium', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Cómo se llama la localización tisular de la larva de Taenia solium y qué órganos afecta con más frecuencia?',
      options: ['Hidatidosis; hígado y pulmón', 'Cisticercosis; corazón, SNC y músculo estriado', 'Triquinosis; músculo estriado exclusivamente', 'Teniasis visceral; bazo y riñón'],
      correct: 1, explain: 'La cisticercosis es la localización de la larva de T. solium en tejidos como corazón, SNC y músculo estriado, donde se enquista y puede calcificarse.'
    },
    {
      id: 'pmc14', grupo: 'Cestodes', org: 'Diphyllobothrium latum', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Qué alimento típico se asocia a la transmisión de Diphyllobothrium latum?',
      options: ['Carne de cerdo cruda', 'Berro mal lavado', 'Pescado crudo (trucha, salmón)', 'Carne de vaca mal cocida'],
      correct: 2, explain: 'Diphyllobothrium latum se transmite al comer pescado crudo (trucha ahumada, salmón crudo) que contiene la larva plerocercoide.'
    },
    {
      id: 'pmc15', grupo: 'Cestodes', org: 'Echinococcus granulosus', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Por qué el hombre se considera hospedador intermediario "accidental" en el ciclo de Echinococcus granulosus?',
      options: ['Porque el ciclo natural es perro-ovino, y el hombre se infecta por error al ingerir huevos del ambiente', 'Porque el hombre nunca desarrolla la enfermedad', 'Porque el perro se infecta directamente del hombre', 'Porque el hombre es en realidad el hospedador definitivo'],
      correct: 0, explain: 'El ciclo natural del parásito es entre el perro (definitivo) y el ovino (intermediario natural); el hombre se infecta accidentalmente al ingerir huevos eliminados por el perro.'
    },
    {
      id: 'pmc16', grupo: 'Cestodes', org: 'Echinococcus granulosus', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Por qué NO se realiza coproparasitológico seriado para diagnosticar hidatidosis en el hombre?',
      options: ['Porque el hombre es hospedador intermediario y el parásito no tiene huevos en su intestino', 'Porque los huevos son indetectables al microscopio', 'Porque el parásito no produce huevos en ninguna etapa', 'Porque las heces humanas destruyen los huevos'],
      correct: 0, explain: 'El hombre es hospedador intermediario accidental; la forma adulta (que produce huevos) solo está en el intestino del perro, por eso no tiene sentido buscar huevos en heces humanas.'
    },
    {
      id: 'pmc17', grupo: 'Trematodes', org: 'Fasciola hepatica', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Qué alimento típico se asocia a la infección por Fasciola hepatica?',
      options: ['Berro mal lavado', 'Pescado crudo', 'Carne de cerdo cruda', 'Agua de pozo'],
      correct: 0, explain: 'La cercaria de Fasciola hepatica se enquista preferentemente en plantas acuáticas como el berro, que al comerse mal lavado transmite la infección.'
    },
    {
      id: 'pmc18', grupo: 'Trematodes', org: 'Schistosoma sp.', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Por qué vía ingresa la cercaria de Schistosoma al cuerpo humano?',
      options: ['Vía fecal-oral exclusivamente', 'Penetración activa a través de la piel intacta', 'Picadura de mosquito', 'Inhalación de esporas'],
      correct: 1, explain: 'La cercaria de Schistosoma penetra activamente la piel (generalmente entre los dedos), produciendo prurito y urticaria en el sitio de entrada.'
    },
    {
      id: 'pmc19', grupo: 'Nematodes', org: 'Enterobius vermicularis', cat: 'Opción múltiple', tincion: 'cilindrico', type: 'mc',
      q: '¿Qué método diagnóstico específico se usa para detectar los huevos de Enterobius vermicularis en la región perianal?',
      options: ['Coproparasitológico seriado', 'Test de Graham (cinta adhesiva)', 'Test de Sereny', 'Biopsia rectal'],
      correct: 1, explain: 'El test de Graham, que usa cinta adhesiva aplicada en la región perianal (típicamente a primera hora de la mañana), es el método específico para detectar los huevos de oxiuros.'
    },
    {
      id: 'pmc20', grupo: 'Nematodes', org: 'Ascaris lumbricoides', cat: 'Opción múltiple', tincion: 'cilindrico', type: 'mc',
      q: '¿Por qué órgano migra obligatoriamente la larva de Ascaris lumbricoides antes de completar su ciclo en el intestino?',
      options: ['Hígado', 'Pulmón', 'Riñón', 'Cerebro'],
      correct: 1, explain: 'La larva de Ascaris atraviesa la pared intestinal, llega a los capilares pulmonares donde madura, asciende por la vía aérea hasta la laringe/faringe, y es deglutida nuevamente para completar su desarrollo en el intestino.'
    },
    {
      id: 'pmc21', grupo: 'Nematodes', org: 'Trichinella spiralis', cat: 'Opción múltiple', tincion: 'cilindrico', type: 'mc',
      q: '¿Qué hallazgo clínico ayuda a diferenciar la triquinosis de otras parasitosis con eosinofilia?',
      options: ['Presencia de tos productiva intensa', 'Edema bipalpebral bilateral SIN síntomas respiratorios', 'Diarrea sanguinolenta como síntoma principal', 'Ictericia franca desde el inicio'],
      correct: 1, explain: 'El edema bipalpebral bilateral sin síntomas respiratorios es un hallazgo característico de la triquinosis, que ayuda a diferenciarla de otras parasitosis migratorias.'
    },
    {
      id: 'pmc22', grupo: 'Nematodes', org: 'Trichinella spiralis', cat: 'Opción múltiple', tincion: 'cilindrico', type: 'mc',
      q: '¿Dónde terminan encapsulándose las larvas de Trichinella spiralis tras su migración?',
      options: ['En los ganglios linfáticos', 'En el músculo estriado', 'En el hígado', 'En el bazo'],
      correct: 1, explain: 'Tras la migración por vía linfohemática, las larvas de Trichinella se alojan y encapsulan en los músculos estriados.'
    },
    {
      id: 'pmc23', grupo: 'Protozoarios intestinales', org: 'Balantidium coli', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Cuál es el reservorio principal de Balantidium coli?',
      options: ['El perro', 'El cerdo', 'El gato', 'Las aves'],
      correct: 1, explain: 'El cerdo es el reservorio principal de Balantidium coli, típico de zonas rurales tropicales.'
    },
    {
      id: 'pmc24', grupo: 'Protozoarios intestinales', org: 'Cyclospora cayetanensis', cat: 'Opción múltiple', tincion: 'protozoo', type: 'mc',
      q: '¿Qué característica de los ooquistes de Cyclospora cayetanensis explica que el tratamiento del agua con cloro no sea suficiente para eliminarlos?',
      options: ['Son resistentes al calor extremo', 'Sobreviven incluso a aguas cloradas', 'Se destruyen solo con luz ultravioleta', 'No existen en el agua, solo en carne'],
      correct: 1, explain: 'Los ooquistes de Cyclospora cayetanensis sobreviven a aguas cloradas, lo que explica su transmisión persistente incluso en aguas "tratadas".'
    },
    {
      id: 'pmc25', grupo: 'Cestodes', org: 'Hymenolepis nana', cat: 'Opción múltiple', tincion: 'plano', type: 'mc',
      q: '¿Qué particularidad del ciclo de Hymenolepis nana explica que la infección pueda perpetuarse sin reinfección externa?',
      options: ['Tiene ciclo heteroxeno obligado', 'Puede autoinfectar al huésped, ya que los huevos pueden quedar en el intestino y continuar el ciclo', 'Forma esporas resistentes en el ambiente', 'Se transmite únicamente por vía sexual'],
      correct: 1, explain: 'Hymenolepis nana tiene capacidad de autoinfección: los huevos pueden eclosionar y continuar el ciclo dentro del mismo intestino sin necesidad de salir al ambiente.'
    },
  ]
};
