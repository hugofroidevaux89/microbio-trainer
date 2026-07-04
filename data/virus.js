/* Datos del módulo: Virus — fuente: VIRUS.pdf */
window.MODULE = {
  title: 'Virus',
  source: 'VIRUS.pdf',
  storageKey: 'virus',
  categoryColors: {
    arn: { label: 'ARN', color: '#e0568e' },
    adn: { label: 'ADN', color: '#a97ce0' },
    retrovirus: { label: 'Retrovirus', color: '#d8a53d' }
  },
  cards: [
    // --- Generalidades ---
    {
      id: 'v0', grupo: 'Virus hemorrágicos', org: 'Generalidades', cat: 'Características', tincion: 'arn',
      q: '¿Qué característica estructural común tienen los virus hemorrágicos y qué implica para su supervivencia ambiental?',
      a: 'Son virus ARN envueltos, lo que los hace lábiles a agentes físico-químicos (se inactivan fácilmente fuera del huésped).'
    },
    {
      id: 'v0b', grupo: 'Virus hemorrágicos', org: 'Arenavirus (generalidades)', cat: 'Transmisión', tincion: 'arn',
      q: '¿Por qué vector se transmiten los Arenavirus?',
      a: 'Por roedores, que liberan el virus a través de orina, heces y sangre.'
    },
    {
      id: 'v0c', grupo: 'Arbovirus', org: 'Generalidades (Flaviviridae)', cat: 'Transmisión', tincion: 'arn',
      q: '¿Qué tienen en común Dengue, Fiebre amarilla, Zika y Chikungunya en cuanto a su transmisión?',
      a: 'Son Arbovirus de la familia Flaviviridae, transmitidos por artrópodos (mosquitos, principalmente Aedes aegypti).'
    },

    // --- Virus Junín (FHA) ---
    {
      id: 'v1', grupo: 'Virus hemorrágicos', org: 'Virus Junín (FHA)', cat: 'Transmisión', tincion: 'arn',
      q: '¿Cómo se transmite el virus Junín y cuál es su reservorio?',
      a: 'Reservorio: ratón maicero, que libera el virus por orina, heces y sangre. Vías: inhalatoria (principal), cutáneomucosa (heridas o conjuntivas) e ingestión.'
    },
    {
      id: 'v2', grupo: 'Virus hemorrágicos', org: 'Virus Junín (FHA)', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico de inicio de la fiebre hemorrágica argentina?',
      a: 'Tras una incubación de 4-21 días: decaimiento, cefalea, hipertonía moderada, mialgia, artralgia, lumbalgia, dolor retroocular, náuseas, vómitos, gingivorragias y epistaxis (si hay hemorragias), exantema en cara/cuello/tórax, edema periorbitario, lengua saburral y adenomegalias cervicales pequeñas.'
    },
    {
      id: 'v3', grupo: 'Virus hemorrágicos', org: 'Virus Junín (FHA)', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué compromiso cardiovascular, neurológico y renal produce la fiebre hemorrágica argentina, y qué dato clínico ayuda a diferenciarla de un cuadro respiratorio?',
      a: 'CV: bradicardia e hipotensión. Neuro: irritabilidad, somnolencia, ataxia moderada, hiperestesia cutánea, hipo/arreflexia. Nefro: IRA infrecuente (necrosis tubular aguda). Dato clave: ausencia de tos productiva o congestión nasal.'
    },
    {
      id: 'v4', grupo: 'Virus hemorrágicos', org: 'Virus Junín (FHA)', cat: 'Hábitat', tincion: 'arn',
      q: '¿Dónde es endémica la fiebre hemorrágica argentina y cuándo ocurren los brotes?',
      a: 'Pampa húmeda (noroeste de Buenos Aires, sur de Santa Fe, sureste de Córdoba y noreste de La Pampa); brotes estacionales en otoño e invierno, con pico en mayo.'
    },
    {
      id: 'v5', grupo: 'Virus hemorrágicos', org: 'Virus Junín (FHA)', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la fiebre hemorrágica argentina y existe vacuna?',
      a: 'Directo: hemograma (leucopenia, plaquetopenia), orina (proteinuria con cilindros hialinos), PCR (detecta viremia). Indirecto: ELISA, búsqueda de Ig. Existe vacuna con virus atenuado.'
    },

    // --- Virus Hanta ---
    {
      id: 'v6', grupo: 'Virus hemorrágicos', org: 'Virus Hanta', cat: 'Transmisión', tincion: 'arn',
      q: '¿Cuál es el reservorio y vía de transmisión del virus Hanta?',
      a: 'Reservorio: ratón colilargo, libera el virus por orina, heces y sangre. Transmisión: aerosoles y mordeduras.'
    },
    {
      id: 'v7', grupo: 'Virus hemorrágicos', org: 'Virus Hanta', cat: 'Clínica', tincion: 'arn',
      q: '¿En qué consiste el síndrome pulmonar por Hanta (SPH) y cuál es su mecanismo fisiopatológico?',
      a: 'Cuadro viral inicial (fiebre, mialgias, cefalea, vómitos, diarrea); a los 4 días aparece tos no productiva con rápida evolución a distrés respiratorio y plaquetopenia marcada. Los linfocitos T actúan sobre el endotelio pulmonar infectado, aumentando la permeabilidad vascular y generando edema pulmonar (taquipnea, disnea, taquicardia).'
    },
    {
      id: 'v8', grupo: 'Virus hemorrágicos', org: 'Virus Hanta', cat: 'Clínica', tincion: 'arn',
      q: '¿Cómo se presenta la fiebre hemorrágica con síndrome renal (FHSR, forma europea/asiática de Hanta)?',
      a: 'Fiebre abrupta, cefaleas, mialgias, debilidad, mareos, petequias y compromiso renal (primero anuria, luego poliuria), con alteración hidroelectrolítica, hipotensión, shock y coagulación intravascular diseminada; el riñón sufre necrosis tubular.'
    },
    {
      id: 'v9', grupo: 'Virus hemorrágicos', org: 'Virus Hanta', cat: 'Hábitat', tincion: 'arn',
      q: '¿Dónde es endémico el síndrome pulmonar por Hanta en Argentina?',
      a: 'Cordillera y sur, Cuyo y Entre Ríos (Mendoza, San Juan, San Luis, La Rioja, Buenos Aires, Santa Fe, Neuquén, Río Negro y Chubut).'
    },
    {
      id: 'v10', grupo: 'Virus hemorrágicos', org: 'Virus Hanta', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostican el SPH y la FHSR, y existe vacuna?',
      a: 'SPH: sangre (trombocitopenia, hemoconcentración, predominio de PMN), búsqueda de Ag, PCR, IgM por ELISA. FHSR: seroconversión de IgG, PCR (búsqueda del genoma). NO hay vacuna.'
    },

    // --- Dengue ---
    {
      id: 'v11', grupo: 'Arbovirus', org: 'Dengue', cat: 'Características', tincion: 'arn',
      q: '¿Qué vector transmite el Dengue y cuántos serotipos existen?',
      a: 'Aedes aegypti; existen 4 serotipos.'
    },
    {
      id: 'v12', grupo: 'Arbovirus', org: 'Dengue', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro del síndrome febril inespecífico por dengue?',
      a: 'Mialgia, artralgia, fiebre alta (>39°C), cefalea, náuseas, vómitos, dolor retroocular, petequias, dolor abdominal intenso, somnolencia, irritabilidad, hepatomegalia, hipertensión, diarrea, linfadenopatía (leucopenia y trombocitopenia), exantema maculopapular.'
    },
    {
      id: 'v13', grupo: 'Arbovirus', org: 'Dengue', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuándo es más frecuente la fiebre hemorrágica/síndrome de shock por dengue y qué la caracteriza?',
      a: 'Es más frecuente en personas infectadas por un segundo serotipo diferente. Inicia como el dengue clásico, pero la fiebre desciende bruscamente, el paciente se deteriora rápidamente con falla circulatoria, hemorragias, shock y muerte, con hemorragias y necrosis en hígado, médula ósea, órganos linfoides, corazón, pulmón y riñón.'
    },
    {
      id: 'v14', grupo: 'Arbovirus', org: 'Dengue', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuáles son los signos de alarma del dengue que anticipan una evolución grave?',
      a: 'Vómitos persistentes, dolor abdominal intenso, hemorragia, somnolencia/irritabilidad, hipotensión, hepatomegalia y aumento brusco del hematocrito.'
    },
    {
      id: 'v15', grupo: 'Arbovirus', org: 'Dengue', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica el dengue y existe vacuna?',
      a: 'Directo: sangre (leucopenia, trombocitopenia, hemoconcentración), búsqueda de Ag, PCR. Indirecto: búsqueda de Ig (tarda 15 días en positivizarse). Aumentan las transaminasas. Existe vacuna.'
    },

    // --- Fiebre amarilla ---
    {
      id: 'v16', grupo: 'Arbovirus', org: 'Fiebre amarilla', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico de la fiebre amarilla y por qué órgano tiene predilección?',
      a: 'Fiebre alta, bradicardia, mialgias, postración, vómitos, ictericia (por daño hepatocelular), cefalea, pérdida de apetito, dolor abdominal, mareo. El hígado es el órgano blanco: necrosis mediolobulillar de hepatocitos y hepatosis grasa microvacuolar.'
    },
    {
      id: 'v17', grupo: 'Arbovirus', org: 'Fiebre amarilla', cat: 'Clínica', tincion: 'arn',
      q: '¿Cómo se manifiesta la forma grave de la fiebre amarilla?',
      a: 'Proteinuria, fallo renal y hepático, y hemorragia; también aumentan las transaminasas.'
    },
    {
      id: 'v18', grupo: 'Arbovirus', org: 'Fiebre amarilla', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Dónde es endémica la fiebre amarilla y cómo se diagnostica?',
      a: 'Áreas tropicales de África, América Central y del Sur, con incubación de 3-6 días. Diagnóstico: búsqueda de Ag (directo), búsqueda de Ig (indirecto), sangre (leucopenia, trombocitopenia).'
    },

    // --- Zika ---
    {
      id: 'v19', grupo: 'Arbovirus', org: 'Zika', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico habitual del Zika y por qué es especialmente relevante en embarazadas?',
      a: 'Dolor de cabeza, malestar, fiebre baja, sarpullido con prurito (incubación 3-14 días). En embarazadas puede causar aborto, alteraciones neurológicas del feto, microcefalia y anencefalia.'
    },
    {
      id: 'v20', grupo: 'Arbovirus', org: 'Zika', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica el Zika?',
      a: 'Sangre (leucopenia, trombocitopenia, hemoconcentración), búsqueda de Ag, búsqueda de Ig, PCR.'
    },

    // --- Chikungunya ---
    {
      id: 'v21', grupo: 'Arbovirus', org: 'Chikungunya', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico del Chikungunya y qué particularidad tiene respecto al embarazo?',
      a: 'Fiebre, mialgia, artralgia, cefalea, náuseas, erupción cutánea (incubación 2-12 días). A diferencia del Zika, el Chikungunya NO se contagia durante el embarazo.'
    },

    // --- Influenza ---
    {
      id: 'v22', grupo: 'Virus ARN envueltos', org: 'Influenza', cat: 'Características', tincion: 'arn',
      q: '¿Qué dos glicoproteínas de superficie posee el virus Influenza y qué función cumple cada una?',
      a: 'Hemaglutinina (HA, 40%): se une al receptor del epitelio respiratorio y también a receptores de los glóbulos rojos (hemaglutinación). Neuraminidasa (NA, 5%): degrada la capa de moco protectora del epitelio, potenciando la infección.'
    },
    {
      id: 'v23', grupo: 'Virus ARN envueltos', org: 'Influenza', cat: 'Características', tincion: 'arn',
      q: '¿Cómo se diferencian los géneros A, B y C del virus Influenza?',
      a: 'A: causa pandemias y epidemias, reservorio en aves acuáticas (todas las variantes de HA y NA), los cerdos pueden coinfectarse con 2 variantes generando recombinación genética y nuevas variantes que alcanzan al hombre. B: causa epidemias, reservorio exclusivamente humano. C: cuadro leve y autolimitado.'
    },
    {
      id: 'v24', grupo: 'Virus ARN envueltos', org: 'Influenza', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico típico de la gripe y sus complicaciones en edades extremas?',
      a: 'Cuadro febril (38-39°C), cefalea, mialgias, faringitis, traqueítis con tos seca, afección del estado general, dolor retroorbital, fotofobia, lagrimeo. Complicaciones: otitis media en niños, neumonía en ancianos; puede agravar procesos crónicos de la vía aérea (asma, EPOC, fibrosis quística).'
    },
    {
      id: 'v25', grupo: 'Virus ARN envueltos', org: 'Influenza', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la influenza?',
      a: 'Búsqueda de antígeno (directo), búsqueda de inmunoglobulinas (indirecto) y PCR; muestra de hisopado o aspirado nasofaríngeo.'
    },

    // --- VSR ---
    {
      id: 'v26', grupo: 'Virus ARN envueltos', org: 'Virus Respiratorio Sincitial (VSR)', cat: 'Características', tincion: 'arn',
      q: '¿Qué glicoproteínas posee el VSR y por qué NO produce viremia?',
      a: 'Glicoproteína G (adhesina) y glicoproteína F (promueve la fusión con la célula infectada). Se replica en la nasofaringe y se propaga célula a célula sin pasar al líquido extracelular, por lo que no produce viremia.'
    },
    {
      id: 'v27', grupo: 'Virus ARN envueltos', org: 'Virus Respiratorio Sincitial (VSR)', cat: 'Clínica', tincion: 'arn',
      q: '¿Por qué es clínicamente tan relevante el VSR en pediatría?',
      a: 'Es la causa más común de infecciones respiratorias agudas en niños. En casos graves, la tos y las sibilancias progresan con disnea, hipoxia y apnea; es especialmente peligroso en lactantes, ancianos e inmunodeprimidos, causando bronquiolitis y neumonía.'
    },
    {
      id: 'v28', grupo: 'Virus ARN envueltos', org: 'Virus Respiratorio Sincitial (VSR)', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'directo',
      q: '¿Por qué la búsqueda de inmunoglobulinas no es útil para el diagnóstico agudo del VSR?',
      a: 'Porque las Ig se obtienen recién después de 2-4 semanas, por lo que solo sirven como diagnóstico retrospectivo, no agudo. El diagnóstico útil es directo: aspirado nasofaríngeo, búsqueda de Ag y PCR.'
    },

    // --- Parainfluenza ---
    {
      id: 'v29', grupo: 'Virus ARN envueltos', org: 'Parainfluenza', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué manifestación clínica distintiva produce cada serotipo de Parainfluenza?',
      a: 'Serotipos 1 y 2: laringitis. Serotipo 3: neumonía. Serotipo 4: infecciones leves. El cuadro general es fiebre, rinorrea, dolor de garganta y tos, más leve que la influenza, en otoño e invierno.'
    },

    // --- Metapneumovirus ---
    {
      id: 'v30', grupo: 'Virus ARN envueltos', org: 'Metapneumovirus', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué cuadro produce el Metapneumovirus y con qué otro virus respiratorio se parece?',
      a: 'Es agente de neumonía y bronquitis en niños pequeños; cuadro similar al VSR (tos, congestión, secreción nasal, fiebre) que al agravarse puede derivar en bronquiolitis o neumonía.'
    },

    // --- Sarampión ---
    {
      id: 'v31', grupo: 'Virus ARN envueltos', org: 'Sarampión', cat: 'Patogenia', tincion: 'arn',
      q: '¿Cómo se disemina el virus del sarampión en el organismo?',
      a: 'Afecta las células de las vías respiratorias superiores, pasa a los linfáticos y de allí a múltiples órganos (piel, conjuntiva, riñón, tracto GI, mucosa genital, hígado, mucosa respiratoria y pulmón), donde se replica y aparecen lesiones en mucosa oral y exantema cutáneo.'
    },
    {
      id: 'v32', grupo: 'Virus ARN envueltos', org: 'Sarampión', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el signo patognomónico del sarampión y cómo es el exantema?',
      a: 'Las manchas de Koplik: pequeñas lesiones en la mucosa bucal, rojas y brillantes, con un punto blanco central. El exantema es maculopapular, comienza en la cara y detrás de las orejas, y se distribuye por todo el cuerpo, acompañado de conjuntivitis con fotofobia (puede llevar a ceguera), rinorrea y tos con expectoración.'
    },
    {
      id: 'v33', grupo: 'Virus ARN envueltos', org: 'Sarampión', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué complicaciones neurológicas graves puede producir el sarampión?',
      a: 'La encefalitis aguda y la panencefalitis esclerosante subaguda, ambas con daño cerebral progresivo y siempre consecuencias fatales; la pérdida de cilias predispone a otitis media y bronconeumonía por reinfección secundaria.'
    },
    {
      id: 'v34', grupo: 'Virus ARN envueltos', org: 'Sarampión', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica el sarampión y qué relación hay entre el exantema y la respuesta inmune?',
      a: 'Diagnóstico clínico (manchas de Koplik), búsqueda de Ag, PCR (directos) e IgM (indirecto). La patogenia es inmunitaria: la aparición del exantema coincide con la aparición de la respuesta inmune y la eliminación del virus del organismo. Hay vacuna.'
    },

    // --- Parotiditis ---
    {
      id: 'v35', grupo: 'Virus ARN envueltos', org: 'Parotiditis', cat: 'Patogenia', tincion: 'arn',
      q: '¿Cómo se disemina el virus de la parotiditis y qué órganos puede afectar?',
      a: 'Infecta la vía respiratoria y luego se disemina por sangre a glándulas, tiroides, testículos (si es bilateral puede dejar esterilidad), ovarios, páncreas y meninges.'
    },
    {
      id: 'v36', grupo: 'Virus ARN envueltos', org: 'Parotiditis', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico típico de la parotiditis (paperas)?',
      a: 'Fiebre, malestar general, cefalea, mialgia, anorexia, cansancio, hinchazón facial y tumefacción dolorosa de las glándulas parótidas; complicaciones infrecuentes: meningoencefalitis, orquitis, ooforitis, nefritis, artritis.'
    },

    // --- Rubéola ---
    {
      id: 'v37', grupo: 'Virus ARN envueltos', org: 'Rubéola', cat: 'Patogenia', tincion: 'arn',
      q: '¿Cómo se disemina el virus de la rubéola tras la infección respiratoria?',
      a: 'Se multiplica en el epitelio respiratorio y pasa a ganglios linfáticos, originando linfadenomegalia y dando lugar a una viremia persistente a través de la cual se dispersa y localiza en diversos órganos.'
    },
    {
      id: 'v38', grupo: 'Virus ARN envueltos', org: 'Rubéola', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico de la rubéola postnatal?',
      a: 'Fiebre escasa, astenia, artromialgia (más afectadas las metacarpofalángicas, también rodillas y tobillos), poliadenomegalias (postauricular, suboccipital, laterocervical) y exantema maculopapular diseminado.'
    },
    {
      id: 'v39', grupo: 'Virus ARN envueltos', org: 'Rubéola', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué malformaciones produce el síndrome de rubéola congénita?',
      a: 'Visión: cataratas, retinopatía pigmentaria, opacidad corneal, glaucoma. Cardiovascular: ductus arterioso persistente, estenosis pulmonar/aórtica/renal, comunicación interventricular, miocarditis. Oído/SNC: sordera, autismo, microcefalia, meningoencefalitis. Otros: púrpura trombocitopénica, hepatoesplenomegalia, hepatitis, ictericia.'
    },
    {
      id: 'v40', grupo: 'Virus ARN envueltos', org: 'Rubéola', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'indirecto',
      q: '¿Cómo se diagnostica la rubéola, especialmente en la embarazada?',
      a: 'Búsqueda de IgM e IgG (fundamental en la embarazada para evaluar riesgo fetal) y diagnóstico clínico.'
    },

    // --- Rhinovirus ---
    {
      id: 'v41', grupo: 'Virus ARN envueltos', org: 'Rhinovirus', cat: 'Características', tincion: 'arn',
      q: '¿A qué temperatura se multiplica mejor el Rhinovirus y por qué explica su localización clínica?',
      a: 'Se multiplica a 33°C, la temperatura de la mucosa nasal y de las vías aéreas superiores; por eso produce el resfriado común y no infecciones de vías bajas. Son además lábiles a agentes físico-químicos y no resisten el pH ácido.'
    },
    {
      id: 'v42', grupo: 'Virus ARN envueltos', org: 'Rhinovirus', cat: 'Clínica', tincion: 'arn',
      q: '¿Por qué no se piden pruebas de laboratorio de rutina para el Rhinovirus?',
      a: 'Porque produce un cuadro benigno y autolimitado (resfriado común, rinitis, picazón nasal, obstrucción nasal, tos, irritación ocular), transmitido por estornudo o contacto con las manos.'
    },

    // --- Adenovirus ---
    {
      id: 'v43', grupo: 'Virus ADN', org: 'Adenovirus', cat: 'Características', tincion: 'adn',
      q: '¿Por qué el Adenovirus puede alcanzar el tracto gastrointestinal, a diferencia de otros virus respiratorios?',
      a: 'Su genoma es ADN desnudo, estable a pH bajo, por lo que resiste las secreciones gástricas y puede alcanzar el tracto digestivo (infecta epitelio respiratorio, conjuntivas y tubo digestivo).'
    },
    {
      id: 'v44', grupo: 'Virus ADN', org: 'Adenovirus', cat: 'Clínica', tincion: 'adn',
      q: '¿Cuál es la importancia del Adenovirus como causa de diarrea infantil y de infecciones respiratorias bajas?',
      a: 'Es el 2° agente causal más importante de diarrea infantil después de los rotavirus, y el 2° patógeno viral de importancia después del VSR en infecciones respiratorias agudas bajas en niños menores de 5 años.'
    },
    {
      id: 'v45', grupo: 'Virus ADN', org: 'Adenovirus', cat: 'Transmisión', tincion: 'adn',
      q: '¿Cuáles son las vías de transmisión del Adenovirus, y cuál predomina en niños?',
      a: 'Gotas respiratorias, contacto directo, o vía fecal-oral (esta última es la principal en niños). Solo 7 de los 51 serotipos establecidos infectan al hombre.'
    },
    {
      id: 'v46', grupo: 'Virus ADN', org: 'Adenovirus', cat: 'Diagnóstico', tincion: 'adn', tipoDx: 'directo',
      q: '¿Cómo se diagnostica el Adenovirus?',
      a: 'Aspirado o hisopado nasofaríngeo, exudado conjuntival o heces (según la clínica), detección de antígeno y PCR.'
    },

    // --- Coronavirus ---
    {
      id: 'v47', grupo: 'Virus ARN envueltos', org: 'Coronavirus', cat: 'Características', tincion: 'arn',
      q: '¿Qué glicoproteína de superficie del Coronavirus es el antígeno principal estimulante de anticuerpos neutralizantes y qué función cumple?',
      a: 'La glicoproteína S (spike, de mayor tamaño), que le da forma de corona, se une a la célula huésped e induce la fusión de membranas.'
    },
    {
      id: 'v48', grupo: 'Virus ARN envueltos', org: 'Coronavirus', cat: 'Patogenia', tincion: 'arn',
      q: '¿Cómo produce el daño pulmonar el Coronavirus?',
      a: 'Genera descamación de neumonocitos, daño alveolar, acúmulo importante de líquido en el intersticio pulmonar, y formación de membranas hialinas a nivel alveolar que impiden el intercambio gaseoso.'
    },
    {
      id: 'v49', grupo: 'Virus ARN envueltos', org: 'Coronavirus', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué formas clínicas puede tener la infección por Coronavirus?',
      a: 'Respiratorias (resfriado común a síndrome respiratorio agudo severo, con neumonía atípica bilateral y fiebre >38°C), entéricas (en menores de 1 año, gastroenteritis crónica) y neurológicas (raras, por daño en neuronas y macrófagos del SNC).'
    },
    {
      id: 'v50', grupo: 'Virus ARN envueltos', org: 'Coronavirus', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la infección por Coronavirus?',
      a: 'Hisopado nasofaríngeo o esputo; ELISA (busca antígeno, directo), PCR (directo) y búsqueda de inmunoglobulinas (indirecto).'
    },

    // --- Hepatitis: generalidades ---
    {
      id: 'v51', grupo: 'Virus de hepatitis', org: 'Generalidades', cat: 'Características', tincion: 'arn',
      q: '¿Cómo se define histológicamente la hepatitis aguda y la hepatitis crónica?',
      a: 'La hepatitis aguda más frecuente presenta necrosis moteada con desorganización panlobulillar, aumento del número y pleomorfismo de los hepatocitos. La hepatitis crónica se caracteriza por lesión hepatocelular, inflamación y fibrosis durante más de 6 meses.'
    },
    {
      id: 'v52', grupo: 'Virus de hepatitis', org: 'Generalidades', cat: 'Características', tincion: 'arn',
      q: '¿Qué virus no hepatotropos también pueden causar hepatitis?',
      a: 'Virus Epstein-Barr, citomegalovirus, sarampión, varicela, herpes simple 1, virus de la fiebre amarilla y rubéola.'
    },

    // --- HAV ---
    {
      id: 'v53', grupo: 'Virus de hepatitis', org: 'Hepatitis A (HAV)', cat: 'Transmisión', tincion: 'arn',
      q: '¿Cómo se transmite la hepatitis A y en qué grupo etario es más común?',
      a: 'Vía fecal-oral; es más común en niños. Genoma ARN desnudo, 1 solo serotipo, incubación de 3-4 semanas.'
    },
    {
      id: 'v54', grupo: 'Virus de hepatitis', org: 'Hepatitis A (HAV)', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico de la hepatitis A y qué porcentaje evoluciona a hepatitis fulminante?',
      a: '95% asintomática. Cuando hay síntomas: fiebre, artralgia, mialgia, fatiga, náuseas, vómitos, diarrea y/o estreñimiento, anorexia, ictericia, coluria, heces acólicas, elevación de transaminasas. Solo el 0,3% evoluciona a hepatitis fulminante con alta mortalidad.'
    },
    {
      id: 'v55', grupo: 'Virus de hepatitis', org: 'Hepatitis A (HAV)', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'indirecto',
      q: '¿Cómo se diagnostica la hepatitis A y existe vacuna?',
      a: 'Búsqueda de IgM (infección aguda) e IgG, junto con la elevación de transaminasas. Existe vacuna.'
    },

    // --- HEV ---
    {
      id: 'v56', grupo: 'Virus de hepatitis', org: 'Hepatitis E (HEV)', cat: 'Transmisión', tincion: 'arn',
      q: '¿Cómo se transmite la hepatitis E y qué genotipos infectan al humano?',
      a: 'Vía fecal-oral, distribución universal, incubación de 25-40 días. Genoma ARN desnudo, 4 genotipos: 1 y 2 infectan solo a humanos, 3 y 4 también a animales.'
    },
    {
      id: 'v57', grupo: 'Virus de hepatitis', org: 'Hepatitis E (HEV)', cat: 'Clínica', tincion: 'arn',
      q: '¿Por qué la hepatitis E es especialmente peligrosa en embarazadas del tercer trimestre?',
      a: 'Generalmente es asintomática y de buen pronóstico, similar a HAV, pero si afecta a embarazadas en el 3er trimestre causa una hepatitis fulminante con alta mortalidad. NO hay vacuna.'
    },

    // --- HBV ---
    {
      id: 'v58', grupo: 'Virus de hepatitis', org: 'Hepatitis B (HBV)', cat: 'Características', tincion: 'adn',
      q: '¿Qué tres antígenos se estudian en la hepatitis B y cuál nunca se detecta libre en el plasma?',
      a: 'Antígeno de superficie/Australia (HBsAg, se secreta al plasma), antígeno Core (nunca se detecta libre en plasma) y antígeno E (HBeAg, se detecta en sangre).'
    },
    {
      id: 'v59', grupo: 'Virus de hepatitis', org: 'Hepatitis B (HBV)', cat: 'Transmisión', tincion: 'adn',
      q: '¿Cuáles son las vías de transmisión de la hepatitis B y en qué grupo etario es más frecuente?',
      a: 'Vía parenteral, sexual, percutánea y materno-infantil (parto). Mayor incidencia en adolescentes y jóvenes por transmisión sexual; es muy contagiosa, con incubación de 60-90 días.'
    },
    {
      id: 'v60', grupo: 'Virus de hepatitis', org: 'Hepatitis B (HBV)', cat: 'Patogenia', tincion: 'adn',
      q: '¿Por qué el HBV tiene tan alta variabilidad genómica y cómo se produce el daño hepático?',
      a: 'Posee una transcriptasa inversa con alta tasa de error, generando gran variabilidad genómica. La destrucción de los hepatocitos infectados se produce por la respuesta inmunitaria del hospedador frente a los antígenos virales (no por daño citopático directo).'
    },
    {
      id: 'v61', grupo: 'Virus de hepatitis', org: 'Hepatitis B (HBV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Qué complicaciones a largo plazo puede generar la hepatitis B crónica?',
      a: 'Puede evolucionar a cirrosis o hepatocarcinoma; la inflamación crónica aumenta la producción de especies reactivas de oxígeno y disminuye antioxidantes, facilitando mutaciones oncogénicas en el ADN del hepatocito.'
    },
    {
      id: 'v62', grupo: 'Virus de hepatitis', org: 'Hepatitis B (HBV)', cat: 'Diagnóstico', tincion: 'adn', tipoDx: 'ambos',
      q: '¿Cómo se interpretan los marcadores serológicos de la hepatitis B?',
      a: 'HBsAg y HBeAg (Ag, directos): infección activa. Anti-HBc IgM: infección reciente; IgG: infección pasada. Anti-HBs: indica curación o vacunación. Al curarse, estos parámetros dejan de detectarse. Existe vacuna.'
    },

    // --- HDV ---
    {
      id: 'v63', grupo: 'Virus de hepatitis', org: 'Hepatitis D (HDV)', cat: 'Características', tincion: 'arn',
      q: '¿Por qué el virus de la hepatitis D depende del HBV para replicarse?',
      a: 'No posee genes que codifiquen proteínas para formar su envoltura externa, por lo que solo puede multiplicarse en células que estén infectadas simultáneamente por él y por el HBV.'
    },
    {
      id: 'v64', grupo: 'Virus de hepatitis', org: 'Hepatitis D (HDV)', cat: 'Patogenia', tincion: 'arn',
      q: '¿Qué diferencia hay entre coinfección y sobreinfección por HDV?',
      a: 'Coinfección: infección simultánea con HBV y HDV en una persona no infectada previamente con HBV. Sobreinfección: infección por HDV en un paciente ya portador crónico de HBV; estos pacientes tienen cuadros clínicos más graves.'
    },
    {
      id: 'v65', grupo: 'Virus de hepatitis', org: 'Hepatitis D (HDV)', cat: 'Clínica', tincion: 'arn',
      q: '¿Cómo es el curso clínico típico de la coinfección por HDV, y qué ocurre en la sobreinfección?',
      a: 'Cuadro semejante a la hepatitis B pero bifásico, con dos elevaciones de transaminasas separadas por un mes. En la sobreinfección, el cuadro es mucho más grave, con hepatitis fulminante y fallo hepático.'
    },

    // --- HCV ---
    {
      id: 'v66', grupo: 'Virus de hepatitis', org: 'Hepatitis C (HCV)', cat: 'Transmisión', tincion: 'arn',
      q: '¿Cómo se transmite la hepatitis C?',
      a: 'Vía parenteral, perinatal y sexual; incubación de 45-60 días. Genoma ARN envuelto, con 6 genotipos y diversos subgenotipos.'
    },
    {
      id: 'v67', grupo: 'Virus de hepatitis', org: 'Hepatitis C (HCV)', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué distingue a la hepatitis C de las otras hepatitis virales en cuanto a su evolución?',
      a: 'A diferencia de las otras, tiene una gran tendencia a la cronicidad, pudiendo producir cirrosis hepática o carcinoma hepatocelular; la respuesta inmunitaria celular contribuye principalmente a la lesión hepática.'
    },
    {
      id: 'v68', grupo: 'Virus de hepatitis', org: 'Hepatitis C (HCV)', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'indirecto',
      q: '¿Cómo se diagnostica la hepatitis C?',
      a: 'Búsqueda de inmunoglobulinas anti-HCV y búsqueda de antígeno.'
    },

    // --- Enterovirus: generalidades ---
    {
      id: 'v69', grupo: 'Enterovirus', org: 'Generalidades', cat: 'Características', tincion: 'arn',
      q: '¿Qué tienen en común Poliovirus, Coxsackie y Parecho/Enterovirus en cuanto a meningitis?',
      a: 'Los tres son la primera causa de meningitis viral en niños, generalmente autolimitada, con líquido cefalorraquídeo claro.'
    },

    // --- Poliovirus ---
    {
      id: 'v70', grupo: 'Enterovirus', org: 'Poliovirus', cat: 'Patogenia', tincion: 'arn',
      q: '¿Qué estructura del SNC se ve afectada en la poliomielitis?',
      a: 'Se asocia con inflamación y destrucción de la sustancia gris del SNC, especialmente de la médula espinal, principalmente del asta anterior (motoneuronas).'
    },
    {
      id: 'v71', grupo: 'Enterovirus', org: 'Poliovirus', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué porcentaje de infecciones por poliovirus son asintomáticas y cuál desarrolla parálisis?',
      a: 'El 90% son asintomáticas; 5% da enfermedad febril inespecífica; 1-2% sufre meningitis aséptica; solo 1/1000 desarrolla poliomielitis paralítica (espinal asimétrica y flácida, o bulbar con compromiso de los pares IX y X).'
    },
    {
      id: 'v72', grupo: 'Enterovirus', org: 'Poliovirus', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'directo',
      q: '¿Cómo se diagnostica la poliomielitis y existe vacuna?',
      a: 'PCR de un frotis faríngeo o una muestra de heces. Hay vacuna.'
    },

    // --- Coxsackie ---
    {
      id: 'v73', grupo: 'Enterovirus', org: 'Coxsackie A', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué es la herpangina y qué otro cuadro produce Coxsackie A?',
      a: 'La herpangina se caracteriza por fiebre y dolor al deglutir, con lesiones vesiculares en el paladar blando alrededor de la úvula. Coxsackie A también causa conjuntivitis hemorrágica (hemorragia subconjuntival, queratitis y dolor ocular).'
    },
    {
      id: 'v74', grupo: 'Enterovirus', org: 'Coxsackie B', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué es la pleurodinia y qué virus la produce?',
      a: 'Es la aparición súbita de fiebre y dolor torácico de carácter pleurítico con hipersensibilidad dolorosa de la piel; es producida por Coxsackie B.'
    },

    // --- Parecho/Enterovirus ---
    {
      id: 'v75', grupo: 'Enterovirus', org: 'Parecho/Enterovirus', cat: 'Clínica', tincion: 'arn',
      q: '¿Qué cuadros produce el Parecho/Enterovirus, especialmente en menores de 2 años?',
      a: 'Infecciones respiratorias y gastrointestinales, meningoencefalitis, sepsis en menores de 2 años, meningitis aséptica y síndrome febril.'
    },

    // --- Rotavirus ---
    {
      id: 'v76', grupo: 'Enterovirus', org: 'Rotavirus', cat: 'Características', tincion: 'arn',
      q: '¿Qué genotipos de rotavirus afectan al humano y qué característica explica su alta transmisibilidad?',
      a: 'Los genotipos B y C afectan al humano (D y G a animales). Poseen una dosis infectiva mínima muy pequeña y son resistentes a agentes físicos y químicos, lo que explica su alta transmisibilidad.'
    },
    {
      id: 'v77', grupo: 'Enterovirus', org: 'Rotavirus', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuál es el cuadro clínico típico del rotavirus y en qué grupo etario es más frecuente?',
      a: 'Comienza con vómitos y fiebre, seguidos de diarrea intensa y dolor abdominal, pudiendo causar deshidratación; causa enteritis frecuente en niños entre 6 meses y 1 año.'
    },
    {
      id: 'v78', grupo: 'Enterovirus', org: 'Rotavirus', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'directo',
      q: '¿Por qué NO se realiza diagnóstico indirecto para el rotavirus?',
      a: 'Porque el virus permanece en el enterocito y no pasa a sangre, por lo que no se generan anticuerpos útiles. El diagnóstico es directo: detección de antígeno en heces por enzimoinmunoanálisis y PCR.'
    },

    // --- Rabia ---
    {
      id: 'v79', grupo: 'Rabia', org: 'Virus de la rabia', cat: 'Transmisión', tincion: 'arn',
      q: '¿Cómo se transmite la rabia y qué animales son reservorio?',
      a: 'Por mordeduras con laceración de la piel (excepcionalmente por aerosoles o trasplantes). Es una zoonosis; la saliva del animal (perro, gato, murciélago, zorro, zorrino) debe entrar en contacto con la piel. Incubación: 10 días a 1 año (habitualmente 20-40 días).'
    },
    {
      id: 'v80', grupo: 'Rabia', org: 'Virus de la rabia', cat: 'Patogenia', tincion: 'arn',
      q: '¿Cómo llega el virus de la rabia al SNC?',
      a: 'El virus es neurotrópico: entra en el organismo y viaja por los nervios motores desde el sitio de la mordedura hasta alcanzar el sistema nervioso central.'
    },
    {
      id: 'v81', grupo: 'Rabia', org: 'Virus de la rabia', cat: 'Clínica', tincion: 'arn',
      q: '¿Cuáles son las 4 fases clínicas de la rabia?',
      a: '1) Parestesias y hormigueos en el sitio de la mordedura. 2) Decaimiento y tristeza, con ansiedad, insomnio, malestar general, cefalea, alucinaciones o fiebre ligera. 3) Sialorrea (espuma en la boca) y espasmos de la glotis. 4) Encefalitis rábica, irreversible: el paciente muerde, pega y tiene convulsiones.'
    },
    {
      id: 'v82', grupo: 'Rabia', org: 'Virus de la rabia', cat: 'Diagnóstico', tincion: 'arn', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica la rabia?',
      a: 'Observación clínica, búsqueda de inmunoglobulinas y PCR.'
    },

    // --- Herpesviridae: generalidades ---
    {
      id: 'v83', grupo: 'Herpesviridae', org: 'Generalidades', cat: 'Características', tincion: 'adn',
      q: '¿En qué tejido queda latente cada subfamilia de Herpesviridae?',
      a: 'Alphaherpesvirinae (HSV1, HSV2, Varicela-Zóster): latencia en ganglios sensoriales. Betaherpesvirinae (CMV, HHV6, HHV7): latencia en tejido linfoide, glándulas secretoras y riñón. Gammaherpesvirinae (HHV8, Epstein-Barr): latencia en linfocitos B.'
    },

    // --- HSV1 ---
    {
      id: 'v84', grupo: 'Herpesviridae', org: 'Herpes simple 1 (HSV1)', cat: 'Patogenia', tincion: 'adn',
      q: '¿Dónde queda latente el HSV1 y por qué vía llega hasta ahí?',
      a: 'Desde el epitelio orofaríngeo asciende por los axones neuronales hasta el cuerpo de las neuronas sensitivas del ganglio trigémino, donde queda en latencia.'
    },
    {
      id: 'v85', grupo: 'Herpesviridae', org: 'Herpes simple 1 (HSV1)', cat: 'Clínica', tincion: 'adn',
      q: '¿Cómo evoluciona la lesión típica del HSV1 y por qué no deja cicatriz?',
      a: 'Comienza con dolor, ardor y picazón (por el trayecto axonal), luego aparece mácula, pápula, vesículas múltiples y ampollas con contenido acuoso que se rompen y forman costra; desaparece en una semana sin dejar cicatriz porque solo infecta las capas superficiales de la piel.'
    },
    {
      id: 'v86', grupo: 'Herpesviridae', org: 'Herpes simple 1 (HSV1)', cat: 'Diagnóstico', tincion: 'adn', tipoDx: 'directo',
      q: '¿Por qué NO se hace diagnóstico indirecto (Ig) para el HSV1?',
      a: 'Porque el virus es neurotropo: va y viene por los axones y no circula por la sangre, por lo que las inmunoglobulinas no sirven. Diagnóstico directo: líquido vesicular o exudado de la úlcera con tinción de Giemsa, inmunofluorescencia, cultivo celular, PCR y búsqueda de Ag. Tratamiento: aciclovir.'
    },
    {
      id: 'v87', grupo: 'Herpesviridae', org: 'Herpes simple 1 (HSV1)', cat: 'Patogenia', tincion: 'adn',
      q: '¿Qué estímulos pueden reactivar al HSV1 desde su latencia?',
      a: 'Radiación ultravioleta, menstruación, estrés, fiebre e inmunosupresión, entre otros.'
    },

    // --- HSV2 ---
    {
      id: 'v88', grupo: 'Herpesviridae', org: 'Herpes simple 2 (HSV2)', cat: 'Transmisión', tincion: 'adn',
      q: '¿Por qué el HSV2 es la causa N°1 de meningoencefalitis en el recién nacido?',
      a: 'Se transmite por contacto directo (vía sexual) y por infección perinatal; el paso del RN por el canal de parto de una madre con lesión activa es la principal vía de meningoencefalitis neonatal por HSV2.'
    },
    {
      id: 'v89', grupo: 'Herpesviridae', org: 'Herpes simple 2 (HSV2)', cat: 'Clínica', tincion: 'adn',
      q: '¿Qué cuadros produce el HSV2 en pacientes inmunosuprimidos?',
      a: 'Encefalitis, esofagitis (1/3 de las causas de esofagitis en SIDA), gastritis, colitis, artritis y meningitis con LCR claro.'
    },

    // --- Varicela-Zóster ---
    {
      id: 'v90', grupo: 'Herpesviridae', org: 'Varicela-Zóster (VZV)', cat: 'Patogenia', tincion: 'adn',
      q: '¿Cómo se disemina el VZV desde la vía respiratoria hasta la piel?',
      a: 'Alcanza la vía respiratoria, se multiplica en la mucosa y ganglios regionales, produce una primera viremia hacia hígado y bazo (donde se replica), y desde ahí una segunda viremia lo lleva a piel y mucosas, generando las lesiones de la varicela.'
    },
    {
      id: 'v91', grupo: 'Herpesviridae', org: 'Varicela-Zóster (VZV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Qué significa que las lesiones de la varicela sean "en cielo estrellado"?',
      a: 'Que todos los días aparecen vesículas nuevas, por lo que en un mismo momento coexisten lesiones en distintos estadios (mácula, pápula, vesícula, costra).'
    },
    {
      id: 'v92', grupo: 'Herpesviridae', org: 'Varicela-Zóster (VZV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Cuál es la malformación más común de la varicela congénita?',
      a: 'La atrofia de las extremidades inferiores es la más común; también puede haber atrofia cortical, hidrocefalia, vejiga neurogénica, coriorretinitis, microftalmia y cataratas.'
    },
    {
      id: 'v93', grupo: 'Herpesviridae', org: 'Varicela-Zóster (VZV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Qué es el herpes zóster y por qué solo aparece una vez en la vida?',
      a: 'Es la forma recurrente del VZV: desde los ganglios sensitivos donde quedó en latencia, el virus se reactiva y causa lesiones vesiculares dolorosas en piel ("culebrilla"), generalmente unilaterales; se considera de aparición única en la vida y puede contagiar varicela a quienes nunca la tuvieron.'
    },

    // --- CMV ---
    {
      id: 'v94', grupo: 'Herpesviridae', org: 'Citomegalovirus (CMV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Cómo se presenta la primoinfección por CMV en un huésped inmunocompetente?',
      a: 'Es asintomática o produce un síndrome mononucleósico leve, con faringitis, poliadenomegalias, exantema y linfomonocitosis sanguínea; luego puede permanecer latente en diversas células y tejidos.'
    },
    {
      id: 'v95', grupo: 'Herpesviridae', org: 'Citomegalovirus (CMV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Qué cuadros produce el CMV en inmunodeprimidos y en el feto?',
      a: 'Inmunodeprimidos: neumonitis, hepatitis, meningitis (en pacientes con HIV), neumonía grave, úlceras, retinitis, colitis, esofagitis, diarrea crónica, encefalitis. Feto: muerte o hepatoesplenomegalia, microcefalia y coriorretinitis.'
    },
    {
      id: 'v96', grupo: 'Herpesviridae', org: 'Citomegalovirus (CMV)', cat: 'Diagnóstico', tincion: 'adn', tipoDx: 'ambos',
      q: '¿Cuál es el mejor marcador serológico del CMV y por qué la detección viral en saliva u orina no confirma enfermedad activa?',
      a: 'La seroconversión es el mejor marcador serológico (indirecto). La detección del virus en saliva u orina NO indica enfermedad, ya que el virus se elimina durante largos períodos incluso sin patología activa. En embarazo se pide Ig; la PCR es la técnica más recomendada.'
    },

    // --- HHV6 ---
    {
      id: 'v97', grupo: 'Herpesviridae', org: 'Herpesvirus 6 (HHV6)', cat: 'Clínica', tincion: 'adn',
      q: '¿Cuál es el cuadro clínico típico del HHV6 en la primera infancia?',
      a: 'Fiebre sin otra manifestación clínica; cuando la fiebre baja, aparece una roséola en la cara que se expande a tórax y miembros. En adultos puede provocar síndrome mononucleósico; en casos graves puede generar encefalitis con elevada mortalidad.'
    },

    // --- HHV7 ---
    {
      id: 'v98', grupo: 'Herpesviridae', org: 'Herpesvirus 7 (HHV7)', cat: 'Clínica', tincion: 'adn',
      q: '¿Con qué otros virus suele coinfectar el HHV7 y qué produce en la primoinfección?',
      a: 'La primoinfección produce febrícula y exantema discreto (roséola). Generalmente produce coinfección con otros virus como HIV, citomegalovirus y HHV6.'
    },

    // --- HHV8 ---
    {
      id: 'v99', grupo: 'Herpesviridae', org: 'Herpesvirus 8 (HHV8)', cat: 'Clínica', tincion: 'adn',
      q: '¿Qué neoplasia produce el HHV8 y en qué condición aparece?',
      a: 'El sarcoma de Kaposi, una neoplasia oportunista endotelial con neoangiogénesis e infiltración de células inflamatorias; solo aparece si hay una importante inmunodepresión subyacente. Las lesiones son de color púrpura oscuro/rojo vino que confluyen en placas, en piel, cavidad oral y planta de los pies.'
    },

    // --- Epstein-Barr ---
    {
      id: 'v100', grupo: 'Herpesviridae', org: 'Epstein-Barr (EBV)', cat: 'Patogenia', tincion: 'adn',
      q: '¿Qué célula infecta principalmente el EBV y qué produce la "linfomonocitosis" característica?',
      a: 'Infecta a los linfocitos B. La gran cantidad de linfocitos T citotóxicos generados para eliminar a la mayoría de los B infectados es responsable de la linfomonocitosis; una pequeña proporción de linfocitos B queda con el virus en latencia.'
    },
    {
      id: 'v101', grupo: 'Herpesviridae', org: 'Epstein-Barr (EBV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Cuál es el cuadro clínico de la mononucleosis infecciosa por EBV?',
      a: 'Faringitis con placas blancas, fiebre alta, adenopatías (principalmente cervicales), hepatoesplenomegalia, lengua saburral, fotofobia, decaimiento, mialgia, artralgia, dolor abdominal, anorexia con pérdida de peso e ictericia; la recuperación espontánea ocurre en 2-3 semanas.'
    },
    {
      id: 'v102', grupo: 'Herpesviridae', org: 'Epstein-Barr (EBV)', cat: 'Clínica', tincion: 'adn',
      q: '¿Con qué neoplasias se asocia el virus de Epstein-Barr?',
      a: 'Carcinoma de células escamosas, sarcoma, cáncer de colon, cáncer de estómago, linfomas y linfoma de Hodgkin.'
    },
    {
      id: 'v103', grupo: 'Herpesviridae', org: 'Epstein-Barr (EBV)', cat: 'Diagnóstico', tincion: 'adn', tipoDx: 'indirecto',
      q: '¿Qué limitación tiene el monotest y qué estudios ayudan al diagnóstico diferencial con leucemia?',
      a: 'El monotest (aglutinación) puede dar falsos negativos; por eso se complementa con serología, PCR e IFI/ELISA (muy preciso). El hemograma (linfomonocitosis con células inmaduras) y el hepatograma (enzimas hepáticas alteradas) son importantes para el diagnóstico diferencial con leucemia.'
    },

    // --- VIH ---
    {
      id: 'v104', grupo: 'Retroviridae', org: 'VIH', cat: 'Características', tincion: 'retrovirus',
      q: '¿Qué dos glicoproteínas del VIH permiten el diagnóstico directo y qué enzimas virales son clave en su ciclo?',
      a: 'GP41 y GP120 son los factores de adherencia y sirven para el diagnóstico directo. El virus posee además una retrotranscriptasa y una integrasa.'
    },
    {
      id: 'v105', grupo: 'Retroviridae', org: 'VIH', cat: 'Transmisión', tincion: 'retrovirus',
      q: '¿Por qué vías se transmite el VIH y por cuál NO ingresa?',
      a: 'Parenteral, sexual (anal y vaginal) y vertical (parto, transplacentaria y lactancia, esta última menos frecuente). NO entra por piel sana: ingresa por mucosas, heridas o inyecciones.'
    },
    {
      id: 'v106', grupo: 'Retroviridae', org: 'VIH', cat: 'Patogenia', tincion: 'retrovirus',
      q: '¿Cómo penetra el VIH en el linfocito T CD4?',
      a: 'La GP120 (asociada a GP41) se une a la molécula CD4, produciendo un cambio conformacional que permite la unión al correceptor; esto hace que la GP41 modifique su estructura y se una a la membrana celular, permitiendo la penetración al citoplasma.'
    },
    {
      id: 'v107', grupo: 'Retroviridae', org: 'VIH', cat: 'Patogenia', tincion: 'retrovirus',
      q: '¿Qué es el "provirus" y por qué persiste de por vida?',
      a: 'Es el ADN bicatenario (transcripto del ARN viral por la retrotranscriptasa) que se integra al genoma celular mediante la integrasa; al quedar integrado en el ADN de la célula huésped, persiste para toda la vida.'
    },
    {
      id: 'v108', grupo: 'Retroviridae', org: 'VIH', cat: 'Clínica', tincion: 'retrovirus',
      q: '¿Cuáles son las 4 etapas clínicas de la infección por VIH?',
      a: '1) Cuadro clínico inicial (entre la infección y la producción de Ig), generalmente asintomático o similar a mononucleosis. 2) Período de latencia asintomática con linfadenomegalias generalizadas, puede durar 5-10 años. 3) Enfermedad moderada: aumenta la carga viral, caen los CD4, aparecen infecciones oportunistas variables. 4) Enfermedad avanzada (SIDA): CD4 por debajo de 200 cél/ml (lo normal es 1200), con enfermedades oportunistas, neoplasias y deterioro general.'
    },
    {
      id: 'v109', grupo: 'Retroviridae', org: 'VIH', cat: 'Clínica', tincion: 'retrovirus',
      q: '¿Cuáles son ejemplos de enfermedades marcadoras de SIDA?',
      a: 'Neumonía bilateral por Pneumocystis jirovecii, esofagitis por Candida/HSV1/CMV, tuberculosis pulmonar y extrapulmonar, histoplasmosis diseminada, meningitis por CMV, toxoplasmosis cerebral, criptococoma por Cryptococcus neoformans, isosporidiasis por Isospora belli, sarcoma de Kaposi por HHV8, linfoma de Burkitt y carcinoma de cérvix por HPV.'
    },
    {
      id: 'v110', grupo: 'Retroviridae', org: 'VIH', cat: 'Diagnóstico', tincion: 'retrovirus', tipoDx: 'ambos',
      q: '¿Cómo se diagnostica el VIH y qué ocurre en la ventana inmunológica inicial?',
      a: 'Búsqueda de Ig por ELISA de 4ta generación (indirecto), PCR para carga viral y búsqueda de Ag GP120 (directos). En la enfermedad inicial las Ig demoran entre 2 y 12 semanas en aparecer, por lo que en ese período se recurre a la carga viral; en la infección asintomática ya hay Ig, y se hace seguimiento con recuento de CD4 (cada 3 meses) y carga viral.'
    },

    // --- VPH ---
    {
      id: 'v111', grupo: 'Papovaviridae', org: 'VPH', cat: 'Características', tincion: 'adn',
      q: '¿Qué función cumple cada una de las 3 proteínas del VPH?',
      a: 'LCR (15%): controla la expresión de los genes virales, influye en virulencia y potencial oncogénico. E (early, 45%): interviene en la replicación viral y la transformación celular. L (late, 40%): codifica las proteínas estructurales de la cápside.'
    },
    {
      id: 'v112', grupo: 'Papovaviridae', org: 'VPH', cat: 'Características', tincion: 'adn',
      q: '¿Qué serotipos de VPH tienen alto riesgo oncogénico y cuáles bajo riesgo?',
      a: 'Alto riesgo: 16, 18, 31, 33 y 45. Bajo riesgo: 6 y 11 (asociados a condilomas).'
    },
    {
      id: 'v113', grupo: 'Papovaviridae', org: 'VPH', cat: 'Patogenia', tincion: 'adn',
      q: '¿Por qué el VPH puede pasar inadvertido para la inmunidad del huésped?',
      a: 'Las células epiteliales tienen baja eficiencia como presentadoras de antígeno, lo que permite que el virus permanezca "escondido" si la célula está intacta; además, el VPH NO produce viremia y se replica muy lentamente, al ritmo de la división celular.'
    },
    {
      id: 'v114', grupo: 'Papovaviridae', org: 'VPH', cat: 'Clínica', tincion: 'adn',
      q: '¿El VPH es suficiente por sí solo para generar cáncer genital?',
      a: 'No. Se consideran factores contribuyentes: exposición a carcinógenos físicos (radiaciones) y químicos, infecciones con patógenos oncogénicos (como Chlamydia), y factores del hospedador (herencia, estado inmune).'
    },
    {
      id: 'v115', grupo: 'Papovaviridae', org: 'VPH', cat: 'Clínica', tincion: 'adn',
      q: '¿Dónde se localiza con más frecuencia la papilomatosis laríngea y qué diferencia hay entre las verrugas cutáneas y las de mucosas?',
      a: 'La papilomatosis laríngea se localiza con más frecuencia en las cuerdas vocales (también tráquea, pulmones y cavidad oral). Las verrugas cutáneas NO son oncogénicas, pero las de las mucosas sí pueden serlo.'
    },
    {
      id: 'v116', grupo: 'Papovaviridae', org: 'VPH', cat: 'Diagnóstico', tincion: 'adn', tipoDx: 'directo',
      q: '¿Qué información aporta y qué limitación tiene el PAP como método de diagnóstico del VPH?',
      a: 'El PAP (citología exfoliativa) es un screening inicial que indica si las células están o no infectadas por VPH, pero NO indica si el virus está en las células basales o ya atravesó la lámina propia. Se complementa con búsqueda de antígeno, biología molecular junto a colposcopía y PCR.'
    },
  ],
  mc: [
    {
      id: 'vmc1', grupo: 'Virus hemorrágicos', org: 'Virus Junín (FHA)', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: 'Un trabajador rural de la pampa húmeda desarrolla en mayo fiebre, gingivorragias y exantema, SIN tos ni congestión nasal. ¿Cuál es el diagnóstico más probable?',
      options: ['Dengue', 'Fiebre hemorrágica argentina (virus Junín)', 'Influenza', 'Hantavirus'],
      correct: 1, explain: 'La zona (pampa húmeda), la estación (otoño-invierno, pico en mayo) y la ausencia de síntomas respiratorios son claves para sospechar fiebre hemorrágica argentina por virus Junín.'
    },
    {
      id: 'vmc2', grupo: 'Virus hemorrágicos', org: 'Virus Hanta', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Cuál es el mecanismo fisiopatológico central del síndrome pulmonar por Hanta?',
      options: ['Invasión directa del virus a los neumonocitos con destrucción citopática', 'Aumento de la permeabilidad vascular del endotelio pulmonar mediado por linfocitos T, generando edema pulmonar', 'Formación de membranas hialinas por depósito de fibrina', 'Broncoconstricción mediada por IgE'],
      correct: 1, explain: 'Los linfocitos T actúan sobre el endotelio pulmonar infectado incrementando la permeabilidad vascular, lo que lleva a edema pulmonar y distrés respiratorio.'
    },
    {
      id: 'vmc3', grupo: 'Arbovirus', org: 'Dengue', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿En qué situación es más frecuente la forma grave (fiebre hemorrágica/síndrome de shock) del dengue?',
      options: ['En la primera infección por cualquier serotipo', 'En personas infectadas por un segundo serotipo diferente al primero', 'Solo en niños menores de 2 años', 'Solo en personas no vacunadas'],
      correct: 1, explain: 'La infección secuencial por un segundo serotipo de dengue distinto al primero se asocia con mayor riesgo de forma grave (fenómeno de facilitación inmune).'
    },
    {
      id: 'vmc4', grupo: 'Arbovirus', org: 'Fiebre amarilla', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Cuál es el órgano blanco de la fiebre amarilla y qué lesión histológica característica produce?',
      options: ['Riñón, con necrosis tubular aguda', 'Hígado, con necrosis mediolobulillar y hepatosis grasa microvacuolar', 'Pulmón, con membranas hialinas', 'Bazo, con necrosis folicular'],
      correct: 1, explain: 'El hígado es el órgano blanco de la fiebre amarilla, con necrosis mediolobulillar de hepatocitos y hepatosis grasa microvacuolar.'
    },
    {
      id: 'vmc5', grupo: 'Arbovirus', org: 'Zika vs Chikungunya', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Cuál de estos arbovirus NO se contagia durante el embarazo, a diferencia del Zika?',
      options: ['Dengue', 'Chikungunya', 'Fiebre amarilla', 'Ninguno; todos se contagian igual'],
      correct: 1, explain: 'A diferencia del Zika (que puede causar microcefalia y otras alteraciones fetales graves), el Chikungunya NO se contagia en el embarazo.'
    },
    {
      id: 'vmc6', grupo: 'Virus ARN envueltos', org: 'Influenza', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Qué mecanismo permite que surjan nuevas variantes pandémicas del virus Influenza A?',
      options: ['Mutación puntual en la proteína M2', 'Recombinación genética en cerdos coinfectados por 2 variantes distintas de HA/NA', 'Conjugación con bacterias de la microbiota respiratoria', 'Transducción viral mediada por bacteriófagos'],
      correct: 1, explain: 'Los cerdos pueden infectarse simultáneamente por 2 variantes diferentes del virus, lo que permite la recombinación genética y el surgimiento de nuevas variantes capaces de alcanzar al hombre.'
    },
    {
      id: 'vmc7', grupo: 'Virus ARN envueltos', org: 'Virus Respiratorio Sincitial (VSR)', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Por qué el VSR no produce viremia?',
      options: ['Porque no tiene envoltura lipídica', 'Porque se propaga célula a célula sin pasar al líquido extracelular', 'Porque queda latente en ganglios sensoriales', 'Porque solo infecta células no vasculares'],
      correct: 1, explain: 'El VSR se replica en la nasofaringe y se propaga de célula a célula sin pasar al líquido extracelular, por eso no genera viremia.'
    },
    {
      id: 'vmc8', grupo: 'Virus ARN envueltos', org: 'Sarampión', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Cuál es el hallazgo patognomónico del sarampión?',
      options: ['Manchas de Koplik', 'Signo de Nikolsky', 'Exantema en escarapela', 'Petequias palatinas'],
      correct: 0, explain: 'Las manchas de Koplik (lesiones rojas y brillantes con punto blanco central en la mucosa bucal) son patognomónicas del sarampión.'
    },
    {
      id: 'vmc9', grupo: 'Virus ARN envueltos', org: 'Rubéola', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Cuál de estas NO es una manifestación típica del síndrome de rubéola congénita?',
      options: ['Cataratas', 'Sordera', 'Ductus arterioso persistente', 'Consolidación pulmonar con membranas hialinas'],
      correct: 3, explain: 'Las membranas hialinas alveolares son características del daño pulmonar por coronavirus, no de la rubéola congénita, que afecta predominantemente ojo, corazón, oído y SNC.'
    },
    {
      id: 'vmc10', grupo: 'Virus ADN', org: 'Adenovirus', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Por qué el Adenovirus puede causar enteritis, a diferencia de otros virus respiratorios de genoma ARN?',
      options: ['Porque su genoma ADN desnudo es estable a pH bajo y resiste las secreciones gástricas', 'Porque se replica exclusivamente en el intestino', 'Porque posee una cápside resistente a la bilis', 'Porque no tiene relación; el adenovirus no causa enteritis'],
      correct: 0, explain: 'Al ser ADN desnudo estable a pH bajo, el adenovirus resiste las secreciones gástricas y puede alcanzar y replicarse en el tracto gastrointestinal.'
    },
    {
      id: 'vmc11', grupo: 'Virus ARN envueltos', org: 'Coronavirus', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Qué glicoproteína le da al coronavirus su aspecto de "corona radiada" y es el principal antígeno estimulante de anticuerpos neutralizantes?',
      options: ['Proteína M', 'Glicoproteína S', 'Hemaglutinina esterasa (HE)', 'Proteína N'],
      correct: 1, explain: 'La glicoproteína S (spike), de mayor tamaño, le da la forma de corona y es el antígeno principal estimulante de anticuerpos neutralizantes.'
    },
    {
      id: 'vmc12', grupo: 'Virus de hepatitis', org: 'Hepatitis A vs Hepatitis B', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Cuál de estas hepatitis tiene mayor riesgo de cronificar?',
      options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis E', 'Ninguna cronifica'],
      correct: 1, explain: 'A diferencia de la hepatitis A (que no cronifica), la hepatitis B puede evolucionar a infección crónica, cirrosis o hepatocarcinoma (aunque la hepatitis C tiene la mayor tendencia a la cronicidad de todas).'
    },
    {
      id: 'vmc13', grupo: 'Virus de hepatitis', org: 'Hepatitis E (HEV)', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿En qué situación clínica la hepatitis E tiene alta mortalidad?',
      options: ['En niños menores de 5 años', 'En embarazadas durante el tercer trimestre', 'En hombres mayores de 60 años', 'En pacientes vacunados contra hepatitis B'],
      correct: 1, explain: 'La hepatitis E en embarazadas del tercer trimestre puede causar hepatitis fulminante con alta mortalidad; en el resto de la población es generalmente asintomática y de buen pronóstico.'
    },
    {
      id: 'vmc14', grupo: 'Virus de hepatitis', org: 'Hepatitis B (HBV)', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Qué marcador serológico de hepatitis B indica curación o vacunación?',
      options: ['HBsAg', 'HBeAg', 'Anti-HBc IgM', 'Anti-HBs'],
      correct: 3, explain: 'El anti-HBs (anticuerpo contra el antígeno de superficie) indica curación de la infección o respuesta a la vacunación.'
    },
    {
      id: 'vmc15', grupo: 'Virus de hepatitis', org: 'Hepatitis D (HDV)', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Por qué la sobreinfección por HDV es más grave que la coinfección?',
      options: ['Porque ocurre en pacientes ya portadores crónicos de HBV, con mayor daño hepático acumulado', 'Porque el HDV muta más rápido en la sobreinfección', 'Porque en la sobreinfección no hay respuesta inmune', 'Porque la sobreinfección siempre es asintomática, retrasando el diagnóstico'],
      correct: 0, explain: 'La sobreinfección ocurre en un paciente ya portador crónico de HBV, lo que produce cuadros clínicos más graves, incluyendo hepatitis fulminante y fallo hepático.'
    },
    {
      id: 'vmc16', grupo: 'Enterovirus', org: 'Poliovirus', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Qué proporción de las infecciones por poliovirus desarrolla parálisis?',
      options: ['1 de cada 10', '1 de cada 100', '1 de cada 1000', 'Prácticamente el 100%'],
      correct: 2, explain: 'Solo 1 de cada 1000 infecciones por poliovirus desarrolla poliomielitis paralítica; el 90% de las infecciones son asintomáticas.'
    },
    {
      id: 'vmc17', grupo: 'Enterovirus', org: 'Coxsackie A vs B', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: 'Un paciente presenta fiebre súbita y dolor torácico pleurítico intenso con hipersensibilidad cutánea. ¿Qué virus es el responsable y cómo se llama el cuadro?',
      options: ['Coxsackie A – herpangina', 'Coxsackie B – pleurodinia', 'Poliovirus – mialgia epidémica', 'Rotavirus – enteritis'],
      correct: 1, explain: 'La pleurodinia, con fiebre súbita y dolor torácico pleurítico, es característica de Coxsackie B.'
    },
    {
      id: 'vmc18', grupo: 'Enterovirus', org: 'Rotavirus', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Por qué NO se realiza diagnóstico serológico indirecto para el rotavirus?',
      options: ['Porque el virus permanece en el enterocito y no pasa a sangre, sin generar anticuerpos útiles', 'Porque el rotavirus es demasiado pequeño para generar respuesta inmune', 'Porque los anticuerpos generados reaccionan de forma cruzada con adenovirus', 'Porque el rotavirus muta constantemente, invalidando la serología'],
      correct: 0, explain: 'El tropismo del rotavirus por el enterocito, sin pasar a sangre, hace que no se generen anticuerpos útiles para el diagnóstico; se usa diagnóstico directo (antígeno en heces, PCR).'
    },
    {
      id: 'vmc19', grupo: 'Rabia', org: 'Virus de la rabia', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Cuál es la primera manifestación clínica de la rabia tras la mordedura?',
      options: ['Encefalitis con convulsiones', 'Parestesias y hormigueos en el sitio de la mordedura', 'Sialorrea y espasmos de la glotis', 'Parálisis flácida ascendente'],
      correct: 1, explain: 'La primera fase clínica de la rabia son parestesias y hormigueos en el sitio de la mordedura, porque el virus asciende por los nervios motores desde ese punto.'
    },
    {
      id: 'vmc20', grupo: 'Herpesviridae', org: 'HSV1', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Por qué NO se hace diagnóstico indirecto (con inmunoglobulinas) para el HSV1?',
      options: ['Porque el virus es neurotropo y circula por los axones, no por la sangre', 'Porque no genera respuesta inmune detectable', 'Porque las Ig reaccionan de forma cruzada con VZV', 'Porque el HSV1 nunca produce anticuerpos'],
      correct: 0, explain: 'Al ser neurotropo y viajar por los axones en lugar de la sangre, las inmunoglobulinas no son un buen marcador de la infección activa por HSV1.'
    },
    {
      id: 'vmc21', grupo: 'Herpesviridae', org: 'HSV2', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Cuál es la causa N°1 de meningoencefalitis en el recién nacido?',
      options: ['Herpes simple 1', 'Herpes simple 2', 'Citomegalovirus', 'Varicela-Zóster'],
      correct: 1, explain: 'El HSV2, transmitido por infección perinatal durante el parto, es la causa número 1 de meningoencefalitis en el recién nacido.'
    },
    {
      id: 'vmc22', grupo: 'Herpesviridae', org: 'Varicela-Zóster (VZV)', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Qué significa que las lesiones de la varicela sean "en cielo estrellado"?',
      options: ['Que solo aparecen de noche', 'Que coexisten lesiones en distintos estadios porque aparecen vesículas nuevas cada día', 'Que tienen forma de estrella', 'Que se ubican solo en el tronco'],
      correct: 1, explain: 'Todos los días aparecen vesículas nuevas, por lo que en un mismo momento coexisten lesiones en distintos estadios evolutivos (mácula, pápula, vesícula, costra).'
    },
    {
      id: 'vmc23', grupo: 'Herpesviridae', org: 'Citomegalovirus (CMV)', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Por qué detectar CMV en saliva u orina no confirma enfermedad activa?',
      options: ['Porque son muestras poco sensibles', 'Porque el virus se elimina durante largos períodos incluso sin patología activa', 'Porque el CMV no se replica en esos sitios', 'Porque siempre da falsos positivos en esas muestras'],
      correct: 1, explain: 'El CMV puede eliminarse por saliva u orina durante largos períodos sin que exista enfermedad activa, por lo que su sola detección no es diagnóstica; la seroconversión es el mejor marcador.'
    },
    {
      id: 'vmc24', grupo: 'Herpesviridae', org: 'HHV8', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Qué neoplasia se asocia al herpesvirus 8 (HHV8) y en qué condición aparece típicamente?',
      options: ['Linfoma de Burkitt, en niños sanos', 'Sarcoma de Kaposi, en pacientes con importante inmunodepresión', 'Carcinoma de cérvix, por transmisión sexual', 'Hepatocarcinoma, tras hepatitis B crónica'],
      correct: 1, explain: 'El HHV8 causa sarcoma de Kaposi, una neoplasia oportunista endotelial que solo se manifiesta en presencia de inmunodepresión importante.'
    },
    {
      id: 'vmc25', grupo: 'Herpesviridae', org: 'Epstein-Barr (EBV)', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Qué célula es el principal blanco del virus de Epstein-Barr?',
      options: ['Linfocitos T CD4', 'Linfocitos B', 'Macrófagos alveolares', 'Células endoteliales'],
      correct: 1, explain: 'El EBV infecta principalmente a los linfocitos B; los linfocitos T citotóxicos generados para eliminarlos son responsables de la linfomonocitosis característica.'
    },
    {
      id: 'vmc26', grupo: 'Retroviridae', org: 'VIH', cat: 'Opción múltiple', tincion: 'retrovirus', type: 'mc',
      q: '¿A qué molécula de superficie del linfocito T se une la GP120 del VIH para iniciar la infección?',
      options: ['CD8', 'CD4', 'CD19', 'CD3'],
      correct: 1, explain: 'La GP120, asociada a GP41, se une a la molécula CD4 del linfocito T, iniciando el proceso de entrada del virus a la célula.'
    },
    {
      id: 'vmc27', grupo: 'Retroviridae', org: 'VIH', cat: 'Opción múltiple', tincion: 'retrovirus', type: 'mc',
      q: '¿A qué nivel de CD4 se considera que un paciente con VIH desarrolló SIDA?',
      options: ['Por debajo de 800 células/ml', 'Por debajo de 500 células/ml', 'Por debajo de 200 células/ml', 'Por debajo de 50 células/ml'],
      correct: 2, explain: 'Se considera enfermedad avanzada (SIDA) cuando el recuento de CD4 desciende por debajo de 200 células/ml (el valor normal es de aproximadamente 1200 células/ml).'
    },
    {
      id: 'vmc28', grupo: 'Retroviridae', org: 'VIH', cat: 'Opción múltiple', tincion: 'retrovirus', type: 'mc',
      q: '¿Cuál de estas NO es una enfermedad marcadora de SIDA?',
      options: ['Neumonía por Pneumocystis jirovecii', 'Sarcoma de Kaposi por HHV8', 'Faringitis estreptocócica no complicada', 'Toxoplasmosis cerebral'],
      correct: 2, explain: 'La faringitis estreptocócica no complicada es una infección común que no define SIDA; las otras tres son enfermedades marcadoras clásicas.'
    },
    {
      id: 'vmc29', grupo: 'Papovaviridae', org: 'VPH', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Cuáles son los serotipos de VPH de mayor riesgo oncogénico?',
      options: ['6 y 11', '16 y 18', '1 y 2', '30 y 31 exclusivamente'],
      correct: 1, explain: 'Los serotipos 16, 18, 31, 33 y 45 tienen alto riesgo oncogénico; los serotipos 6 y 11 tienen bajo riesgo (asociados a condilomas).'
    },
    {
      id: 'vmc30', grupo: 'Papovaviridae', org: 'VPH', cat: 'Opción múltiple', tincion: 'adn', type: 'mc',
      q: '¿Por qué el VPH puede evadir la respuesta inmune del huésped durante mucho tiempo?',
      options: ['Porque produce una cápsula polisacárida', 'Porque produce viremia persistente que agota al sistema inmune', 'Porque las células epiteliales son poco eficientes como presentadoras de antígeno y el virus no produce viremia', 'Porque infecta directamente a los linfocitos T reguladores'],
      correct: 2, explain: 'La baja eficiencia de las células epiteliales como presentadoras de antígeno, sumada a la ausencia de viremia, permite que el VPH permanezca "escondido" del sistema inmune.'
    },
    {
      id: 'vmc31', grupo: 'Virus de hepatitis', org: 'Hepatitis C (HCV)', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Qué característica distingue a la hepatitis C del resto de las hepatitis virales en cuanto a su pronóstico?',
      options: ['Es la única que tiene vacuna disponible', 'Tiene la mayor tendencia a la cronicidad, con riesgo de cirrosis y carcinoma hepatocelular', 'Nunca produce síntomas', 'Solo se transmite por vía fecal-oral'],
      correct: 1, explain: 'La hepatitis C tiene la mayor tendencia a la cronicidad de todas las hepatitis virales, con riesgo de evolucionar a cirrosis o carcinoma hepatocelular.'
    },
    {
      id: 'vmc32', grupo: 'Virus ARN envueltos', org: 'Rhinovirus', cat: 'Opción múltiple', tincion: 'arn', type: 'mc',
      q: '¿Por qué el Rhinovirus se limita a infectar las vías aéreas superiores?',
      options: ['Porque se multiplica óptimamente a 33°C, la temperatura de la mucosa nasal', 'Porque no puede atravesar la mucosa bronquial', 'Porque requiere anaerobiosis estricta', 'Porque es destruido por la temperatura corporal central'],
      correct: 0, explain: 'El Rhinovirus se multiplica mejor a 33°C (temperatura de la mucosa nasal y vías aéreas superiores), por lo que no suele producir infecciones de vías bajas.'
    },
  ]
};
