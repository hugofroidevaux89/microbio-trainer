/* Datos del módulo: Hongos — fuente: HONGOS.pdf */
window.MODULE = {
  title: 'Hongos',
  source: 'HONGOS.pdf',
  storageKey: 'hongos',
  categoryColors: {
    profunda: { label: 'Profundas', color: '#e0568e' },
    oportunista: { label: 'Oportunistas', color: '#a97ce0' },
    superficial: { label: 'Superficiales', color: '#d8a53d' }
  },
  cards: [
    // --- Generalidades micosis profundas ---
    {
      id: 'h1', grupo: 'Micosis profundas', org: 'Generalidades', cat: 'Características', tincion: 'profunda',
      q: '¿Qué características generales comparten las micosis profundas (sistémicas)?',
      a: 'Se localizan en órganos y tejidos profundos, pueden invadir la sangre (fungemia) o el sistema linfático y diseminarse; el 90% son asintomáticas; producen enfermedades granulomatosas crónicas; tienen distribución geográfica restringida (zonas endémicas) y dimorfismo termal (moho a temperatura ambiente, levadura a temperatura corporal).'
    },
    {
      id: 'h1b', grupo: 'Micosis profundas', org: 'Generalidades', cat: 'Transmisión', tincion: 'profunda',
      q: '¿Cómo se transmiten las micosis profundas?',
      a: 'NO se transmiten de persona a persona, sino del ambiente o de los animales al hombre; la vía inhalatoria (inspirar hifas) es la más común, aunque también puede ser cutánea (astillas, madera).'
    },

    // --- Histoplasma capsulatum ---
    {
      id: 'h2', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Características', tincion: 'profunda',
      q: '¿Qué dimorfismo termal presenta Histoplasma capsulatum?',
      a: 'A 28°C (ambiente) se presenta como hifas (moho); a 37°C (corporal) como levaduras. La fase micelial se encuentra solo en el suelo y nunca en los tejidos, mientras que la fase levaduriforme siempre es tisular. Su crecimiento es lento (4 a 6 semanas).'
    },
    {
      id: 'h3', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Hábitat', tincion: 'profunda',
      q: '¿Dónde se encuentra Histoplasma capsulatum en Argentina?',
      a: 'En la pampa húmeda (Buenos Aires, Entre Ríos, Córdoba, Santa Fe, La Pampa), en climas templados y húmedos, a la vera de los grandes ríos; también en el guano de aves en descomposición (pollos, gallinas, palomas) y en cavernas de murciélagos.'
    },
    {
      id: 'h4', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Vía de transmisión', tincion: 'profunda',
      q: '¿Por qué vía ingresa Histoplasma capsulatum al organismo?',
      a: 'Por vía inhalatoria.'
    },
    {
      id: 'h5', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Patogenia', tincion: 'profunda',
      q: '¿Cómo evade Histoplasma la destrucción por el macrófago y qué lesión característica forma?',
      a: 'Vive dentro de los macrófagos e impide la unión del fagosoma con el lisosoma. Forma granulomas de células epitelioides que sufren necrosis de coagulación, tienden a fusionarse en áreas de consolidación mayor, y luego se fibrosan y/o calcifican.'
    },
    {
      id: 'h6', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Clínica', tincion: 'profunda',
      q: '¿Cuáles son las formas clínicas de la histoplasmosis?',
      a: '80% asintomática. Respiratoria aguda: similar a neumonía viral, autolimitada y benigna (gravedad según la carga de esporas). Diseminada (en inmunocomprometidos): fiebre, pérdida de peso, citopenia, hepatoesplenomegalia, intersticiopatía pulmonar micronodular, adenomegalias y lesiones cutáneomucosas. Crónica (>40 años): ulceraciones cutáneas/mucosas, astenia, curso arrastrado con cavitación de localización apical (diagnóstico diferencial con tuberculosis).'
    },
    {
      id: 'h7', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Diagnóstico', tincion: 'profunda', tipoDx: 'ambos',
      q: '¿Cómo se toma la muestra y cómo se diagnostica la histoplasmosis según su forma clínica? (directo e indirecto)',
      a: 'Pulmonar: esputo y lavado broncoalveolar en fresco. Extrapulmonar: punción de médula ósea/hepática/esplénica, sangre entera, LCR, escarificación de lesiones, biopsia del borde de la lesión. Directo: observación en fresco, tinción de PAS, cultivo lento, antígeno, PCR. Indirecto: intradermorreacción.'
    },
    {
      id: 'h8', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Diagnóstico', tincion: 'profunda',
      q: '¿Cómo se ve Histoplasma dentro de los histiocitos con la tinción de Giemsa, y con qué se hace diagnóstico diferencial?',
      a: 'Se encuentra en el interior de histiocitos; la pared no toma el colorante de Giemsa, por lo que se observa un halo claro alrededor. Los nódulos calcificados pulmonares son diagnóstico diferencial con otras micosis y con tumores.'
    },

    // --- Paracoccidioides brasiliensis ---
    {
      id: 'h9', grupo: 'Micosis profundas', org: 'Paracoccidioides brasiliensis', cat: 'Hábitat', tincion: 'profunda',
      q: '¿Dónde se encuentra Paracoccidioides brasiliensis en Argentina?',
      a: 'Noreste argentino (Chaco, Misiones, Formosa, norte de Santa Fe, Entre Ríos y Corrientes) y noroeste argentino (Salta, Jujuy, Tucumán); clima tropical y subtropical; se encuentra en restos vegetales.'
    },
    {
      id: 'h10', grupo: 'Micosis profundas', org: 'Paracoccidioides brasiliensis', cat: 'Patogenia', tincion: 'profunda',
      q: '¿Qué ocurre tras la primoinfección pulmonar por Paracoccidioides brasiliensis?',
      a: 'Ingresa por vía inhalatoria, produce una lesión inflamatoria subaguda inespecífica con adenopatía regional (complejo de primoinfección, que pasa clínicamente inadvertido, igual que la diseminación hematógena); tras 3 semanas los huéspedes normales limitan la infección de forma espontánea.'
    },
    {
      id: 'h11', grupo: 'Micosis profundas', org: 'Paracoccidioides brasiliensis', cat: 'Clínica', tincion: 'profunda',
      q: '¿Cómo se diferencian la forma aguda y crónica de la paracoccidioidomicosis?',
      a: 'Aguda: deterioro grave y agudo del estado general, compromiso hepatoesplénico/ganglionar/óseo, fiebre, pérdida de peso, poliadenomegalia, hepatoesplenomegalia, anemia y leucocitosis con eosinofilia. Crónica: febrícula, astenia y pérdida de peso; localización única (granuloma laríngeo, úlcera oral) o multifocal (pulmón, laringe, piel, ganglios, boca, suprarrenales, SNC).'
    },
    {
      id: 'h12', grupo: 'Micosis profundas', org: 'Paracoccidioides brasiliensis', cat: 'Clínica', tincion: 'profunda',
      q: '¿Cómo son las lesiones orales y pulmonares típicas de la paracoccidioidomicosis?',
      a: 'Lesiones orales: exulceraciones sobre una base con puntillado microhemorrágico y purulento. Afectación pulmonar: infiltrados micronodulillares bilaterales parahiliares con expectoración purulenta.'
    },
    {
      id: 'h13', grupo: 'Micosis profundas', org: 'Paracoccidioides brasiliensis', cat: 'Diagnóstico', tincion: 'profunda', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la paracoccidioidomicosis?',
      a: 'Igual que Histoplasma: directo (observación en fresco, PAS, cultivo lento, antígeno, PCR, biopsia del borde de la lesión) e indirecto (intradermorreacción).'
    },

    // --- Coccidioides immitis/posadasii ---
    {
      id: 'h14', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Vía de transmisión', tincion: 'profunda',
      q: '¿Cómo se transmite la coccidioidomicosis?',
      a: 'Por inhalación de clamidoartroconidias procedentes de la tierra; NO hay contagio interhumano ni zoonosis.'
    },
    {
      id: 'h15', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Hábitat', tincion: 'profunda',
      q: '¿Dónde se encuentra Coccidioides en Argentina?',
      a: 'En la zona de precordillera (Santiago del Estero, Catamarca, San Juan, San Luis, La Rioja, Mendoza y La Pampa), típicamente en zonas secas.'
    },
    {
      id: 'h16', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Patogenia', tincion: 'profunda',
      q: '¿Qué diferencia hay entre las esferas de primoinfección y las esferas quísticas de Coccidioides?',
      a: 'Las esferas de primoinfección son de gran tamaño, con pared celular fina, ostiolo (pequeño orificio), protosporos en la periferia y citoplasma residual central. Tras 3 semanas se transforman en esferas quísticas, más pequeñas, sin ostiolo, con pared celular gruesa y endosporos. La inmunidad celular específica se adquiere entre los 15 y 21 días.'
    },
    {
      id: 'h17', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Patogenia', tincion: 'profunda',
      q: '¿Cómo se disemina Coccidioides desde el pulmón y qué órganos compromete?',
      a: 'Ingresa por vía inhalatoria y desde el pulmón puede diseminarse por vía linfohemática, ocasionando enfermedad que compromete SNC, huesos, piel y ganglios.'
    },
    {
      id: 'h18', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Clínica', tincion: 'profunda',
      q: '¿Cuáles son las dos formas clínicas de la coccidioidomicosis?',
      a: 'Primoinfección sintomática: sintomatología respiratoria desde rinofaringitis hasta bronconeumonía, con hipertermia, cefalea, tos seca o productiva, artralgia y conjuntivitis. Forma progresiva o granuloma coccidioidico: tiende a la diseminación (lleva a la muerte si no se trata), con compromiso pulmonar (infiltrados alveolares, nódulos, pleuresía), adenopatías mediastinales y compromiso de piel, abscesos subcutáneos, meningitis y osteólisis en huesos largos.'
    },
    {
      id: 'h19', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Diagnóstico', tincion: 'profunda', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la coccidioidomicosis?',
      a: 'Igual que las otras micosis profundas: directo (observación en fresco, PAS, cultivo lento, antígeno, PCR) e indirecto (intradermorreacción).'
    },

    // --- Cryptococcus neoformans ---
    {
      id: 'h20', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Características', tincion: 'profunda',
      q: '¿En qué se diferencia Cryptococcus neoformans del resto de las micosis profundas?',
      a: 'Es monomorfo termal (siempre levadura, no tiene fase de moho) y es la única de las micosis profundas que es capsulada (gruesa capa de polisacárido), de forma oval o redonda; tiene crecimiento rápido (24-72hs).'
    },
    {
      id: 'h21', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Hábitat', tincion: 'profunda',
      q: '¿Dónde se encuentra Cryptococcus neoformans y en qué población es la infección micótica más frecuente?',
      a: 'Distribución mundial, se encuentra en el guano de las aves. En pacientes con SIDA es la infección micótica más frecuente.'
    },
    {
      id: 'h22', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Patogenia', tincion: 'profunda',
      q: '¿Por qué se dice que la criptococosis es una "enfermedad señal"?',
      a: 'Porque su diagnóstico obliga al médico a buscar una enfermedad subyacente; en inmunocompetentes tiene carácter autolimitado, mientras que en inmunocomprometidos produce formas clínicas diseminadas y progresivas. Tiene predilección por el SNC, donde puede penetrar la sustancia gris y producir quistes.'
    },
    {
      id: 'h23', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Clínica', tincion: 'profunda',
      q: '¿Cuál es la presentación clínica más frecuente de la criptococosis?',
      a: 'En la mayoría de los casos se presenta meningitis o meningoencefalitis, de evolución aguda o crónica con deterioro inmunológico.'
    },
    {
      id: 'h24', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Clínica', tincion: 'profunda',
      q: '¿Cómo se manifiesta la criptococosis en pacientes con SIDA frente a otros inmunocomprometidos?',
      a: 'En inmunocomprometidos sin SIDA puede dar masas ocupantes en SNC ("criptococomas") con cefalea, convulsiones, confusión, somnolencia y visión borrosa. En pacientes con SIDA: cefalea y fiebre que no ceden con analgésicos, náuseas, vómitos y alteración del estado de conciencia.'
    },
    {
      id: 'h25', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Clínica', tincion: 'profunda',
      q: '¿Cómo se presenta la localización pulmonar de Cryptococcus y con qué se puede confundir?',
      a: 'Como un nódulo solitario en el campo medio pulmonar, que puede confundirse con cáncer. Al diseminarse afecta también lo genito-urinario, piel, hígado y hueso, produciendo neumonía y meningitis.'
    },
    {
      id: 'h26', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Diagnóstico', tincion: 'profunda', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica Cryptococcus neoformans y qué prueba lo diferencia de Candida?',
      a: 'Directo: visualización microscópica, cultivo de LCR/sangre/materiales respiratorios/raspado de lesiones, tinción con tinta china (permite ver la cápsula). Hidroliza la urea, prueba que lo diferencia de Candida. Indirecto: intradermorreacción.'
    },

    // --- Micosis oportunistas: Candida ---
    {
      id: 'h27', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Características', tincion: 'oportunista',
      q: '¿Qué características tiene Candida como oportunista por excelencia?',
      a: 'Es resistente a anfotericina B; levaduras ovaladas que se tiñen Gram positivas; se reproducen por gemación y al invadir tejidos forman pseudohifas o hifas verdaderas; crecen en 24 a 72 horas.'
    },
    {
      id: 'h28', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Hábitat', tincion: 'oportunista',
      q: '¿Dónde se encuentra Candida como parte de la microbiota normal?',
      a: 'Microbiota de piel y mucosas, tracto gastrointestinal, y zonas con mucha humedad y roce del cuerpo (ingles, pliegues submamarios, interdigitales).'
    },
    {
      id: 'h29', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Patogenia', tincion: 'oportunista',
      q: '¿Cómo invade Candida el tejido y qué factores predisponen a la infección?',
      a: 'La levadura se adhiere a las células epiteliales a través de glúcidos de su pared, lo que le permite emitir tubos germinativos que penetran las células e inician la invasión tisular. Predisponen: diabetes, granulopenia, inmunodepresión, SIDA, trasplantes, dispositivos como sondas y catéteres.'
    },
    {
      id: 'h30', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Qué infecciones mucocutáneas produce Candida?',
      a: 'Intertrigo (inflamación en zonas húmedas), dermatitis candidiásica, infecciones interdigitales, onicomicosis, eritema del pañal, muguet oral (en portadores de dentadura protésica, con placas blancas), esofagitis y sicosis (lesiones pustulosas del folículo piloso en la barba).'
    },
    {
      id: 'h31', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Cómo se presenta la candidiasis genital en la mujer y en el varón?',
      a: 'Mujer: vaginitis candidiásica, con prurito vaginal y secreción blanquecina abundante. Varón: balanopostitis en el surco balanoprepucial (inflamación del glande y piel del prepucio).'
    },
    {
      id: 'h32', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Qué caracteriza a las infecciones sistémicas graves por Candida?',
      a: 'Fiebre persistente que no responde a antibióticos y deterioro progresivo de funciones orgánicas; puede dar neumonía, endocarditis subaguda, otitis, sinusitis, artritis, meningitis, fungemia, ITU alta, colitis y osteomielitis; también infecciones asociadas a cuerpos extraños (sondas, catéteres, cánulas).'
    },
    {
      id: 'h33', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Diagnóstico', tincion: 'oportunista', tipoDx: 'directo',
      q: '¿Cómo se diagnostica Candida y por qué NO se busca anticuerpos?',
      a: 'Gram y cultivo en medio de Sabouraud (48-72hs), de exudado de piel/mucosas/catéteres/orina/PAP/raspado. NO se realiza búsqueda de anticuerpos. Sus colonias tienen olor a leche cortada o pan, son blanco-amarillentas, lisas y brillantes (mate y rugosas al envejecer).'
    },

    // --- Malassezia furfur ---
    {
      id: 'h34', grupo: 'Micosis oportunistas', org: 'Malassezia furfur', cat: 'Características', tincion: 'oportunista',
      q: '¿Qué características tiene Malassezia furfur?',
      a: 'Es dimórfico termal y lipofílico; forma parte de la microbiota de la piel, con distribución mundial pero predominio en regiones tropicales y subtropicales.'
    },
    {
      id: 'h35', grupo: 'Micosis oportunistas', org: 'Malassezia furfur', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Qué es la pitiriasis versicolor?',
      a: 'Infección cutánea benigna causada por Malassezia furfur, común en personas con piel grasa: máculas superficiales blancas o tostadas, pequeñas, descamativas, bien limitadas (1-2mm, perifoliculares), principalmente en el tórax, con color que varía de amarillo opaco a pardo; puede haber ligero prurito.'
    },
    {
      id: 'h36', grupo: 'Micosis oportunistas', org: 'Malassezia furfur', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Qué otras patologías cutáneas puede causar Malassezia furfur?',
      a: 'Dermatitis atópica y dermatitis seborreica (caspa, frecuente en pacientes con SIDA); muy raramente infecciones sistémicas por catéteres en neonatos y ancianos.'
    },
    {
      id: 'h37', grupo: 'Micosis oportunistas', org: 'Malassezia furfur', cat: 'Diagnóstico', tincion: 'oportunista', tipoDx: 'directo',
      q: '¿Cómo se diagnostica Malassezia furfur?',
      a: 'Raspado de la lesión, con cultivo en medios enriquecidos con ácidos grasos de cadena larga (medio de Sabouraud con aceite de oliva).'
    },

    // --- Aspergillus ---
    {
      id: 'h38', grupo: 'Micosis oportunistas', org: 'Aspergillus spp.', cat: 'Características', tincion: 'oportunista',
      q: '¿Qué tipo de hongo es Aspergillus y en qué condiciones de laboratorio crece?',
      a: 'Es un moho que crece a diferentes temperaturas en medios de cultivo comunes, con un amplio rango de pH (3 a 8); no es exigente nutricionalmente; produce toxinas que generan hepatotoxicidad (abscesos hepáticos) y también afecta el riñón.'
    },
    {
      id: 'h39', grupo: 'Micosis oportunistas', org: 'Aspergillus spp.', cat: 'Hábitat', tincion: 'oportunista',
      q: '¿Dónde se encuentra Aspergillus?',
      a: 'En hojas y abonos en descomposición, árboles y cosechas de granos, en ambientes húmedos.'
    },
    {
      id: 'h40', grupo: 'Micosis oportunistas', org: 'Aspergillus spp.', cat: 'Patogenia', tincion: 'oportunista',
      q: '¿En qué tipo de pacientes se produce la enfermedad por Aspergillus y por qué vía ingresa?',
      a: 'Compromete a individuos con alteraciones de la inmunidad humoral, celular, de la fagocitosis o de la arquitectura pulmonar. Se produce por vía inhalatoria; las esporas llegan a senos paranasales y árbol respiratorio, donde normalmente son eliminadas por macrófagos y mucosas.'
    },
    {
      id: 'h41', grupo: 'Micosis oportunistas', org: 'Aspergillus spp.', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Cuáles son las formas clínicas alérgicas del aspergillus?',
      a: 'Asma aspergilar (disnea, tos y expectoración filante) y forma broncopulmonar (fiebre, disnea, tos y expectoración mucopurulenta).'
    },
    {
      id: 'h42', grupo: 'Micosis oportunistas', org: 'Aspergillus spp.', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Qué otras formas clínicas puede tener la aspergilosis además de la alérgica?',
      a: 'Diseminada (digestivo, corazón, hígado, riñón), otitis externa con pus, sinusitis, meningitis, cataratas; puede haber signos y síntomas en el SNC en el 40% de los casos.'
    },
    {
      id: 'h43', grupo: 'Micosis oportunistas', org: 'Aspergillus spp.', cat: 'Diagnóstico', tincion: 'oportunista', tipoDx: 'directo',
      q: '¿Cómo se diagnostica Aspergillus?',
      a: 'Igual que Malassezia furfur: raspado de la lesión y cultivo en medios enriquecidos con ácidos grasos de cadena larga.'
    },

    // --- Mucor ---
    {
      id: 'h44', grupo: 'Micosis oportunistas', org: 'Mucor spp.', cat: 'Características', tincion: 'oportunista',
      q: '¿Qué características tiene Mucor?',
      a: 'Es un moho de rápido crecimiento, con gran afinidad por el hierro; no se contagia de persona a persona.'
    },
    {
      id: 'h45', grupo: 'Micosis oportunistas', org: 'Mucor spp.', cat: 'Vía de transmisión', tincion: 'oportunista',
      q: '¿Cómo ingresa Mucor al organismo?',
      a: 'Entra inhalado por hifas, o a través de piel lesionada; se encuentra en el ambiente y en el suelo.'
    },
    {
      id: 'h46', grupo: 'Micosis oportunistas', org: 'Mucor spp.', cat: 'Clínica', tincion: 'oportunista',
      q: '¿Qué es la mucormicosis rinocerebral y cómo llega el hongo al cerebro?',
      a: 'Si se aspira, el hongo llega a la base del cerebro atravesando la lámina cribosa. Otras formas clínicas: pulmonar (dificultad respiratoria), gastrointestinal (diarrea con sangre), cutáneas y subcutáneas, y diseminadas.'
    },
    {
      id: 'h47', grupo: 'Micosis oportunistas', org: 'Mucor spp.', cat: 'Diagnóstico', tincion: 'oportunista', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la mucormicosis?',
      a: 'Cultivo, tinción con azul de Evans y PCR.'
    },

    // --- Micosis superficiales / dermatofitos ---
    {
      id: 'h48', grupo: 'Micosis superficiales', org: 'Dermatofitos (generalidades)', cat: 'Características', tincion: 'superficial',
      q: '¿Qué zonas afectan las micosis superficiales y por qué no invaden más profundamente?',
      a: 'Afectan la piel, mucosas y faneras (pelos y uñas), sin alcanzar el tejido celular subcutáneo y sin invasión sanguínea, porque la capa córnea carece de irrigación.'
    },
    {
      id: 'h49', grupo: 'Micosis superficiales', org: 'Dermatofitos (generalidades)', cat: 'Características', tincion: 'superficial',
      q: '¿Qué características morfológicas comparten los dermatofitos (Epidermophyton, Microsporum, Trichophyton)?',
      a: 'Son hongos filamentosos de hifas finas y septadas; forman esporas asexuales externas llamadas conidios, esenciales para su identificación; crecen después de 5 a 15 días y producen numerosas enzimas extracelulares.'
    },
    {
      id: 'h50', grupo: 'Micosis superficiales', org: 'Dermatofitos (generalidades)', cat: 'Patogenia', tincion: 'superficial',
      q: '¿Qué actividad enzimática les permite a los dermatofitos parasitar la piel?',
      a: 'Tienen actividad queratolítica, que produce descamación de la capa córnea de la piel; son patógenos primarios.'
    },
    {
      id: 'h51', grupo: 'Micosis superficiales', org: 'Epidermophyton', cat: 'Clínica', tincion: 'superficial',
      q: '¿Qué zona parasita habitualmente Epidermophyton y qué produce?',
      a: 'Habitualmente parasita la región inguinal; causa dermatofitosis o tiñas (lesiones aureoladas con cabello roto), con mayor frecuencia en espacios interdigitales de los pies, ingle, mama y cabeza; vesículas, lesiones eritematosas o hiperqueratósicas plantares, o grietas interdigitales.'
    },
    {
      id: 'h52', grupo: 'Micosis superficiales', org: 'Epidermophyton', cat: 'Clínica', tincion: 'superficial',
      q: '¿Cómo son las lesiones en piel glabra y en cuero cabelludo por dermatofitos?',
      a: 'En piel glabra (cara, tronco, extremidades): lesiones circulares, de bordes eritematosos y sobreelevados. En cuero cabelludo: muy inflamatorias, supuradas, con alopecia, de curso tórpido (llamadas "querion"), sin pelo y sucias.'
    },
    {
      id: 'h53', grupo: 'Micosis superficiales', org: 'Epidermophyton', cat: 'Clínica', tincion: 'superficial',
      q: '¿Cómo se afectan las uñas por dermatofitos?',
      a: 'Onicomicosis: uñas engrosadas, que se escaman y son de color amarillo, volviéndose frágiles.'
    },
    {
      id: 'h54', grupo: 'Micosis superficiales', org: 'Epidermophyton', cat: 'Diagnóstico', tincion: 'superficial', tipoDx: 'directo',
      q: '¿Cómo se diagnostican los dermatofitos y por qué no se usa serología?',
      a: 'Raspado de escamas de piel o uñas, o cabello cortado; observación al microscopio óptico con una gota de potasa (disgrega las células de la piel) más colorante de contraste; cultivo en Sabouraud glucosado con antimicrobianos (5 a 15 días, selectivo). NO se busca Ig porque el hongo no pasa a la sangre.'
    },
    {
      id: 'h55', grupo: 'Micosis superficiales', org: 'Microsporum', cat: 'Clínica', tincion: 'superficial',
      q: '¿Qué zona parasita Microsporum y qué secuela característica puede dejar?',
      a: 'Parasita la piel de la cara y el cuello, y los pelos, dando lesiones en escarapela; con frecuencia deja alopecia cicatrizal.'
    },
    {
      id: 'h55b', grupo: 'Micosis superficiales', org: 'Microsporum', cat: 'Diagnóstico', tincion: 'superficial', tipoDx: 'directo',
      q: '¿Cómo se diagnostica una infección por Microsporum?',
      a: 'Igual que el resto de los dermatofitos: raspado de piel/pelos, observación al microscopio con gota de potasa, y cultivo en Sabouraud glucosado con antimicrobianos (5-15 días).'
    },
    {
      id: 'h56', grupo: 'Micosis superficiales', org: 'Trichophyton', cat: 'Clínica', tincion: 'superficial',
      q: '¿Qué zonas parasita Trichophyton?',
      a: 'Parasita la piel de las partes descubiertas de las extremidades superiores, los pelos y las uñas.'
    },
    {
      id: 'h56b', grupo: 'Micosis superficiales', org: 'Trichophyton', cat: 'Diagnóstico', tincion: 'superficial', tipoDx: 'directo',
      q: '¿Cómo se diagnostica una infección por Trichophyton?',
      a: 'Igual que el resto de los dermatofitos: raspado de piel/pelos/uñas, observación al microscopio con gota de potasa, y cultivo en Sabouraud glucosado con antimicrobianos (5-15 días); NO se hace diagnóstico indirecto porque el hongo no pasa a la sangre.'
    },

    // --- Comparaciones de alto rendimiento ---
    {
      id: 'h57', grupo: 'Micosis profundas', org: 'Comparación de micosis profundas dimórficas', cat: 'Comparación', tincion: 'profunda',
      q: '¿Qué diferencia a Cryptococcus neoformans de Histoplasma, Paracoccidioides y Coccidioides en cuanto a su forma?',
      a: 'Estos tres últimos son dimórficos térmicos (moho a temperatura ambiente, levadura a temperatura corporal). Cryptococcus neoformans es monomorfo (siempre levadura) y es el único capsulado del grupo.'
    },
    {
      id: 'h58', grupo: 'Micosis profundas', org: 'Histoplasma vs Coccidioides', cat: 'Comparación', tincion: 'profunda',
      q: '¿En qué se diferencian las zonas endémicas de Histoplasma capsulatum y Coccidioides en Argentina?',
      a: 'Histoplasma es propio de la pampa húmeda (climas templados y húmedos, guano de aves). Coccidioides es propio de la zona seca de precordillera (Santiago del Estero, Catamarca, San Juan, San Luis, La Rioja, Mendoza, La Pampa).'
    },
    {
      id: 'h59', grupo: 'Micosis oportunistas', org: 'Candida vs Cryptococcus', cat: 'Comparación', tincion: 'oportunista',
      q: '¿En qué se diferencian Candida y Cryptococcus neoformans en su tinción de Gram y su reproducción?',
      a: 'Candida se tiñe Gram positiva y se reproduce por gemación, formando pseudohifas al invadir tejido. Cryptococcus es capsulado, se identifica mejor con tinta china que con Gram, y no forma pseudohifas.'
    },
    {
      id: 'h60', grupo: 'Micosis oportunistas', org: 'Aspergillus vs Mucor', cat: 'Comparación', tincion: 'oportunista',
      q: '¿Qué tienen en común Aspergillus y Mucor como oportunistas, y en qué se diferencian sus formas clínicas más graves?',
      a: 'Ambos son mohos ambientales que ingresan por vía inhalatoria y afectan a inmunodeprimidos. Aspergillus tiene formas alérgicas, colonizantes e invasivas con compromiso de SNC en el 40%; Mucor se distingue por su forma rinocerebral, avanzando a través de la lámina cribosa.'
    },
    {
      id: 'h61', grupo: 'Micosis superficiales', org: 'Epidermophyton vs Microsporum vs Trichophyton', cat: 'Comparación', tincion: 'superficial',
      q: '¿Cómo se diferencian los tres géneros de dermatofitos según la zona del cuerpo que prefieren parasitar?',
      a: 'Epidermophyton: región inguinal principalmente (también pies, mama, cabeza). Microsporum: piel de cara y cuello, y pelos (con alopecia cicatrizal). Trichophyton: piel de zonas descubiertas de brazos, pelos y uñas.'
    },
  ],
  mc: [
    {
      id: 'hmc1', grupo: 'Micosis profundas', org: 'Generalidades', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Cuál es la principal vía de contagio de las micosis profundas y qué NO ocurre entre personas?',
      options: ['Vía sexual; sí hay contagio interhumano', 'Vía inhalatoria; NO hay contagio de persona a persona', 'Vía digestiva; sí hay contagio interhumano', 'Picadura de insectos; NO hay contagio de persona a persona'],
      correct: 1, explain: 'La vía inhalatoria (inspirar hifas) es la más común; las micosis profundas NO se transmiten de persona a persona, sino del ambiente o animales al hombre.'
    },
    {
      id: 'hmc2', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: 'Un paciente de zona rural de Santa Fe que limpió un gallinero desarrolla un cuadro respiratorio similar a una neumonía viral, autolimitado. ¿Qué hongo es el más probable?',
      options: ['Coccidioides immitis', 'Histoplasma capsulatum', 'Cryptococcus neoformans', 'Trichophyton spp.'],
      correct: 1, explain: 'Histoplasma capsulatum se asocia al guano de aves (gallineros, palomares) en la pampa húmeda, y la mayoría de las infecciones son asintomáticas o cursan como un cuadro respiratorio agudo autolimitado.'
    },
    {
      id: 'hmc3', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Con qué enfermedad se hace diagnóstico diferencial en la forma crónica cavitaria apical de la histoplasmosis?',
      options: ['Tuberculosis', 'Sífilis terciaria', 'Botulismo', 'Difteria'],
      correct: 0, explain: 'La forma crónica de la histoplasmosis, con cavitación de localización apical, es diagnóstico diferencial con tuberculosis.'
    },
    {
      id: 'hmc4', grupo: 'Micosis profundas', org: 'Paracoccidioides brasiliensis', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿En qué regiones de Argentina es endémica la paracoccidioidomicosis?',
      options: ['Patagonia y Cuyo', 'Noreste y noroeste argentino', 'Zona pampeana exclusivamente', 'Zona costera atlántica'],
      correct: 1, explain: 'Se encuentra en el noreste (Chaco, Misiones, Formosa) y noroeste argentino (Salta, Jujuy, Tucumán), en climas tropicales y subtropicales.'
    },
    {
      id: 'hmc5', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Qué característica distingue a Coccidioides del resto de las micosis profundas en cuanto al contagio?',
      options: ['Se transmite persona a persona por gotas', 'Es una zoonosis transmitida por roedores', 'No hay contagio interhumano ni zoonosis', 'Se transmite por vía sexual'],
      correct: 2, explain: 'A diferencia de otras infecciones, la coccidioidomicosis no tiene contagio interhumano ni es una zoonosis; se adquiere por inhalación de artroconidias del suelo.'
    },
    {
      id: 'hmc6', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Qué estructura de Coccidioides posee ostiolo, pared fina y protosporos periféricos?',
      options: ['La esfera quística tardía', 'La esfera de primoinfección', 'El conidio asexual', 'El cuerpo elemental'],
      correct: 1, explain: 'La esfera de primoinfección es de gran tamaño, pared fina, con ostiolo y protosporos en la periferia; luego de 3 semanas se transforma en la esfera quística (sin ostiolo, pared gruesa, con endosporos).'
    },
    {
      id: 'hmc7', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Por qué se dice que la criptococosis es una "enfermedad señal"?',
      options: ['Porque siempre es la primera manifestación del SIDA', 'Porque su diagnóstico obliga a buscar una enfermedad subyacente', 'Porque solo afecta a niños', 'Porque siempre se acompaña de una fractura ósea'],
      correct: 1, explain: 'El hallazgo de criptococosis obliga al médico a investigar una enfermedad subyacente (como inmunodeficiencia), ya que en huéspedes sanos suele ser autolimitada.'
    },
    {
      id: 'hmc8', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Qué característica morfológica distingue a Cryptococcus neoformans del resto de las micosis profundas?',
      options: ['Es dimórfico termal (moho/levadura)', 'Es monomorfo termal y capsulado', 'Forma esferas con endosporos', 'Es un moho de crecimiento lento'],
      correct: 1, explain: 'Cryptococcus es monomorfo termal (siempre levadura) y es la única micosis profunda con cápsula de polisacárido.'
    },
    {
      id: 'hmc9', grupo: 'Micosis profundas', org: 'Cryptococcus neoformans', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Qué tinción se usa para observar la cápsula de Cryptococcus neoformans?',
      options: ['Ziehl-Neelsen', 'Tinta china', 'Gram', 'Azul de Evans'],
      correct: 1, explain: 'La tinción con tinta china permite visualizar el halo transparente de la cápsula alrededor de la levadura.'
    },
    {
      id: 'hmc10', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Cómo se tiñen las levaduras de Candida con la técnica de Gram?',
      options: ['Gram negativas', 'Gram positivas', 'No se tiñen con Gram', 'Ácido-alcohol resistentes'],
      correct: 1, explain: 'A diferencia de las bacterias gram negativas, las levaduras de Candida se tiñen Gram positivas.'
    },
    {
      id: 'hmc11', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Se realiza búsqueda de anticuerpos (Ac) en el diagnóstico de rutina de Candida?',
      options: ['Sí, es el método principal', 'No, el diagnóstico es directo (Gram y cultivo)', 'Solo en pacientes con SIDA', 'Solo en infecciones vaginales'],
      correct: 1, explain: 'El texto de cátedra indica explícitamente que NO se realiza búsqueda de anticuerpos para Candida; el diagnóstico es directo.'
    },
    {
      id: 'hmc12', grupo: 'Micosis oportunistas', org: 'Candida spp.', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: 'Un paciente con dentadura protésica presenta placas blancas en la mucosa oral. ¿Cómo se llama este cuadro?',
      options: ['Querion', 'Muguet', 'Pitiriasis versicolor', 'Tiña corporis'],
      correct: 1, explain: 'El muguet es la candidiasis oral típica de portadores de dentadura protésica, con placas blancas sobre mucosa enrojecida.'
    },
    {
      id: 'hmc13', grupo: 'Micosis oportunistas', org: 'Malassezia furfur', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Qué característica metabólica distintiva tiene Malassezia furfur?',
      options: ['Es halófilo', 'Es lipofílico', 'Es ureasa positivo', 'Es anaerobio estricto'],
      correct: 1, explain: 'Malassezia furfur es lipofílico, lo que explica su predilección por zonas seborreicas ricas en lípidos.'
    },
    {
      id: 'hmc14', grupo: 'Micosis oportunistas', org: 'Aspergillus spp.', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿En qué tipo de paciente es más probable que se desarrolle enfermedad invasiva por Aspergillus?',
      options: ['Paciente inmunocompetente sano', 'Paciente con alteración de inmunidad humoral, celular o fagocitosis', 'Paciente pediátrico sin comorbilidades', 'Paciente con hipertensión arterial'],
      correct: 1, explain: 'Aspergillus compromete a individuos con alteraciones de la inmunidad humoral, celular, de la fagocitosis o de la arquitectura pulmonar.'
    },
    {
      id: 'hmc15', grupo: 'Micosis oportunistas', org: 'Mucor spp.', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Por qué vía anatómica avanza la mucormicosis rinocerebral hacia el cerebro?',
      options: ['A través del nervio óptico', 'A través de la lámina cribosa', 'A través del conducto auditivo interno', 'A través del foramen magno'],
      correct: 1, explain: 'El hongo, tras ser aspirado, puede atravesar la lámina cribosa y llegar a la base del cerebro, produciendo la forma rinocerebral.'
    },
    {
      id: 'hmc16', grupo: 'Micosis oportunistas', org: 'Mucor spp.', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Con qué elemento tiene gran afinidad Mucor, lo cual explica su agresividad en ciertos pacientes?',
      options: ['Calcio', 'Hierro', 'Potasio', 'Zinc'],
      correct: 1, explain: 'Mucor tiene gran afinidad con el hierro, por lo que pacientes con sobrecarga de hierro o cetoacidosis diabética son especialmente susceptibles.'
    },
    {
      id: 'hmc17', grupo: 'Micosis superficiales', org: 'Dermatofitos (generalidades)', cat: 'Opción múltiple', tincion: 'superficial', type: 'mc',
      q: '¿Por qué las micosis superficiales no invaden el tejido celular subcutáneo ni la sangre?',
      options: ['Porque el sistema inmune las destruye antes', 'Porque la capa córnea carece de irrigación', 'Porque los dermatofitos son anaerobios estrictos', 'Porque no poseen enzimas queratolíticas'],
      correct: 1, explain: 'La capa córnea de la piel carece de irrigación sanguínea, lo que limita a los dermatofitos a esa capa superficial.'
    },
    {
      id: 'hmc18', grupo: 'Micosis superficiales', org: 'Dermatofitos (generalidades)', cat: 'Opción múltiple', tincion: 'superficial', type: 'mc',
      q: '¿Por qué NO se realiza diagnóstico por inmunoglobulinas (Ig) para los dermatofitos?',
      options: ['Porque no generan respuesta inmune', 'Porque el hongo no pasa a la sangre', 'Porque reaccionan de forma cruzada con Candida', 'Porque el diagnóstico directo es imposible'],
      correct: 1, explain: 'Al limitarse a la capa córnea sin invasión sanguínea, los dermatofitos no generan una respuesta serológica útil para el diagnóstico.'
    },
    {
      id: 'hmc19', grupo: 'Micosis superficiales', org: 'Epidermophyton', cat: 'Opción múltiple', tincion: 'superficial', type: 'mc',
      q: '¿Cómo se llama la lesión inflamatoria, supurada y con alopecia del cuero cabelludo producida por dermatofitos?',
      options: ['Querion', 'Muguet', 'Chancro', 'Criptococoma'],
      correct: 0, explain: 'El querion es una lesión muy inflamatoria y supurada del cuero cabelludo, con alopecia y curso tórpido.'
    },
    {
      id: 'hmc20', grupo: 'Micosis superficiales', org: 'Microsporum', cat: 'Opción múltiple', tincion: 'superficial', type: 'mc',
      q: '¿Qué secuela característica puede dejar la infección por Microsporum en el cuero cabelludo?',
      options: ['Alopecia cicatrizal', 'Hiperpigmentación permanente', 'Hipertricosis', 'Vitíligo'],
      correct: 0, explain: 'Microsporum parasita piel de cara y cuello, y pelos, dando lesiones en escarapela que con frecuencia dejan alopecia cicatrizal.'
    },
    {
      id: 'hmc21', grupo: 'Micosis profundas', org: 'Histoplasma vs Paracoccidioides', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Cuál es la vía de ingreso común a Histoplasma, Paracoccidioides y Coccidioides?',
      options: ['Vía cutánea exclusivamente', 'Vía inhalatoria', 'Vía digestiva', 'Vía transplacentaria'],
      correct: 1, explain: 'Las tres micosis profundas dimórficas ingresan principalmente por vía inhalatoria, aunque su hábitat y zona geográfica difieren.'
    },
    {
      id: 'hmc22', grupo: 'Micosis oportunistas', org: 'Candida vs Cryptococcus', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Qué prueba bioquímica permite diferenciar a Cryptococcus neoformans de Candida en el laboratorio?',
      options: ['Coagulasa', 'Hidrólisis de la urea', 'Catalasa', 'Oxidasa'],
      correct: 1, explain: 'Cryptococcus neoformans hidroliza la urea (ureasa positivo), una prueba de diferenciación clave respecto de Candida.'
    },
    {
      id: 'hmc23', grupo: 'Micosis profundas', org: 'Coccidioides immitis / posadasii', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Cuánto tiempo tarda en adquirirse la inmunidad celular específica tras la infección por Coccidioides?',
      options: ['24 a 48 horas', '15 a 21 días', '6 meses', '2 años'],
      correct: 1, explain: 'La inmunidad celular específica frente a Coccidioides se adquiere entre los 15 y 21 días posteriores a la infección.'
    },
    {
      id: 'hmc24', grupo: 'Micosis oportunistas', org: 'Aspergillus vs Mucor', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Cuál de estos hallazgos es más característico de la mucormicosis que de la aspergilosis?',
      options: ['Asma alérgica con expectoración filante', 'Forma rinocerebral con progresión a través de la lámina cribosa', 'Otitis externa con pus', 'Cataratas'],
      correct: 1, explain: 'La forma rinocerebral, con avance a través de la lámina cribosa hacia la base del cerebro, es característica de Mucor, no de Aspergillus.'
    },
    {
      id: 'hmc25', grupo: 'Micosis profundas', org: 'Histoplasma capsulatum', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Dónde se encuentra la fase micelial (moho) de Histoplasma capsulatum?',
      options: ['Solo en los tejidos del huésped', 'Solo en el suelo, nunca en los tejidos', 'Tanto en el suelo como en los tejidos por igual', 'Solo dentro de macrófagos'],
      correct: 1, explain: 'La fase micelial de Histoplasma se encuentra exclusivamente en el suelo; en los tejidos siempre se presenta como levadura.'
    },

    {
      id: 'hmc26', grupo: 'Micosis profundas', org: 'Comparación de micosis profundas', cat: 'Opción múltiple', tincion: 'profunda', type: 'mc',
      q: '¿Cuál de estas micosis profundas es monomorfa (siempre levadura) y capsulada, a diferencia de las demás?',
      options: ['Histoplasma capsulatum', 'Paracoccidioides brasiliensis', 'Cryptococcus neoformans', 'Coccidioides immitis'],
      correct: 2, explain: 'Cryptococcus neoformans es monomorfo termal (siempre levadura) y es el único capsulado entre las micosis profundas; el resto son dimórficos.'
    },
    {
      id: 'hmc27', grupo: 'Micosis oportunistas', org: 'Candida vs Cryptococcus', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Cómo se tiñe Candida con la técnica de Gram, a diferencia de la mayoría de las bacterias gram negativas del tubo digestivo?',
      options: ['Gram negativa', 'Gram positiva', 'No se tiñe con Gram', 'Ácido-alcohol resistente'],
      correct: 1, explain: 'A pesar de convivir con enterobacterias gram negativas en el tubo digestivo, Candida (un hongo) se tiñe Gram positiva.'
    },
    {
      id: 'hmc28', grupo: 'Micosis oportunistas', org: 'Mucor', cat: 'Opción múltiple', tincion: 'oportunista', type: 'mc',
      q: '¿Qué factor de riesgo clásico (además de la inmunosupresión) predispone especialmente a la mucormicosis?',
      options: ['Sobrecarga de hierro / cetoacidosis diabética', 'Déficit de vitamina C', 'Hipotiroidismo', 'Anemia ferropénica'],
      correct: 0, explain: 'Mucor tiene gran afinidad por el hierro, por lo que estados de sobrecarga de hierro o cetoacidosis diabética (que altera el metabolismo del hierro) son factores de riesgo clásicos.'
    },
    {
      id: 'hmc29', grupo: 'Micosis superficiales', org: 'Dermatofitos', cat: 'Opción múltiple', tincion: 'superficial', type: 'mc',
      q: '¿Cuál de estos géneros de dermatofitos parasita típicamente la región inguinal?',
      options: ['Epidermophyton', 'Microsporum', 'Trichophyton', 'Ninguno; los tres evitan la ingle'],
      correct: 0, explain: 'Epidermophyton parasita habitualmente la región inguinal, además de espacios interdigitales de los pies, mama y cabeza.'
    },

    {
      id: 'hmc30', grupo: 'Micosis superficiales', org: 'Microsporum vs Trichophyton', cat: 'Opción múltiple', tincion: 'superficial', type: 'mc',
      q: 'Un paciente presenta lesiones en escarapela en cara y cuello, con alopecia cicatrizal. ¿Qué dermatofito es el más probable?',
      options: ['Epidermophyton', 'Microsporum', 'Trichophyton', 'Malassezia furfur'],
      correct: 1, explain: 'Microsporum parasita típicamente la piel de cara y cuello, y los pelos, dejando con frecuencia alopecia cicatrizal.'
    },
  ]
};
